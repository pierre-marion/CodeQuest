import express from "express";
import cors from "cors";
import { missions } from "./mission.js";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

// Sert le client statique
app.use(express.static(path.join(__dirname, "../client")));

// 1) Liste missions on creeer une api 
app.get("/api/missions", (req, res) => {
  res.json(missions.map(m => ({
    id: m.id,
    track: m.track,
    difficulty: m.difficulty,
    title: m.title
  })));
});

// 2) Détail mission
app.get("/api/missions/:id", (req, res) => {
  const id = Number(req.params.id);
  const mission = missions.find(m => m.id === id);
  if (!mission) return res.status(404).json({ error: "Mission introuvable" });
  res.json(mission);
});
app.post("/api/missions/:id/submit", (req, res) => {
  const id = Number(req.params.id);
  const mission = missions.find(m => m.id === id);
  if (!mission) return res.status(404).json({ error: "Mission introuvable" });

  const { code } = req.body;
  if (typeof code !== "string") {
    return res.status(400).json({ error: "Le champ code est requis" });
  }

  // -------------------------
  // 1) Missions HTML/CSS (type: "text") -> regex
  // -------------------------
  if (mission.type === "text") {
    const results = (mission.tests || []).map(t => {
      let passed = false;
      let error = null;

      try {
        const re = new RegExp(t.pattern, "i");
        passed = re.test(code);
      } catch (e) {
        error = e?.message ?? String(e);
      }

      return { name: t.name, passed, error };
    });

    const ok = results.every(r => r.passed);
    return res.json({ ok, results });
  }

  // -------------------------
  // 2) Missions JS/TS/Node/Angular logique -> exécution + tests
  // -------------------------
  const fnName = mission.functionName;
  if (!fnName) {
    return res.json({ ok: false, error: "Mission mal configurée (functionName manquant)." });
  }

  const deepEqual = (a, b) => {
    // simple comparaison profonde via JSON (suffisant pour tes missions)
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch {
      return false;
    }
  };

  try {
    const sandbox = {};
    vm.createContext(sandbox);

    // Exécute le code et expose la fonction attendue dans __fn
    const script = new vm.Script(`${code}\n;globalThis.__fn = ${fnName};`);
    script.runInContext(sandbox, { timeout: 200 });

    const userFn = sandbox.__fn;
    if (typeof userFn !== "function") {
      return res.json({
        ok: false,
        error: `La fonction ${fnName}(...) n'existe pas ou n'est pas une fonction.`
      });
    }

    const results = (mission.tests || []).map(t => {
      let passed = false;
      let actual;
      let error = null;

      try {
        actual = userFn(...(t.args || []));

        if (mission.compare === "json") {
          passed = deepEqual(actual, t.expected);
        } else {
          passed = Object.is(actual, t.expected);
        }
      } catch (e) {
        error = e?.message ?? String(e);
      }

      return {
        name: t.name ?? `${fnName}(${(t.args || []).join(",")})`,
        passed,
        expected: t.expected,
        actual,
        error
      };
    });

    const ok = results.every(r => r.passed);
    return res.json({ ok, results });
  } catch (e) {
    return res.json({
      ok: false,
      error: `Erreur d'exécution: ${e?.message ?? String(e)}`
    });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ CodeQuest: http://localhost:${PORT}`);
});