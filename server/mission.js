export const missions = [
  // ---------------------------
  // HTML (1-10) - tests: regex sur le texte HTML
  // ---------------------------
  {
    id: 1, track: "html", difficulty: "easy",
    title: "Structure de base HTML",
    statement: "Crée une page HTML avec <header>, <main>, <footer> et un <h1>.",
    starterCode: `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mission 1</title>
</head>
<body>
  <!-- ton code ici -->
</body>
</html>`,
    type: "text",
    tests: [
      { name: "header présent", pattern: "<header" },
      { name: "main présent", pattern: "<main" },
      { name: "footer présent", pattern: "<footer" },
      { name: "h1 présent", pattern: "<h1" }
    ]
  },
  {
    id: 2, track: "html", difficulty: "easy",
    title: "Liste de navigation",
    statement: "Crée une nav avec une liste <ul> de 3 liens <a>.",
    starterCode: `<nav>
  <!-- ton code ici -->
</nav>`,
    type: "text",
    tests: [
      { name: "nav présent", pattern: "<nav" },
      { name: "ul présent", pattern: "<ul" },
      { name: "3 liens", pattern: "(<a[\\s\\S]*?</a>[\\s\\S]*){3}" }
    ]
  },
  {
    id: 3, track: "html", difficulty: "easy",
    title: "Formulaire simple",
    statement: "Crée un formulaire avec email + mot de passe + bouton submit.",
    starterCode: `<form>
  <!-- ton code ici -->
</form>`,
    type: "text",
    tests: [
      { name: "form présent", pattern: "<form" },
      { name: "input email", pattern: 'type="email"' },
      { name: "input password", pattern: 'type="password"' },
      { name: "button submit", pattern: 'type="submit"' }
    ]
  },
  {
    id: 4, track: "html", difficulty: "easy",
    title: "Carte produit",
    statement: "Crée une section .card avec une image, un titre h2 et un paragraphe.",
    starterCode: `<section class="card">
  <!-- ton code ici -->
</section>`,
    type: "text",
    tests: [
      { name: "classe card", pattern: 'class="card"' },
      { name: "img présent", pattern: "<img" },
      { name: "h2 présent", pattern: "<h2" },
      { name: "p présent", pattern: "<p" }
    ]
  },
  {
    id: 5, track: "html", difficulty: "easy",
    title: "Tableau",
    statement: "Crée un tableau <table> avec thead + tbody + 2 lignes.",
    starterCode: `<table>
  <!-- ton code ici -->
</table>`,
    type: "text",
    tests: [
      { name: "thead présent", pattern: "<thead" },
      { name: "tbody présent", pattern: "<tbody" },
      { name: "2 tr dans tbody", pattern: "<tbody[\\s\\S]*?(<tr[\\s\\S]*?</tr>){2}" }
    ]
  },
  {
    id: 6, track: "html", difficulty: "medium",
    title: "Accessibilité: labels",
    statement: "Associe un <label for='email'> à un input id='email'.",
    starterCode: `<form>
  <!-- ton code ici -->
</form>`,
    type: "text",
    tests: [
      { name: "label for=email", pattern: 'for="email"' },
      { name: "input id=email", pattern: 'id="email"' }
    ]
  },
  {
    id: 7, track: "html", difficulty: "medium",
    title: "Section articles",
    statement: "Crée 3 <article> dans une <section>.",
    starterCode: `<section class="articles">
  <!-- ton code ici -->
</section>`,
    type: "text",
    tests: [
      { name: "section articles", pattern: 'class="articles"' },
      { name: "3 articles", pattern: "(<article[\\s\\S]*?</article>[\\s\\S]*){3}" }
    ]
  },
  {
    id: 8, track: "html", difficulty: "medium",
    title: "Media: figure + figcaption",
    statement: "Utilise <figure> avec <img> et <figcaption>.",
    starterCode: `<figure>
  <!-- ton code ici -->
</figure>`,
    type: "text",
    tests: [
      { name: "img présent", pattern: "<img" },
      { name: "figcaption présent", pattern: "<figcaption" }
    ]
  },
  {
    id: 9, track: "html", difficulty: "medium",
    title: "Lien externe sécurisé",
    statement: "Crée un lien target=_blank avec rel='noopener noreferrer'.",
    starterCode: `<!-- ton code ici -->`,
    type: "text",
    tests: [
      { name: "target blank", pattern: 'target="_blank"' },
      { name: "rel noopener", pattern: "noopener" },
      { name: "rel noreferrer", pattern: "noreferrer" }
    ]
  },
  {
    id: 10, track: "html", difficulty: "hard",
    title: "Layout sémantique complet",
    statement: "Crée: header/nav + main(2 sections) + aside + footer.",
    starterCode: `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Mission 10</title></head>
<body>
  <!-- ton code ici -->
</body></html>`,
    type: "text",
    tests: [
      { name: "header", pattern: "<header" },
      { name: "nav", pattern: "<nav" },
      { name: "main", pattern: "<main" },
      { name: "2 sections", pattern: "(<section[\\s\\S]*?</section>[\\s\\S]*){2}" },
      { name: "aside", pattern: "<aside" },
      { name: "footer", pattern: "<footer" }
    ]
  },

  // ---------------------------
  // CSS (11-20) - tests: regex sur le texte CSS
  // ---------------------------
  {
    id: 11, track: "css", difficulty: "easy",
    title: "Centrer un texte",
    statement: "Écris une règle pour centrer le texte dans .title.",
    starterCode: `.title {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "text-align center", pattern: "text-align\\s*:\\s*center" }
    ]
  },
  {
    id: 12, track: "css", difficulty: "easy",
    title: "Flex: aligner en ligne",
    statement: "Sur .row, active flex et espace les éléments avec gap: 16px.",
    starterCode: `.row {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "display flex", pattern: "display\\s*:\\s*flex" },
      { name: "gap 16px", pattern: "gap\\s*:\\s*16px" }
    ]
  },
  {
    id: 13, track: "css", difficulty: "easy",
    title: "Centrage parfait avec flex",
    statement: "Dans .center, centre horizontalement et verticalement.",
    starterCode: `.center {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "display flex", pattern: "display\\s*:\\s*flex" },
      { name: "justify-content center", pattern: "justify-content\\s*:\\s*center" },
      { name: "align-items center", pattern: "align-items\\s*:\\s*center" }
    ]
  },
  {
    id: 14, track: "css", difficulty: "easy",
    title: "Box model",
    statement: "Dans .card, mets padding:16px et margin:12px.",
    starterCode: `.card {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "padding 16px", pattern: "padding\\s*:\\s*16px" },
      { name: "margin 12px", pattern: "margin\\s*:\\s*12px" }
    ]
  },
  {
    id: 15, track: "css", difficulty: "medium",
    title: "Grid 3 colonnes",
    statement: "Fais une grille 3 colonnes sur .grid avec gap: 12px.",
    starterCode: `.grid {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "display grid", pattern: "display\\s*:\\s*grid" },
      { name: "grid-template-columns 3", pattern: "grid-template-columns\\s*:\\s*repeat\\(3,\\s*1fr\\)" },
      { name: "gap 12px", pattern: "gap\\s*:\\s*12px" }
    ]
  },
  {
    id: 16, track: "css", difficulty: "medium",
    title: "Responsive avec media query",
    statement: "À max-width 600px, .grid passe à 1 colonne.",
    starterCode: `@media (max-width: 600px) {
  .grid {
    /* ton code ici */
  }
}`,
    type: "text",
    tests: [
      { name: "media query", pattern: "@media\\s*\\(max-width:\\s*600px\\)" },
      { name: "1 colonne", pattern: "grid-template-columns\\s*:\\s*1fr" }
    ]
  },
  {
    id: 17, track: "css", difficulty: "medium",
    title: "Hover bouton",
    statement: "Ajoute un :hover sur .btn avec un changement de background.",
    starterCode: `.btn {
  /* base */
}

.btn:hover {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "hover présent", pattern: "\\.btn:hover" },
      { name: "background changé", pattern: "background(-color)?\\s*:" }
    ]
  },
  {
    id: 18, track: "css", difficulty: "medium",
    title: "Position: badge",
    statement: "Place .badge en absolute en haut à droite du parent.",
    starterCode: `.parent { position: relative; }

.badge {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "position absolute", pattern: "position\\s*:\\s*absolute" },
      { name: "top 0", pattern: "top\\s*:\\s*0" },
      { name: "right 0", pattern: "right\\s*:\\s*0" }
    ]
  },
  {
    id: 19, track: "css", difficulty: "hard",
    title: "Animation simple",
    statement: "Crée une animation 'pulse' et applique-la à .dot (1s infinite).",
    starterCode: `@keyframes pulse {
  /* ton code ici */
}

.dot {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "@keyframes pulse", pattern: "@keyframes\\s+pulse" },
      { name: "animation 1s infinite", pattern: "animation\\s*:\\s*pulse\\s+1s\\s+infinite" }
    ]
  },
  {
    id: 20, track: "css", difficulty: "hard",
    title: "Variables CSS",
    statement: "Déclare --primary dans :root et utilise-la sur .btn.",
    starterCode: `:root {
  /* ton code ici */
}

.btn {
  /* ton code ici */
}`,
    type: "text",
    tests: [
      { name: "--primary déclarée", pattern: "--primary\\s*:" },
      { name: "utilise var(--primary)", pattern: "var\\(--primary\\)" }
    ]
  },

  // ---------------------------
  // JavaScript (21-35) - tests: exécuter functionName
  // ---------------------------
  {
    id: 21, track: "js", difficulty: "easy",
    title: "Somme",
    statement: "Écris sum(a,b) qui retourne a+b.",
    starterCode: `function sum(a, b) {\n  // ton code ici\n}`,
    functionName: "sum",
    tests: [
      { name: "sum(2,3)=5", args: [2,3], expected: 5 },
      { name: "sum(-1,1)=0", args: [-1,1], expected: 0 }
    ]
  },
  {
    id: 22, track: "js", difficulty: "easy",
    title: "Pair/Impair",
    statement: "Écris isEven(n) qui retourne true si n est pair.",
    starterCode: `function isEven(n) {\n  // ton code ici\n}`,
    functionName: "isEven",
    tests: [
      { name: "2", args: [2], expected: true },
      { name: "3", args: [3], expected: false }
    ]
  },
  {
    id: 23, track: "js", difficulty: "easy",
    title: "Longueur d'un mot",
    statement: "Écris lengthOf(str) qui retourne str.length.",
    starterCode: `function lengthOf(str) {\n  // ton code ici\n}`,
    functionName: "lengthOf",
    tests: [
      { name: "chat", args: ["chat"], expected: 4 },
      { name: "a", args: ["a"], expected: 1 }
    ]
  },
  {
    id: 24, track: "js", difficulty: "easy",
    title: "Majuscule",
    statement: "Écris toUpper(str) qui retourne la version en majuscules.",
    starterCode: `function toUpper(str) {\n  // ton code ici\n}`,
    functionName: "toUpper",
    tests: [
      { name: "abc", args: ["abc"], expected: "ABC" }
    ]
  },
  {
    id: 25, track: "js", difficulty: "easy",
    title: "Minimum",
    statement: "Écris min(a,b) qui retourne le plus petit.",
    starterCode: `function min(a, b) {\n  // ton code ici\n}`,
    functionName: "min",
    tests: [
      { name: "min(2,3)", args: [2,3], expected: 2 },
      { name: "min(-1,1)", args: [-1,1], expected: -1 }
    ]
  },
  {
    id: 26, track: "js", difficulty: "medium",
    title: "Compter les voyelles",
    statement: "Écris countVowels(str) (a,e,i,o,u,y).",
    starterCode: `function countVowels(str) {\n  // ton code ici\n}`,
    functionName: "countVowels",
    tests: [
      { name: "bonjour", args: ["bonjour"], expected: 3 },
      { name: "sky", args: ["sky"], expected: 1 }
    ]
  },
  {
    id: 27, track: "js", difficulty: "medium",
    title: "Inverser un tableau",
    statement: "Écris reverseArray(arr) qui retourne un nouveau tableau inversé.",
    starterCode: `function reverseArray(arr) {\n  // ton code ici\n}`,
    functionName: "reverseArray",
    tests: [
      { name: "[1,2,3]", args: [[1,2,3]], expected: [3,2,1] }
    ],
    compare: "json"
  },
  {
    id: 28, track: "js", difficulty: "medium",
    title: "Somme des pairs",
    statement: "Écris sumEvens(arr) qui additionne uniquement les nombres pairs.",
    starterCode: `function sumEvens(arr) {\n  // ton code ici\n}`,
    functionName: "sumEvens",
    tests: [
      { name: "[1,2,3,4]", args: [[1,2,3,4]], expected: 6 }
    ]
  },
  {
    id: 29, track: "js", difficulty: "medium",
    title: "Filtrer positifs",
    statement: "Écris filterPositives(arr) qui garde > 0.",
    starterCode: `function filterPositives(arr) {\n  // ton code ici\n}`,
    functionName: "filterPositives",
    tests: [
      { name: "mix", args: [[-2,0,3,5,-1]], expected: [3,5] }
    ],
    compare: "json"
  },
  {
    id: 30, track: "js", difficulty: "medium",
    title: "Palindrome",
    statement: "Écris isPalindrome(str) (ignore la casse).",
    starterCode: `function isPalindrome(str) {\n  // ton code ici\n}`,
    functionName: "isPalindrome",
    tests: [
      { name: "Kayak", args: ["Kayak"], expected: true },
      { name: "Test", args: ["Test"], expected: false }
    ]
  },
  {
    id: 31, track: "js", difficulty: "medium",
    title: "Compter occurrences",
    statement: "Écris countOccurrences(arr, value).",
    starterCode: `function countOccurrences(arr, value) {\n  // ton code ici\n}`,
    functionName: "countOccurrences",
    tests: [
      { name: "x", args: [[1,2,2,3], 2], expected: 2 }
    ]
  },
  {
    id: 32, track: "js", difficulty: "hard",
    title: "Unique",
    statement: "Écris unique(arr) qui retourne les valeurs uniques (sans doublons).",
    starterCode: `function unique(arr) {\n  // ton code ici\n}`,
    functionName: "unique",
    tests: [
      { name: "doublons", args: [[1,1,2,3,3]], expected: [1,2,3] }
    ],
    compare: "json"
  },
  {
    id: 33, track: "js", difficulty: "hard",
    title: "Tri numérique",
    statement: "Écris sortNumbers(arr) qui trie numériquement asc.",
    starterCode: `function sortNumbers(arr) {\n  // ton code ici\n}`,
    functionName: "sortNumbers",
    tests: [
      { name: "tri", args: [[10,2,1]], expected: [1,2,10] }
    ],
    compare: "json"
  },
  {
    id: 34, track: "js", difficulty: "hard",
    title: "Chunk",
    statement: "Écris chunk(arr, size) qui découpe en sous-tableaux.",
    starterCode: `function chunk(arr, size) {\n  // ton code ici\n}`,
    functionName: "chunk",
    tests: [
      { name: "chunk", args: [[1,2,3,4,5], 2], expected: [[1,2],[3,4],[5]] }
    ],
    compare: "json"
  },
  {
    id: 35, track: "js", difficulty: "hard",
    title: "FizzBuzz",
    statement: "Écris fizzBuzz(n) qui retourne un tableau de 1..n avec règles.",
    starterCode: `function fizzBuzz(n) {\n  // ton code ici\n}`,
    functionName: "fizzBuzz",
    tests: [
      { name: "n=5", args: [5], expected: [1,2,"Fizz",4,"Buzz"] }
    ],
    compare: "json"
  },

  // ---------------------------
  // TypeScript / Angular concepts (36-45) - on teste côté JS avec fonctions "TS-like"
  // ---------------------------
  {
    id: 36, track: "ts", difficulty: "easy",
    title: "Type: User (concept)",
    statement: "Écris makeUser(name, age) qui retourne {name, age}.",
    starterCode: `function makeUser(name, age) {\n  // ton code ici\n}`,
    functionName: "makeUser",
    tests: [
      { name: "user", args: ["Pierre", 21], expected: { name: "Pierre", age: 21 } }
    ],
    compare: "json"
  },
  {
    id: 37, track: "ts", difficulty: "easy",
    title: "Union (concept)",
    statement: "Écris toNumber(value) : si string -> parseInt, si number -> renvoie tel quel.",
    starterCode: `function toNumber(value) {\n  // ton code ici\n}`,
    functionName: "toNumber",
    tests: [
      { name: '"42"', args: ["42"], expected: 42 },
      { name: "7", args: [7], expected: 7 }
    ]
  },
  {
    id: 38, track: "ts", difficulty: "medium",
    title: "Enum (concept)",
    statement: "Écris isAdmin(role) qui retourne true si role === 'ADMIN'.",
    starterCode: `function isAdmin(role) {\n  // ton code ici\n}`,
    functionName: "isAdmin",
    tests: [
      { name: "ADMIN", args: ["ADMIN"], expected: true },
      { name: "USER", args: ["USER"], expected: false }
    ]
  },
  {
    id: 39, track: "angular", difficulty: "easy",
    title: "Angular: map users (logique)",
    statement: "Écris usernames(users) qui retourne la liste des names.",
    starterCode: `function usernames(users) {\n  // ton code ici\n}`,
    functionName: "usernames",
    tests: [
      { name: "names", args: [[{name:"A"},{name:"B"}]], expected: ["A","B"] }
    ],
    compare: "json"
  },
  {
    id: 40, track: "angular", difficulty: "easy",
    title: "Angular: filter (logique)",
    statement: "Écris activeUsers(users) qui garde ceux avec active:true.",
    starterCode: `function activeUsers(users) {\n  // ton code ici\n}`,
    functionName: "activeUsers",
    tests: [
      { name: "active", args: [[{id:1,active:true},{id:2,active:false}]], expected: [{id:1,active:true}] }
    ],
    compare: "json"
  },
  {
    id: 41, track: "angular", difficulty: "medium",
    title: "Angular: service mock (logique)",
    statement: "Écris getById(items, id) qui renvoie l'objet correspondant.",
    starterCode: `function getById(items, id) {\n  // ton code ici\n}`,
    functionName: "getById",
    tests: [
      { name: "id2", args: [[{id:1},{id:2,name:"X"}], 2], expected: {id:2,name:"X"} }
    ],
    compare: "json"
  },
  {
    id: 42, track: "angular", difficulty: "medium",
    title: "Angular: route param (logique)",
    statement: "Écris buildUserUrl(id) qui retourne `/users/${id}`.",
    starterCode: `function buildUserUrl(id) {\n  // ton code ici\n}`,
    functionName: "buildUserUrl",
    tests: [
      { name: "url", args: [12], expected: "/users/12" }
    ]
  },
  {
    id: 43, track: "angular", difficulty: "hard",
    title: "Angular: reducer (logique)",
    statement: "Écris addXp(state, amount) -> {xp: state.xp+amount, level} (level +1 chaque 100xp).",
    starterCode: `function addXp(state, amount) {\n  // ton code ici\n}`,
    functionName: "addXp",
    tests: [
      { name: "level up", args: [{xp: 90, level: 1}, 20], expected: {xp: 110, level: 2} }
    ],
    compare: "json"
  },
  {
    id: 44, track: "angular", difficulty: "hard",
    title: "Angular: debounce (logique)",
    statement: "Écris debounceMs(ms) qui retourne ms (placeholder). (Tu remplaceras par RxJS plus tard.)",
    starterCode: `function debounceMs(ms) {\n  // ton code ici\n}`,
    functionName: "debounceMs",
    tests: [
      { name: "same", args: [300], expected: 300 }
    ]
  },
  {
    id: 45, track: "angular", difficulty: "hard",
    title: "Angular: pagination (logique)",
    statement: "Écris paginate(arr, page, perPage) (page commence à 1).",
    starterCode: `function paginate(arr, page, perPage) {\n  // ton code ici\n}`,
    functionName: "paginate",
    tests: [
      { name: "page2", args: [[1,2,3,4,5], 2, 2], expected: [3,4] }
    ],
    compare: "json"
  },

  // ---------------------------
  // Node / API / Utils (46-50)
  // ---------------------------
  {
    id: 46, track: "node", difficulty: "easy",
    title: "Env: PORT",
    statement: "Écris getPort(env) qui retourne env.PORT si présent sinon 3000.",
    starterCode: `function getPort(env) {\n  // ton code ici\n}`,
    functionName: "getPort",
    tests: [
      { name: "default", args: [{}], expected: 3000 },
      { name: "custom", args: [{ PORT: "8080" }], expected: 8080 }
    ]
  },
  {
    id: 47, track: "node", difficulty: "medium",
    title: "Sanitizer simple",
    statement: "Écris sanitizeName(str) qui retire tout sauf lettres, espaces et tirets.",
    starterCode: `function sanitizeName(str) {\n  // ton code ici\n}`,
    functionName: "sanitizeName",
    tests: [
      { name: "clean", args: ["Pi@erre!! Marion"], expected: "Pierre Marion" }
    ]
  },
  {
    id: 48, track: "node", difficulty: "medium",
    title: "Build query string",
    statement: "Écris toQuery(params) => '?a=1&b=2' (ordre des clés alphabétique).",
    starterCode: `function toQuery(params) {\n  // ton code ici\n}`,
    functionName: "toQuery",
    tests: [
      { name: "query", args: [{ b: 2, a: 1 }], expected: "?a=1&b=2" }
    ]
  },
  {
    id: 49, track: "node", difficulty: "hard",
    title: "Validation email simple",
    statement: "Écris isValidEmail(email) (test basique avec '@' et '.').",
    starterCode: `function isValidEmail(email) {\n  // ton code ici\n}`,
    functionName: "isValidEmail",
    tests: [
      { name: "ok", args: ["a@b.com"], expected: true },
      { name: "ko", args: ["ab.com"], expected: false }
    ]
  },
  {
    id: 50, track: "node", difficulty: "hard",
    title: "Rate limit (logique)",
    statement: "Écris canRequest(times, now, windowMs, max) avec times = timestamps, retourne true si autorisé.",
    starterCode: `function canRequest(times, now, windowMs, max) {\n  // ton code ici\n}`,
    functionName: "canRequest",
    tests: [
      { name: "allowed", args: [[0, 1000], 5000, 10000, 3], expected: true },
      { name: "blocked", args: [[0, 1000, 2000], 5000, 10000, 3], expected: false }
    ]
  }
];