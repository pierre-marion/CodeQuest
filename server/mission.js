export const missions = [
  // ---------------------------
  // HTML (1-10) - tests: regex sur le texte HTML
  // ---------------------------
  {
    id: 1, track: "html", difficulty: "easy",
    title: "Structure de base HTML",
    statement: `<p>En HTML, la <strong>structure sémantique</strong> est essentielle. Les balises <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> et <code>&lt;footer&gt;</code> décrivent le rôle de chaque zone de la page.</p><p>Complète le squelette HTML en ajoutant ces 4 éléments :</p><div class="mission-example"><strong>Structure attendue :</strong><br><code>&lt;header&gt;⬦&lt;/header&gt;</code><br><code>&lt;main&gt;&lt;h1&gt;Mon titre&lt;/h1&gt;&lt;/main&gt;</code><br><code>&lt;footer&gt;⬦&lt;/footer&gt;</code></div><div class="mission-hint">�x� Place <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> et <code>&lt;footer&gt;</code> dans le <code>&lt;body&gt;</code>. Le <code>&lt;h1&gt;</code> va dans <code>&lt;main&gt;</code>.</div>`,
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
    statement: `<p>Une barre de navigation contient généralement une liste de liens. On utilise <code>&lt;nav&gt;</code> pour la zone de navigation, <code>&lt;ul&gt;</code> pour la liste et <code>&lt;a&gt;</code> pour chaque lien.</p><p>Ajoute dans le <code>&lt;nav&gt;</code> fourni une liste de <strong>3 liens</strong>.</p><div class="mission-example"><strong>Exemple :</strong><br><code>&lt;ul&gt;</code><br>&nbsp;&nbsp;<code>&lt;li&gt;&lt;a href="/"&gt;Accueil&lt;/a&gt;&lt;/li&gt;</code><br>&nbsp;&nbsp;<code>&lt;li&gt;&lt;a href="/about"&gt;ì propos&lt;/a&gt;&lt;/li&gt;</code><br>&nbsp;&nbsp;<code>&lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;</code><br><code>&lt;/ul&gt;</code></div><div class="mission-hint">�x� Le test vérifie la présence de 3 balises <code>&lt;a&gt;</code>.</div>`,
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
    statement: `<p>Un formulaire HTML collecte des informations via des <code>&lt;input&gt;</code>. Chaque champ a un attribut <code>type</code> qui définit son comportement.</p><p>Complète le formulaire avec : un champ e-mail, un champ mot de passe, et un bouton de soumission.</p><div class="mission-example"><strong>Les types utiles :</strong><br><code>&lt;input type="email" /&gt;</code> �  valide le format e-mail<br><code>&lt;input type="password" /&gt;</code> �  masque la saisie<br><code>&lt;button type="submit"&gt;Envoyer&lt;/button&gt;</code></div><div class="mission-hint">�x� Les attributs <code>type</code> doivent être exacts pour passer les tests.</div>`,
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
    statement: `<p>Une <strong>carte</strong> est un composant classique en web design. Elle affiche généralement une image, un titre et une description.</p><p>Au sein de la <code>&lt;section class="card"&gt;</code> fournie, ajoute ces trois éléments.</p><div class="mission-example"><strong>Structure attendue :</strong><br><code>&lt;img src="photo.jpg" alt="description" /&gt;</code><br><code>&lt;h2&gt;Titre du produit&lt;/h2&gt;</code><br><code>&lt;p&gt;Description courte.&lt;/p&gt;</code></div><div class="mission-hint">�x� L'attribut <code>alt</code> est important pour l'accessibilité, mais non testé ici.</div>`,
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
    statement: `<p>Un tableau HTML s'organise en 3 parties : <code>&lt;thead&gt;</code> (en-têtes), <code>&lt;tbody&gt;</code> (données) et optionnellement <code>&lt;tfoot&gt;</code>.</p><p>Complète le tableau avec un <code>&lt;thead&gt;</code> et un <code>&lt;tbody&gt;</code> contenant <strong>2 lignes</strong>.</p><div class="mission-example"><strong>Squelette :</strong><br><code>&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Nom&lt;/th&gt;&lt;th&gt;�ge&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;</code><br><code>&lt;tbody&gt;</code><br>&nbsp;&nbsp;<code>&lt;tr&gt;&lt;td&gt;Alice&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;</code><br>&nbsp;&nbsp;<code>&lt;tr&gt;&lt;td&gt;Bob&lt;/td&gt;&lt;td&gt;30&lt;/td&gt;&lt;/tr&gt;</code><br><code>&lt;/tbody&gt;</code></div>`,
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
    statement: `<p>L'accessibilité web est essentielle. L'attribut <code>for</code> sur un <code>&lt;label&gt;</code> doit correspondre à l'<code>id</code> du champ associé. Cela permet aux lecteurs d'écran de faire le lien.</p><p>Crée un <code>&lt;label for="email"&gt;</code> associé à un <code>&lt;input id="email"&gt;</code>.</p><div class="mission-example"><code>&lt;label for="email"&gt;Adresse e-mail&lt;/label&gt;</code><br><code>&lt;input type="email" id="email" name="email" /&gt;</code></div><div class="mission-hint">�x� Les valeurs de <code>for</code> et <code>id</code> doivent être identiques.</div>`,
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
    statement: `<p>La balise <code>&lt;article&gt;</code> représente un contenu autonome et réutilisable (article de blog, card produit, etc.).</p><p>Dans la <code>&lt;section class="articles"&gt;</code>, place <strong>3 balises</strong> <code>&lt;article&gt;</code>.</p><div class="mission-example"><code>&lt;section class="articles"&gt;</code><br>&nbsp;&nbsp;<code>&lt;article&gt;&lt;h2&gt;Titre 1&lt;/h2&gt;&lt;/article&gt;</code><br>&nbsp;&nbsp;<code>&lt;article&gt;&lt;h2&gt;Titre 2&lt;/h2&gt;&lt;/article&gt;</code><br>&nbsp;&nbsp;<code>&lt;article&gt;&lt;h2&gt;Titre 3&lt;/h2&gt;&lt;/article&gt;</code><br><code>&lt;/section&gt;</code></div>`,
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
    statement: `<p><code>&lt;figure&gt;</code> est utilisé pour les médias (images, vidéos, graphiques). <code>&lt;figcaption&gt;</code> lui ajoute une légende accessible.</p><p>Dans la balise <code>&lt;figure&gt;</code>, ajoute une image et sa légende.</p><div class="mission-example"><code>&lt;figure&gt;</code><br>&nbsp;&nbsp;<code>&lt;img src="/logo.png" alt="Logo CodeQuest" /&gt;</code><br>&nbsp;&nbsp;<code>&lt;figcaption&gt;Le logo de CodeQuest&lt;/figcaption&gt;</code><br><code>&lt;/figure&gt;</code></div>`,
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
    statement: `<p>Ouvrir un lien dans un nouvel onglet (<code>target="_blank"</code>) est pratique, mais représente un risque de sécurité. La page ouverte peut accéder à <code>window.opener</code>.</p><p>Pour sécuriser, il faut ajouter <code>rel="noopener noreferrer"</code>.</p><div class="mission-example"><code>&lt;a href="https://exemple.com" target="_blank" rel="noopener noreferrer"&gt;</code><br>&nbsp;&nbsp;Visiter Exemple<br><code>&lt;/a&gt;</code></div><div class="mission-hint">�x� Les deux valeurs <code>noopener</code> et <code>noreferrer</code> sont testées séparément.</div>`,
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
    statement: `<p>Un layout <strong>sémantique complet</strong> utilise les balises HTML5 pour décrire chaque zone de la page. C'est la base de tout bon document web.</p><p>Construis la structure suivante dans le <code>&lt;body&gt;</code> :</p><div class="mission-example"><code>&lt;header&gt;</code> �  en-tête du site<br><code>&lt;nav&gt;</code> �  navigation principale<br><code>&lt;main&gt;</code><br>&nbsp;&nbsp;<code>&lt;section&gt;</code>⬦<code>&lt;/section&gt;</code> (2 fois)<br><code>&lt;aside&gt;</code> �  contenu secondaire<br><code>&lt;footer&gt;</code> �  pied de page</div><div class="mission-hint">�x� Les 2 <code>&lt;section&gt;</code> peuvent être à l'intérieur ou à côté de <code>&lt;main&gt;</code>.</div>`,
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
    statement: `<p>La propriété CSS <code>text-align</code> aligne le texte horizontalement dans son conteneur.</p><p>Ajoute la règle nécessaire dans <code>.title</code> pour centrer son texte.</p><div class="mission-example"><code>.title {</code><br>&nbsp;&nbsp;<code>text-align: center;</code><br><code>}</code></div><div class="mission-hint">�x� Autres valeurs possibles : <code>left</code> (défaut), <code>right</code>, <code>justify</code>.</div>`,
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
    statement: `<p><strong>Flexbox</strong> permet de disposer des éléments en ligne ou en colonne très facilement. La propriété <code>gap</code> ajoute de l'espace entre chaque enfant.</p><p>Sur <code>.row</code>, active flexbox et ajoute un gap de <strong>16px</strong>.</p><div class="mission-example"><code>.row {</code><br>&nbsp;&nbsp;<code>display: flex;</code><br>&nbsp;&nbsp;<code>gap: 16px;</code><br><code>}</code></div>`,
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
    statement: `<p>En Flexbox, deux propriétés servent à centrer :</p><ul><li><code>justify-content: center</code> �  centre sur l'axe <strong>principal</strong> (horizontal par défaut)</li><li><code>align-items: center</code> �  centre sur l'axe <strong>secondaire</strong> (vertical)</li></ul><p>Applique ces trois règles sur <code>.center</code> pour un centrage parfait.</p><div class="mission-example"><code>.center {</code><br>&nbsp;&nbsp;<code>display: flex;</code><br>&nbsp;&nbsp;<code>justify-content: center;</code><br>&nbsp;&nbsp;<code>align-items: center;</code><br><code>}</code></div>`,
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
    statement: `<p>Le <strong>box model</strong> CSS définit l'espace autour du contenu d'un élément :</p><ul><li><code>padding</code> �  espace <em>interne</em> (entre le contenu et la bordure)</li><li><code>margin</code> �  espace <em>externe</em> (entre la bordure et les autres éléments)</li></ul><p>Dans <code>.card</code>, ajoute <code>padding: 16px</code> et <code>margin: 12px</code>.</p><div class="mission-example"><code>.card {</code><br>&nbsp;&nbsp;<code>padding: 16px;</code><br>&nbsp;&nbsp;<code>margin: 12px;</code><br><code>}</code></div>`,
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
    statement: `<p><strong>CSS Grid</strong> est idéal pour les mises en page en 2 dimensions. <code>grid-template-columns</code> définit le nombre et la taille des colonnes.</p><p>Sur <code>.grid</code>, crée une grille à <strong>3 colonnes égales</strong> avec un gap de 12px.</p><div class="mission-example"><code>.grid {</code><br>&nbsp;&nbsp;<code>display: grid;</code><br>&nbsp;&nbsp;<code>grid-template-columns: repeat(3, 1fr);</code><br>&nbsp;&nbsp;<code>gap: 12px;</code><br><code>}</code></div><div class="mission-hint">�x� <code>1fr</code> signifie &laquo; 1 fraction de l'espace disponible &raquo;.</div>`,
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
    statement: `<p>Les <strong>media queries</strong> permettent d'adapter le style selon la taille de l'écran. On utilise <code>@media (max-width: Xpx)</code> pour cibler les petits écrans.</p><p>Dans la media query fournie, fais passer <code>.grid</code> à <strong>1 seule colonne</strong> en dessous de 600px.</p><div class="mission-example"><code>@media (max-width: 600px) {</code><br>&nbsp;&nbsp;<code>.grid {</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>grid-template-columns: 1fr;</code><br>&nbsp;&nbsp;<code>}</code><br><code>}</code></div>`,
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
    statement: `<p>La pseudo-classe <code>:hover</code> s'applique quand la souris survole un élément. C'est très utilisé pour les boutons interactifs.</p><p>Dans <code>.btn:hover</code>, change la couleur de fond du bouton.</p><div class="mission-example"><code>.btn {</code><br>&nbsp;&nbsp;<code>background: #6200ea;</code><br><code>}</code><br><code>.btn:hover {</code><br>&nbsp;&nbsp;<code>background: #9c40ff;</code> <em>/* plus clair au survol */</em><br><code>}</code></div><div class="mission-hint">�x� Tu peux utiliser <code>background</code> ou <code>background-color</code>, les deux sont acceptés.</div>`,
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
    statement: `<p><code>position: absolute</code> sort un élément du flux normal et le positionne par rapport à son <em>premier parent positionné</em> (qui a <code>position: relative</code>).</p><p>Place <code>.badge</code> en haut à droite de son parent.</p><div class="mission-example"><code>.parent { position: relative; }</code><br><code>.badge {</code><br>&nbsp;&nbsp;<code>position: absolute;</code><br>&nbsp;&nbsp;<code>top: 0;</code><br>&nbsp;&nbsp;<code>right: 0;</code><br><code>}</code></div><div class="mission-hint">�x� Le parent a déjà <code>position: relative</code> dans le starter code.</div>`,
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
    statement: `<p>Les <strong>animations CSS</strong> sont définies avec <code>@keyframes</code>. On leur donne un nom et on décrit les étapes de l'animation (de <code>0%</code> à <code>100%</code>).</p><p>Crée une animation <code>pulse</code> et applique-la à <code>.dot</code> en <strong>1s infinie</strong>.</p><div class="mission-example"><code>@keyframes pulse {</code><br>&nbsp;&nbsp;<code>0%, 100% { transform: scale(1); }</code><br>&nbsp;&nbsp;<code>50% { transform: scale(1.3); }</code><br><code>}</code><br><code>.dot {</code><br>&nbsp;&nbsp;<code>animation: pulse 1s infinite;</code><br><code>}</code></div>`,
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
    statement: `<p>Les <strong>variables CSS</strong> (aussi appelées custom properties) se déclarent avec <code>--nom</code> dans <code>:root</code> et s'utilisent avec <code>var(--nom)</code>.</p><p>Déclare <code>--primary</code> et utilise-la dans <code>.btn</code>.</p><div class="mission-example"><code>:root {</code><br>&nbsp;&nbsp;<code>--primary: #6200ea;</code><br><code>}</code><br><code>.btn {</code><br>&nbsp;&nbsp;<code>background: var(--primary);</code><br><code>}</code></div><div class="mission-hint">�x� Changer <code>--primary</code> dans <code>:root</code> met à jour tous les éléments qui l'utilisent.</div>`,
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
    statement: `<p>�0cris une fonction <code>sum(a, b)</code> qui retourne la <strong>somme</strong> des deux arguments.</p><div class="mission-example"><strong>Exemples :</strong><br><code>sum(2, 3)</code> �  <code>5</code><br><code>sum(-1, 1)</code> �  <code>0</code></div><div class="mission-hint">�x� Utilise l'opérateur <code>+</code> et le mot-clé <code>return</code>.</div>`,
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
    statement: `<p>�0cris une fonction <code>isEven(n)</code> qui retourne <code>true</code> si <code>n</code> est <strong>pair</strong>, <code>false</code> sinon.</p><div class="mission-example"><strong>Exemples :</strong><br><code>isEven(2)</code> �  <code>true</code><br><code>isEven(3)</code> �  <code>false</code></div><div class="mission-hint">�x� Un nombre est pair si le reste de sa division par 2 est 0. Utilise l'opérateur <code>%</code> (modulo).</div>`,
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
    statement: `<p>�0cris une fonction <code>lengthOf(str)</code> qui retourne le <strong>nombre de caractères</strong> d'une chaîne.</p><div class="mission-example"><strong>Exemples :</strong><br><code>lengthOf("chat")</code> �  <code>4</code><br><code>lengthOf("a")</code> �  <code>1</code></div><div class="mission-hint">�x� Toute chaîne possède une propriété <code>.length</code>.</div>`,
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
    statement: `<p>�0cris une fonction <code>toUpper(str)</code> qui retourne la chaîne en <strong>majuscules</strong>.</p><div class="mission-example"><strong>Exemples :</strong><br><code>toUpper("abc")</code> �  <code>"ABC"</code><br><code>toUpper("Bonjour")</code> �  <code>"BONJOUR"</code></div><div class="mission-hint">�x� Les chaînes ont une méthode <code>.toUpperCase()</code>.</div>`,
    starterCode: `function toUpper(str) {\n  // ton code ici\n}`,
    functionName: "toUpper",
    tests: [
      { name: "abc", args: ["abc"], expected: "ABC" }
    ]
  },
  {
    id: 25, track: "js", difficulty: "easy",
    title: "Minimum",
    statement: `<p>�0cris une fonction <code>min(a, b)</code> qui retourne le <strong>plus petit</strong> des deux nombres.</p><div class="mission-example"><strong>Exemples :</strong><br><code>min(2, 3)</code> �  <code>2</code><br><code>min(-1, 1)</code> �  <code>-1</code></div><div class="mission-hint">�x� Tu peux utiliser une condition <code>if/else</code> ou bien <code>Math.min(a, b)</code>.</div>`,
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
    statement: `<p>�0cris une fonction <code>countVowels(str)</code> qui retourne le <strong>nombre de voyelles</strong> (a, e, i, o, u, y � minuscules et majuscules).</p><div class="mission-example"><strong>Exemples :</strong><br><code>countVowels("bonjour")</code> �  <code>3</code> (o, o, u)<br><code>countVowels("sky")</code> �  <code>1</code> (y)</div><div class="mission-hint">�x� Idée : convertis en minuscule, puis utilise <code>split("").filter()</code> ou une boucle avec un test <code>"aeiouy".includes(c)</code>.</div>`,
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
    statement: `<p>�0cris une fonction <code>reverseArray(arr)</code> qui retourne un <strong>nouveau tableau</strong> avec les éléments dans l'ordre inverse.</p><div class="mission-example"><strong>Exemples :</strong><br><code>reverseArray([1, 2, 3])</code> �  <code>[3, 2, 1]</code></div><div class="mission-hint">�x� Utilise <code>[...arr].reverse()</code> pour ne pas modifier l'original. <code>.reverse()</code> seul modifie le tableau en place.</div>`,
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
    statement: `<p>�0cris une fonction <code>sumEvens(arr)</code> qui retourne la <strong>somme des nombres pairs</strong> du tableau.</p><div class="mission-example"><strong>Exemples :</strong><br><code>sumEvens([1, 2, 3, 4])</code> �  <code>6</code> (2+4)<br><code>sumEvens([1, 3, 5])</code> �  <code>0</code></div><div class="mission-hint">�x� Idée : <code>arr.filter(n =&gt; n % 2 === 0).reduce((sum, n) =&gt; sum + n, 0)</code></div>`,
    starterCode: `function sumEvens(arr) {\n  // ton code ici\n}`,
    functionName: "sumEvens",
    tests: [
      { name: "[1,2,3,4]", args: [[1,2,3,4]], expected: 6 }
    ]
  },
  {
    id: 29, track: "js", difficulty: "medium",
    title: "Filtrer positifs",
    statement: `<p>�0cris une fonction <code>filterPositives(arr)</code> qui retourne uniquement les nombres <strong>strictement positifs</strong> (> 0).</p><div class="mission-example"><strong>Exemples :</strong><br><code>filterPositives([-2, 0, 3, 5, -1])</code> �  <code>[3, 5]</code></div><div class="mission-hint">�x� Utilise <code>arr.filter(n =&gt; n &gt; 0)</code>.</div>`,
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
    statement: `<p>Un mot est un <strong>palindrome</strong> s'il se lit identiquement dans les deux sens. Ignore la casse (majuscules/minuscules).</p><div class="mission-example"><strong>Exemples :</strong><br><code>isPalindrome("Kayak")</code> �  <code>true</code><br><code>isPalindrome("Test")</code> �  <code>false</code></div><div class="mission-hint">�x� Convertis en minuscule, puis compare la chaîne à l'envers : <code>str === str.split("").reverse().join("")</code>.</div>`,
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
    statement: `<p>�0cris une fonction <code>countOccurrences(arr, value)</code> qui retourne le <strong>nombre de fois</strong> que <code>value</code> apparaët dans le tableau.</p><div class="mission-example"><strong>Exemples :</strong><br><code>countOccurrences([1, 2, 2, 3], 2)</code> �  <code>2</code><br><code>countOccurrences(["a", "b", "a"], "a")</code> �  <code>2</code></div><div class="mission-hint">�x� Utilise <code>.filter(x =&gt; x === value).length</code>.</div>`,
    starterCode: `function countOccurrences(arr, value) {\n  // ton code ici\n}`,
    functionName: "countOccurrences",
    tests: [
      { name: "x", args: [[1,2,2,3], 2], expected: 2 }
    ]
  },
  {
    id: 32, track: "js", difficulty: "hard",
    title: "Unique",
    statement: `<p>�0cris une fonction <code>unique(arr)</code> qui retourne un nouveau tableau sans <strong>doublons</strong>.</p><div class="mission-example"><strong>Exemples :</strong><br><code>unique([1, 1, 2, 3, 3])</code> �  <code>[1, 2, 3]</code></div><div class="mission-hint">�x� Astuce : <code>[...new Set(arr)]</code> crée un Set (sans doublons) puis le reconvertit en tableau.</div>`,
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
    statement: `<p>�0cris une fonction <code>sortNumbers(arr)</code> qui retourne le tableau trié dans l'ordre <strong>croissant</strong>.</p><div class="mission-example"><strong>Exemples :</strong><br><code>sortNumbers([10, 2, 1])</code> �  <code>[1, 2, 10]</code></div><div class="mission-hint">�x� <code>[10,2,1].sort()</code> donne <code>[1, 10, 2]</code> (tri alpha by default !). Il faut <code>.sort((a, b) =&gt; a - b)</code>. Utilise une copie : <code>[...arr].sort(...)</code>.</div>`,
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
    statement: `<p>�0cris une fonction <code>chunk(arr, size)</code> qui découpe un tableau en <strong>sous-tableaux</strong> de taille <code>size</code>.</p><div class="mission-example"><strong>Exemples :</strong><br><code>chunk([1, 2, 3, 4, 5], 2)</code> �  <code>[[1,2], [3,4], [5]]</code><br><code>chunk([1, 2, 3], 3)</code> �  <code>[[1,2,3]]</code></div><div class="mission-hint">�x� Utilise une boucle <code>for</code> avec un pas de <code>size</code> et <code>arr.slice(i, i + size)</code>.</div>`,
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
    statement: `<p><strong>FizzBuzz</strong> est un exercice classique. Pour les nombres de 1 à n :</p><ul><li>si divisible par 3 �  <code>"Fizz"</code></li><li>si divisible par 5 �  <code>"Buzz"</code></li><li>si divisible par 15 (3 et 5) �  <code>"FizzBuzz"</code></li><li>sinon �  le nombre lui-même</li></ul><div class="mission-example"><code>fizzBuzz(5)</code> �  <code>[1, 2, "Fizz", 4, "Buzz"]</code></div><div class="mission-hint">�x� Teste le cas 15 en premier (avant 3 et 5), sinon il sera capturé par les autres conditions.</div>`,
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
    statement: `<p>En TypeScript, on définit des <strong>types</strong> pour structurer les données. Un <code>User</code> a généralement un nom et un âge.</p><p>�0cris <code>makeUser(name, age)</code> qui retourne un objet <code>{ name, age }</code>.</p><div class="mission-example"><code>makeUser("Pierre", 21)</code> �  <code>{ name: "Pierre", age: 21 }</code></div><div class="mission-hint">�x� Utilise la syntaxe <code>return { name, age }</code> (raccourci ES6).</div>`,
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
    statement: `<p>En TypeScript, un <strong>type union</strong> permet à un paramètre d'accepter plusieurs types. Ici, <code>value</code> peut être une chaîne ou un nombre.</p><p>�0cris <code>toNumber(value)</code> : si c'est une chaîne, utilise <code>parseInt</code>. Si c'est déjà un nombre, retourne-le tel quel.</p><div class="mission-example"><code>toNumber("42")</code> �  <code>42</code><br><code>toNumber(7)</code> �  <code>7</code></div><div class="mission-hint">�x� Utilise <code>typeof value === "string"</code> pour distinguer les cas.</div>`,
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
    statement: `<p>En TypeScript, un <strong>énuméré (enum)</strong> définit un ensemble de valeurs nommées. Par exemple : <code>Role.ADMIN</code>, <code>Role.USER</code>.</p><p>�0cris <code>isAdmin(role)</code> qui retourne <code>true</code> uniquement si <code>role === "ADMIN"</code>.</p><div class="mission-example"><code>isAdmin("ADMIN")</code> �  <code>true</code><br><code>isAdmin("USER")</code> �  <code>false</code></div>`,
    starterCode: `function isAdmin(role) {\n  // ton code ici\n}`,
    functionName: "isAdmin",
    tests: [
      { name: "ADMIN", args: ["ADMIN"], expected: true },
      { name: "USER", args: ["USER"], expected: false }
    ]
  },
  {
    id: 39, track: "angular", difficulty: "easy",
    title: "Extraire les noms",
    statement: `<p>Tu as une liste d'objets utilisateurs. Chaque objet a une propriété <code>name</code>. Extrais tous les noms dans un tableau de chaînes.</p><p>�0cris <code>usernames(users)</code> qui retourne la liste des noms.</p><div class="mission-example"><code>usernames([{ name: "Alice" }, { name: "Bob" }])</code><br>�  <code>["Alice", "Bob"]</code></div><div class="mission-hint">�x� Utilise <code>.map(u =&gt; u.name)</code>.</div>`,
    starterCode: `function usernames(users) {\n  // ton code ici\n}`,
    functionName: "usernames",
    tests: [
      { name: "names", args: [[{name:"A"},{name:"B"}]], expected: ["A","B"] }
    ],
    compare: "json"
  },
  {
    id: 40, track: "angular", difficulty: "easy",
    title: "Filtrer les utilisateurs actifs",
    statement: `<p>Tu as une liste d'utilisateurs, chacun avec un champ <code>active</code> (boolean). Retourne uniquement les utilisateurs actifs.</p><p>�0cris <code>activeUsers(users)</code> qui filtre les objets avec <code>active: true</code>.</p><div class="mission-example"><code>activeUsers([{ id: 1, active: true }, { id: 2, active: false }])</code><br>�  <code>[{ id: 1, active: true }]</code></div><div class="mission-hint">�x� Utilise <code>.filter(u =&gt; u.active)</code>.</div>`,
    starterCode: `function activeUsers(users) {\n  // ton code ici\n}`,
    functionName: "activeUsers",
    tests: [
      { name: "active", args: [[{id:1,active:true},{id:2,active:false}]], expected: [{id:1,active:true}] }
    ],
    compare: "json"
  },
  {
    id: 41, track: "angular", difficulty: "medium",
    title: "Trouver par identifiant",
    statement: `<p>Dans une liste d'objets, trouve celui dont l'<code>id</code> correspond. C'est une opération courante dans les services et les stores.</p><p>�0cris <code>getById(items, id)</code> qui retourne l'objet correspondant.</p><div class="mission-example"><code>getById([{ id: 1 }, { id: 2, name: "X" }], 2)</code><br>�  <code>{ id: 2, name: "X" }</code></div><div class="mission-hint">�x� Utilise <code>.find(item =&gt; item.id === id)</code>.</div>`,
    starterCode: `function getById(items, id) {\n  // ton code ici\n}`,
    functionName: "getById",
    tests: [
      { name: "id2", args: [[{id:1},{id:2,name:"X"}], 2], expected: {id:2,name:"X"} }
    ],
    compare: "json"
  },
  {
    id: 42, track: "angular", difficulty: "medium",
    title: "Construire une URL",
    statement: `<p>En Angular, les routes dynamiques contiennent des paramètres (<code>/users/:id</code>). Construire des URLs à partir de ces paramètres est très fréquent.</p><p>�0cris <code>buildUserUrl(id)</code> qui retourne la chaîne <code>/users/{id}</code>.</p><div class="mission-example"><code>buildUserUrl(12)</code> �  <code>"/users/12"</code></div><div class="mission-hint">�x� Utilise un template literal : <code>\`/users/\${id}\`</code>.</div>`,
    starterCode: `function buildUserUrl(id) {\n  // ton code ici\n}`,
    functionName: "buildUserUrl",
    tests: [
      { name: "url", args: [12], expected: "/users/12" }
    ]
  },
  {
    id: 43, track: "angular", difficulty: "hard",
    title: "Système d'expérience",
    statement: `<p>Dans un jeu, un joueur gagne de l'expérience (XP) et monte de niveau tous les 100 XP.</p><p>�0cris <code>addXp(state, amount)</code> qui retourne un nouvel objet <code>{ xp, level }</code>. Le niveau augmente de 1 pour chaque tranche de 100 XP franchie.</p><div class="mission-example"><code>addXp({ xp: 90, level: 1 }, 20)</code><br>�  <code>{ xp: 110, level: 2 }</code></div><div class="mission-hint">�x� Nouveau XP = state.xp + amount. Nouveau level = Math.floor(newXp / 100) + 1 si on commence au niveau 1 (avec 0 XP = niveau 1). Adapte selon l'état initial.</div>`,
    starterCode: `function addXp(state, amount) {\n  // ton code ici\n}`,
    functionName: "addXp",
    tests: [
      { name: "level up", args: [{xp: 90, level: 1}, 20], expected: {xp: 110, level: 2} }
    ],
    compare: "json"
  },
  {
    id: 44, track: "angular", difficulty: "hard",
    title: "Fusionner des objets",
    statement: `<p>Fusionner deux objets est une opération courante pour mettre à jour un état ou combiner des données. En JS moderne, le <strong>spread operator</strong> (<code>...</code>) permet de faire cela simplement.</p><p>Écris <code>merge(base, updates)</code> qui retourne un <strong>nouvel objet</strong> combinant les deux. Les propriétés de <code>updates</code> écrasent celles de <code>base</code>.</p><div class="mission-example"><code>merge({ a: 1, b: 2 }, { b: 99, c: 3 })</code><br>→ <code>{ a: 1, b: 99, c: 3 }</code></div><div class="mission-hint">💡 Utilise <code>return { ...base, ...updates };</code></div>`,
    starterCode: `function merge(base, updates) {\n  // ton code ici\n}`,
    functionName: "merge",
    tests: [
      { name: "merge", args: [{ a: 1, b: 2 }, { b: 99, c: 3 }], expected: { a: 1, b: 99, c: 3 } }
    ],
    compare: "json"
  },
  {
    id: 45, track: "angular", difficulty: "hard",
    title: "Pagination",
    statement: `<p>La <strong>pagination</strong> découpe une liste en pages. La page 1 contient les <code>perPage</code> premiers éléments, la page 2 les suivants, etc.</p><p>Écris <code>paginate(arr, page, perPage)</code> où <code>page</code> commence à 1.</p><div class="mission-example"><code>paginate([1,2,3,4,5], 2, 2)</code> → <code>[3, 4]</code><br><code>paginate([1,2,3,4,5], 1, 3)</code> → <code>[1, 2, 3]</code></div><div class="mission-hint">💡 Calcule l'index de début : <code>start = (page - 1) * perPage</code>, puis utilise <code>arr.slice(start, start + perPage)</code>.</div>`,
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
    title: "Lire le port",
    statement: `<p>Les serveurs Node.js lisent leur configuration depuis <strong>les variables d'environnement</strong> (<code>process.env</code>). Le port est souvent défini dans <code>PORT</code>.</p><p>Écris <code>getPort(env)</code> qui retourne <code>env.PORT</code> converti en nombre, ou <code>3000</code> par défaut.</p><div class="mission-example"><code>getPort({})</code> → <code>3000</code><br><code>getPort({ PORT: "8080" })</code> → <code>8080</code></div><div class="mission-hint">💡 Utilise <code>env.PORT ? Number(env.PORT) : 3000</code>.</div>`,
    starterCode: `function getPort(env) {\n  // ton code ici\n}`,
    functionName: "getPort",
    tests: [
      { name: "default", args: [{}], expected: 3000 },
      { name: "custom", args: [{ PORT: "8080" }], expected: 8080 }
    ]
  },
  {
    id: 47, track: "node", difficulty: "medium",
    title: "Nettoyer une chaîne",
    statement: `<p>Lors de la réception de données (formulaires, API), il faut <strong>valider et nettoyer</strong> les entrées. Une pratique courante est de supprimer les caractères non désirés.</p><p>Écris <code>sanitizeName(str)</code> qui supprime tout sauf les lettres, espaces et tirets.</p><div class="mission-example"><code>sanitizeName("Pi@erre!! Marion")</code> → <code>"Pierre Marion"</code></div><div class="mission-hint">💡 Utilise une regex : <code>str.replace(/[^a-zA-ZÀ-ÿ\s-]/g, '')</code> pour garder lettres, espaces et tirets.</div>`,
    starterCode: `function sanitizeName(str) {\n  // ton code ici\n}`,
    functionName: "sanitizeName",
    tests: [
      { name: "clean", args: ["Pi@erre!! Marion"], expected: "Pierre Marion" }
    ]
  },
  {
    id: 48, track: "node", difficulty: "medium",
    title: "Construire une query string",
    statement: `<p>Les URLs avec paramètres (<em>query strings</em>) sont omniprésentes dans les APIs. Il faut souvent les construire programmatiquement.</p><p>Écris <code>toQuery(params)</code> qui retourne la query string avec les clés <strong>triées alphabétiquement</strong>.</p><div class="mission-example"><code>toQuery({ b: 2, a: 1 })</code> → <code>"?a=1&b=2"</code></div><div class="mission-hint">💡 Utilise <code>Object.keys(params).sort().map(k => k + '=' + params[k]).join('&')</code>, puis préfixe avec <code>'?'</code>.</div>`,
    starterCode: `function toQuery(params) {\n  // ton code ici\n}`,
    functionName: "toQuery",
    tests: [
      { name: "query", args: [{ b: 2, a: 1 }], expected: "?a=1&b=2" }
    ]
  },
  {
    id: 49, track: "node", difficulty: "hard",
    title: "Valider un e-mail",
    statement: `<p>La validation des données est une tâche essentielle côté serveur. Valider un e-mail consiste à vérifier qu'il respecte un format de base.</p><p>Écris <code>isValidEmail(email)</code> qui retourne <code>true</code> si l'email contient un <code>@</code> et un point <code>.</code> après le <code>@</code>.</p><div class="mission-example"><code>isValidEmail("a@b.com")</code> → <code>true</code><br><code>isValidEmail("ab.com")</code> → <code>false</code><br><code>isValidEmail("a@b")</code> → <code>false</code></div><div class="mission-hint">💡 Utilise une regex simple : <code>/^[^@]+@[^@]+\.[^@]+$/.test(email)</code>.</div>`,
    starterCode: `function isValidEmail(email) {\n  // ton code ici\n}`,
    functionName: "isValidEmail",
    tests: [
      { name: "ok", args: ["a@b.com"], expected: true },
      { name: "ko", args: ["ab.com"], expected: false }
    ]
  },
  {
    id: 50, track: "node", difficulty: "hard",
    title: "Grouper par catégorie",
    statement: `<p><strong>Grouper des données</strong> par propriété est très fréquent dans les APIs (ex: grouper des produits par catégorie, des utilisateurs par rôle, etc.).</p><p>Écris <code>groupBy(arr, key)</code> qui retourne un objet où chaque clé regroupe les éléments ayant la même valeur pour <code>key</code>.</p><div class="mission-example"><code>groupBy([{type:'a'},{type:'b'},{type:'a'}], 'type')</code><br>→ <code>{ a: [{type:'a'},{type:'a'}], b: [{type:'b'}] }</code></div><div class="mission-hint">💡 Utilise <code>reduce</code> : <code>arr.reduce((acc, item) => { const k = item[key]; acc[k] = [...(acc[k]||[]), item]; return acc; }, {})</code>.</div>`,
    starterCode: `function groupBy(arr, key) {\n  // ton code ici\n}`,
    functionName: "groupBy",
    tests: [
      { name: "group", args: [[{type:'a'},{type:'b'},{type:'a'}], 'type'], expected: { a: [{type:'a'},{type:'a'}], b: [{type:'b'}] } }
    ],
    compare: "json"
  }
];