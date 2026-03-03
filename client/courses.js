export const courses = {
  html: {
    title: "HTML",
    icon: "🌐",
    color: "#e34c26",
    chapters: [
      {
        title: "Structure de base d'une page HTML",
        body: `
<p>HTML (HyperText Markup Language) est le langage de structure du web. Chaque page web est un fichier HTML composé de <strong>balises</strong> imbriquées.</p>
<h4>Le squelette minimal</h4>
<p>Tout fichier HTML valide commence par <code>&lt;!DOCTYPE html&gt;</code> qui indique au navigateur qu'il s'agit de HTML5. Ensuite vient <code>&lt;html&gt;</code> qui contient deux enfants directs : <code>&lt;head&gt;</code> (métadonnées, invisible) et <code>&lt;body&gt;</code> (contenu visible).</p>
<ul>
  <li><code>&lt;head&gt;</code> : charset, viewport, title, liens CSS/fonts</li>
  <li><code>&lt;body&gt;</code> : toute la structure visible de la page</li>
</ul>
<h4>Les méta importantes</h4>
<ul>
  <li><code>&lt;meta charset="UTF-8"&gt;</code> : gère tous les caractères (accents, emoji…)</li>
  <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> : rend le site responsive sur mobile</li>
  <li><code>&lt;title&gt;</code> : texte affiché dans l'onglet du navigateur et par les moteurs de recherche</li>
</ul>`,
        code: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mon site</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Bonjour le monde !</h1>
</body>
</html>`
      },
      {
        title: "Éléments sémantiques",
        body: `
<p>Les balises <strong>sémantiques</strong> donnent du <em>sens</em> au contenu, contrairement à <code>&lt;div&gt;</code> qui est neutre. Elles aident les moteurs de recherche (SEO) et les lecteurs d'écran (accessibilité).</p>
<h4>Les balises de mise en page</h4>
<ul>
  <li><code>&lt;header&gt;</code> : en-tête de la page ou d'une section (logo, navigation principale)</li>
  <li><code>&lt;nav&gt;</code> : bloc de navigation (menus, liens)</li>
  <li><code>&lt;main&gt;</code> : contenu principal — <strong>une seule fois par page</strong></li>
  <li><code>&lt;section&gt;</code> : groupement thématique avec titre</li>
  <li><code>&lt;article&gt;</code> : contenu autonome (billet de blog, carte produit)</li>
  <li><code>&lt;aside&gt;</code> : contenu annexe (sidebar, publicité, liens connexes)</li>
  <li><code>&lt;footer&gt;</code> : pied de page (copyright, liens légaux)</li>
</ul>
<h4>Titres et texte</h4>
<p>Les niveaux de titre vont de <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code>. Il ne doit exister qu'<strong>un seul &lt;h1&gt;</strong> par page. <code>&lt;p&gt;</code> est le paragraphe, <code>&lt;strong&gt;</code> met en gras (importance), <code>&lt;em&gt;</code> en italique (emphase).</p>`,
        code: `<body>
  <header>
    <h1>CodeQuest</h1>
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/cours">Cours</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Articles récents</h2>
      <article>
        <h3>Introduction au HTML</h3>
        <p>Le HTML est la <strong>fondation</strong> du web.</p>
      </article>
    </section>
    <aside>
      <h3>Ressources</h3>
      <p>MDN Web Docs</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 CodeQuest</p>
  </footer>
</body>`
      },
      {
        title: "Formulaires et inputs",
        body: `
<p>Les formulaires permettent à l'utilisateur d'<strong>envoyer des données</strong> au serveur. L'attribut <code>action</code> définit l'URL de destination, <code>method</code> définit GET ou POST.</p>
<h4>Les types d'input essentiels</h4>
<ul>
  <li><code>type="text"</code> : champ texte libre</li>
  <li><code>type="email"</code> : valide le format email nativement</li>
  <li><code>type="password"</code> : masque la saisie</li>
  <li><code>type="number"</code> : saisie numérique avec flèches</li>
  <li><code>type="checkbox"</code> : case à cocher</li>
  <li><code>type="radio"</code> : choix unique dans un groupe</li>
  <li><code>type="file"</code> : téléversement de fichier</li>
  <li><code>type="submit"</code> : bouton d'envoi</li>
</ul>
<h4>Attributs importants</h4>
<ul>
  <li><code>required</code> : champ obligatoire</li>
  <li><code>placeholder</code> : texte d'indication grisé</li>
  <li><code>name</code> : clé envoyée au serveur</li>
  <li><code>disabled</code> : désactive le champ</li>
  <li><code>autocomplete</code> : active/désactive l'autocomplétion</li>
</ul>`,
        code: `<form action="/login" method="POST">
  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="toi@exemple.com"
      required
      autocomplete="email"
    />
  </div>

  <div class="form-group">
    <label for="password">Mot de passe</label>
    <input
      type="password"
      id="password"
      name="password"
      minlength="8"
      required
    />
  </div>

  <div class="form-group">
    <label>
      <input type="checkbox" name="remember" />
      Se souvenir de moi
    </label>
  </div>

  <button type="submit">Se connecter</button>
</form>`
      },
      {
        title: "Tableaux",
        body: `
<p>Les tableaux HTML servent à afficher des <strong>données tabulaires</strong> (horaires, comparatifs, statistiques). Ils ne doivent <em>jamais</em> être utilisés pour la mise en page (utiliser CSS pour ça).</p>
<h4>Structure d'un tableau</h4>
<ul>
  <li><code>&lt;table&gt;</code> : conteneur du tableau</li>
  <li><code>&lt;thead&gt;</code> : ligne(s) d'en-tête</li>
  <li><code>&lt;tbody&gt;</code> : corps des données</li>
  <li><code>&lt;tfoot&gt;</code> : pied de tableau (totaux…)</li>
  <li><code>&lt;tr&gt;</code> : ligne (table row)</li>
  <li><code>&lt;th&gt;</code> : cellule d'en-tête (gras, centré par défaut)</li>
  <li><code>&lt;td&gt;</code> : cellule de données</li>
</ul>
<h4>Attributs utiles</h4>
<ul>
  <li><code>colspan="2"</code> : fusionne 2 colonnes</li>
  <li><code>rowspan="3"</code> : fusionne 3 lignes</li>
  <li><code>scope="col"</code> / <code>scope="row"</code> : accessibilité des en-têtes</li>
</ul>`,
        code: `<table>
  <thead>
    <tr>
      <th scope="col">Prénom</th>
      <th scope="col">Track</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pierre</td>
      <td>JavaScript</td>
      <td>1 450 pts</td>
    </tr>
    <tr>
      <td>Marie</td>
      <td>Angular</td>
      <td>2 100 pts</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>3 550 pts</td>
    </tr>
  </tfoot>
</table>`
      },
      {
        title: "Médias : images, vidéo, figure",
        body: `
<p>HTML propose des balises dédiées pour intégrer tous types de médias de façon native et accessible.</p>
<h4>Images</h4>
<p><code>&lt;img&gt;</code> est une balise auto-fermante. L'attribut <code>alt</code> est <strong>obligatoire</strong> pour l'accessibilité — il décrit l'image pour les lecteurs d'écran et s'affiche si l'image ne charge pas. Utilisez <code>loading="lazy"</code> pour améliorer les performances (chargement différé).</p>
<h4>Figure & Figcaption</h4>
<p><code>&lt;figure&gt;</code> groupe un média avec sa légende <code>&lt;figcaption&gt;</code>. C'est la façon sémantique correcte d'afficher une image avec une description.</p>
<h4>Vidéo & Audio</h4>
<p>Les balises <code>&lt;video&gt;</code> et <code>&lt;audio&gt;</code> intègrent des médias nativement. L'attribut <code>controls</code> affiche les contrôles du navigateur.</p>`,
        code: `<!-- Image simple -->
<img
  src="photo.jpg"
  alt="Un coucher de soleil sur la mer"
  width="800"
  height="600"
  loading="lazy"
/>

<!-- Figure avec légende -->
<figure>
  <img src="diagram.png" alt="Architecture MVC" />
  <figcaption>Fig. 1 — Schéma du pattern MVC</figcaption>
</figure>

<!-- Vidéo -->
<video controls width="640" poster="thumbnail.jpg">
  <source src="demo.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la vidéo HTML5.
</video>

<!-- Audio -->
<audio controls>
  <source src="podcast.mp3" type="audio/mp3" />
</audio>`
      },
      {
        title: "Accessibilité & ARIA",
        body: `
<p>L'accessibilité garantit que ton site est utilisable par <strong>tout le monde</strong>, y compris les personnes utilisant des lecteurs d'écran, une navigation au clavier, ou souffrant de déficiences visuelles.</p>
<h4>Règles fondamentales</h4>
<ul>
  <li>Toujours relier un <code>&lt;label&gt;</code> à son input via <code>for</code>/<code>id</code></li>
  <li>Tout <code>&lt;img&gt;</code> doit avoir un <code>alt</code> descriptif (ou <code>alt=""</code> si décoratif)</li>
  <li>Respecter la hiérarchie des titres (pas de h3 sans h2)</li>
  <li>Assurer un contraste suffisant (ratio ≥ 4.5:1 pour le texte)</li>
  <li>Rendre la navigation au clavier possible (focus visible)</li>
</ul>
<h4>Attributs ARIA</h4>
<p>ARIA (Accessible Rich Internet Applications) complète HTML quand la sémantique native ne suffit pas :</p>
<ul>
  <li><code>aria-label="..."</code> : nomme un élément sans texte visible</li>
  <li><code>aria-hidden="true"</code> : cache un élément aux lecteurs d'écran (icône décorative)</li>
  <li><code>aria-live="polite"</code> : annonce les changements dynamiques</li>
  <li><code>role="alert"</code> : annonce immédiatement</li>
</ul>`,
        code: `<!-- Formulaire accessible -->
<form>
  <label for="username">Nom d'utilisateur</label>
  <input
    id="username"
    type="text"
    aria-describedby="username-hint"
    required
  />
  <span id="username-hint">Entre 3 et 20 caractères</span>
</form>

<!-- Bouton icône accessible -->
<button aria-label="Fermer la modale">
  <svg aria-hidden="true"><!-- icône X --></svg>
</button>

<!-- Zone de notifications dynamiques -->
<div
  role="status"
  aria-live="polite"
  id="notifications"
>
  <!-- Le contenu ajouté ici est annoncé -->
</div>

<!-- Navigation avec landmark -->
<nav aria-label="Navigation principale">
  <ul>
    <li><a href="/" aria-current="page">Accueil</a></li>
    <li><a href="/cours">Cours</a></li>
  </ul>
</nav>`
      }
    ]
  },

  css: {
    title: "CSS",
    icon: "🎨",
    color: "#264de4",
    chapters: [
      {
        title: "Sélecteurs et spécificité",
        body: `
<p>CSS (Cascading Style Sheets) contrôle l'apparence des éléments HTML. Les <strong>sélecteurs</strong> désignent quels éléments styliser.</p>
<h4>Types de sélecteurs</h4>
<ul>
  <li><code>div</code> : sélecteur de balise (tous les div)</li>
  <li><code>.classe</code> : sélecteur de classe (réutilisable)</li>
  <li><code>#identifiant</code> : sélecteur d'id (unique par page)</li>
  <li><code>div p</code> : descendant (p dans un div)</li>
  <li><code>div > p</code> : enfant direct</li>
  <li><code>a:hover</code> : pseudo-classe (état)</li>
  <li><code>p::first-line</code> : pseudo-élément</li>
  <li><code>[type="email"]</code> : sélecteur d'attribut</li>
</ul>
<h4>La spécificité (cascade)</h4>
<p>Quand plusieurs règles s'appliquent au même élément, la <strong>spécificité</strong> détermine laquelle gagne :</p>
<ul>
  <li>Inline style : 1000 pts</li>
  <li>ID : 100 pts</li>
  <li>Classe / pseudo-classe / attribut : 10 pts</li>
  <li>Balise / pseudo-élément : 1 pt</li>
</ul>
<p><strong>Évite <code>!important</code></strong> — c'est un signe que la structure CSS est désorganisée.</p>`,
        code: `/* Sélecteur balise — spécificité: 1 */
p { color: gray; }

/* Classe — spécificité: 10 */
.title { color: blue; }

/* ID — spécificité: 100 */
#hero { color: red; }

/* Combinaison — spécificité: 11 */
.card p { font-size: 14px; }

/* Attribut — spécificité: 10 */
input[type="email"] { border-color: #ff3ea5; }

/* Pseudo-classe — spécificité: 11 */
a:hover { text-decoration: none; }

/* Pseudo-élément — spécificité: 2 */
p::first-letter { font-size: 2em; }`
      },
      {
        title: "Le Box Model",
        body: `
<p>En CSS, chaque élément est une <strong>boîte rectangulaire</strong> composée de 4 couches concentriques (de l'intérieur vers l'extérieur) :</p>
<ul>
  <li><strong>Content</strong> : le contenu réel (texte, image)</li>
  <li><strong>Padding</strong> : espace intérieur entre content et border</li>
  <li><strong>Border</strong> : bordure (épaisseur, style, couleur)</li>
  <li><strong>Margin</strong> : espace extérieur qui sépare les boîtes</li>
</ul>
<h4>box-sizing</h4>
<p>Par défaut (<code>content-box</code>), <code>width</code> n'inclut pas padding et border. Avec <code>box-sizing: border-box</code>, <code>width</code> inclut tout — <strong>beaucoup plus intuitif</strong>. Convention : l'appliquer globalement via <code>*</code>.</p>
<h4>Margin collapse</h4>
<p>Les marges verticales entre deux blocs fusionnent (la plus grande l'emporte). Les marges horizontales ne fusionnent pas.</p>`,
        code: `/* Bonne pratique : appliquer partout */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 300px;        /* largeur totale incluant padding/border */
  padding: 16px;       /* 4 côtés */
  padding: 8px 16px;   /* vertical | horizontal */
  border: 1px solid #2a2a3a;
  border-radius: 12px; /* coins arrondis */
  margin: 0 auto;      /* centrage horizontal */
}

/* Raccourcis margin/padding */
.el {
  margin: 10px 20px 10px 20px; /* top right bottom left */
  margin: 10px 20px;           /* top/bottom  left/right */
  margin-top: 10px;            /* côté spécifique */
}

/* Display influence le box model */
span { display: inline; }       /* ignore width/height */
div  { display: block; }        /* prend toute la largeur */
.box { display: inline-block; } /* inline + respect width/height */`
      },
      {
        title: "Flexbox",
        body: `
<p>Flexbox est le système de mise en page <strong>unidimensionnel</strong> de CSS (une ligne ou une colonne). Il est idéal pour les navigations, les barres d'outils, les cartes en ligne, les centrages.</p>
<h4>Propriétés du conteneur (parent)</h4>
<ul>
  <li><code>display: flex</code> : active flexbox</li>
  <li><code>flex-direction: row | column</code> : axe principal</li>
  <li><code>justify-content</code> : alignement sur l'axe principal (flex-start, center, flex-end, space-between, space-around)</li>
  <li><code>align-items</code> : alignement sur l'axe croisé (stretch, center, flex-start, flex-end)</li>
  <li><code>flex-wrap: wrap</code> : passe à la ligne si pas d'espace</li>
  <li><code>gap: 16px</code> : espace entre les enfants</li>
</ul>
<h4>Propriétés des enfants (items)</h4>
<ul>
  <li><code>flex: 1</code> : l'item prend l'espace restant (raccourci de flex-grow: 1)</li>
  <li><code>flex: 0 0 200px</code> : largeur fixe (grow shrink basis)</li>
  <li><code>align-self</code> : surcharge align-items pour cet item</li>
  <li><code>order</code> : modifie l'ordre visuel</li>
</ul>`,
        code: `/* Navigation horizontale */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

/* Centrage parfait */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* plein écran */
}

/* Cartes sur plusieurs lignes */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 250px; /* croît, rétrécit, base 250px */
  max-width: 400px;
}

/* Layout sidebar + main */
.layout {
  display: flex;
  gap: 24px;
}
.sidebar { flex: 0 0 260px; } /* largeur fixe */
.content { flex: 1; }         /* prend le reste */`
      },
      {
        title: "CSS Grid",
        body: `
<p>CSS Grid est le système de mise en page <strong>bidimensionnel</strong> (lignes ET colonnes). Parfait pour les layouts de page, les galeries, les dashboards.</p>
<h4>Propriétés du conteneur</h4>
<ul>
  <li><code>display: grid</code> : active grid</li>
  <li><code>grid-template-columns: repeat(3, 1fr)</code> : 3 colonnes égales</li>
  <li><code>grid-template-rows: auto</code> : hauteur automatique</li>
  <li><code>gap: 16px</code> : espace entre cellules</li>
  <li><code>grid-template-areas</code> : nommage des zones</li>
</ul>
<h4>Unités et fonctions utiles</h4>
<ul>
  <li><code>fr</code> : fraction de l'espace disponible</li>
  <li><code>repeat(3, 1fr)</code> : raccourci pour répéter</li>
  <li><code>minmax(250px, 1fr)</code> : min et max</li>
  <li><code>auto-fill</code> : remplit avec autant de colonnes que possible</li>
</ul>
<h4>Placement des items</h4>
<ul>
  <li><code>grid-column: 1 / 3</code> : s'étend de la colonne 1 à 3</li>
  <li><code>grid-area: header</code> : place dans la zone nommée</li>
</ul>`,
        code: `/* Grid 3 colonnes responsive */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Layout complet avec areas */
.page {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main  "
    "footer  footer";
  grid-template-columns: 260px 1fr;
  grid-template-rows: 60px 1fr 50px;
  min-height: 100vh;
  gap: 16px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Placement manuel */
.featured {
  grid-column: 1 / -1; /* s'étend sur toutes les colonnes */
}`
      },
      {
        title: "Responsive Design & Media Queries",
        body: `
<p>Le <strong>responsive design</strong> adapte l'interface à toutes les tailles d'écran. Approche recommandée : <em>mobile-first</em> — écrire les styles mobiles par défaut, puis surcharger pour les grands écrans.</p>
<h4>Les breakpoints courants</h4>
<ul>
  <li>Mobile : < 576px (styles par défaut)</li>
  <li>Tablette : ≥ 768px</li>
  <li>Desktop : ≥ 1024px</li>
  <li>Large : ≥ 1280px</li>
</ul>
<h4>Media query syntax</h4>
<p><code>@media (min-width: 768px) { ... }</code> — styles appliqués si la largeur est ≥ 768px.</p>
<h4>Unités relatives</h4>
<ul>
  <li><code>%</code> : relatif au parent</li>
  <li><code>vw / vh</code> : relatif à la fenêtre (viewport)</li>
  <li><code>rem</code> : relatif à la taille de police racine (16px par défaut)</li>
  <li><code>em</code> : relatif à la taille de police du parent</li>
  <li><code>clamp(min, val, max)</code> : taille fluide entre min et max</li>
</ul>`,
        code: `/* === Mobile First === */

/* Base : mobile */
.grid {
  display: grid;
  grid-template-columns: 1fr;  /* 1 colonne */
  gap: 12px;
}

.hero-title {
  font-size: clamp(1.5rem, 5vw, 3rem); /* fluid */
}

/* Tablette */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .sidebar {
    display: block; /* visible sur desktop */
  }
}

/* Masquer sur mobile */
@media (max-width: 767px) {
  .desktop-only { display: none; }
}`
      },
      {
        title: "Variables CSS & Thèmes",
        body: `
<p>Les <strong>variables CSS</strong> (custom properties) permettent de centraliser les valeurs réutilisables (couleurs, espacements, typographie). Elles sont déclarées avec <code>--nom</code> et utilisées avec <code>var(--nom)</code>.</p>
<h4>Avantages</h4>
<ul>
  <li>Modification globale en un seul endroit</li>
  <li>Support des thèmes (dark/light mode)</li>
  <li>Cascades et héritages (contrairement aux préprocesseurs)</li>
  <li>Modifiables en JavaScript</li>
</ul>
<h4>Déclaration</h4>
<p>On les déclare généralement dans <code>:root</code> (équivalent de <code>html</code>) pour les rendre globales. Mais on peut les surcharger localement dans n'importe quel sélecteur.</p>`,
        code: `/* Définition globale */
:root {
  /* Couleurs */
  --color-primary:    #ff3ea5;
  --color-bg:         #0b0b10;
  --color-surface:    #141422;
  --color-border:     #2a2a3a;
  --color-text:       #f2f2f2;
  --color-success:    #5cff8a;
  --color-error:      #ff6b6b;

  /* Espacements */
  --space-sm:  8px;
  --space-md: 16px;
  --space-lg: 24px;

  /* Border radius */
  --radius-sm:  6px;
  --radius-md: 12px;
}

/* Utilisation */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.btn-primary {
  background: var(--color-primary);
}

/* Thème clair */
@media (prefers-color-scheme: light) {
  :root {
    --color-bg:      #ffffff;
    --color-surface: #f8f8f8;
    --color-text:    #1a1a2e;
  }
}`
      },
      {
        title: "Transitions & Animations",
        body: `
<p>CSS permet d'animer les interfaces sans JavaScript pour des effets simples et performants.</p>
<h4>transition</h4>
<p><code>transition</code> anime le changement d'une propriété d'un état à un autre (hover, focus, classe JS…). Syntaxe : <code>transition: propriété durée timing-function délai</code>.</p>
<h4>@keyframes & animation</h4>
<p><code>@keyframes</code> définit une animation frame par frame. <code>animation</code> l'applique à un élément. Propriétés clés :</p>
<ul>
  <li><code>animation-duration</code> : durée totale</li>
  <li><code>animation-timing-function</code> : ease, linear, cubic-bezier…</li>
  <li><code>animation-iteration-count</code> : nombre de répétitions (infinite)</li>
  <li><code>animation-direction</code> : alternate (va-et-vient)</li>
  <li><code>animation-fill-mode: forwards</code> : garde l'état final</li>
</ul>
<h4>Performance</h4>
<p>Pour des animations fluides (60fps), anime uniquement <code>transform</code> et <code>opacity</code> — elles ne déclenchent pas de recalcul de layout sur le GPU.</p>`,
        code: `/* === Transitions === */
.btn {
  background: #ff3ea5;
  transform: scale(1);
  transition:
    background 0.2s ease,
    transform  0.15s ease;
}
.btn:hover {
  background: #e0358f;
  transform: scale(1.05);
}

/* === Keyframes === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.4s ease forwards;
}

/* Pulse (loading) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.skeleton {
  animation: pulse 1.5s ease infinite;
}

/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #2a2a3a;
  border-top-color: #ff3ea5;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`
      }
    ]
  },

  js: {
    title: "JavaScript",
    icon: "⚡",
    color: "#f7df1e",
    chapters: [
      {
        title: "Variables, types et opérateurs",
        body: `
<p>Une <strong>variable</strong> est une boîte qui stocke une valeur. En JavaScript moderne (ES6+), on utilise <code>const</code> et <code>let</code> — oublie <code>var</code>.</p>

<h4>const vs let — laquelle choisir ?</h4>
<ul>
  <li><code>const</code> → la valeur <strong>ne changera pas</strong> (à préférer par défaut)</li>
  <li><code>let</code> → la valeur peut être <strong>réassignée</strong> plus tard</li>
  <li><code>var</code> → <strong>à éviter</strong> : comportement imprévisible (hoisting, pas de scope de bloc)</li>
</ul>
<p>Conseil : commence toujours par <code>const</code>. Si tu dois réaffecter, change en <code>let</code>.</p>

<h4>Les types de données</h4>
<p>JavaScript a 7 types primitifs + le type <code>object</code> :</p>
<ul>
  <li><code>string</code> — du texte : <code>"bonjour"</code>, <code>'world'</code>, <code>\`template\`</code></li>
  <li><code>number</code> — un nombre : <code>42</code>, <code>3.14</code>, <code>-7</code></li>
  <li><code>boolean</code> — vrai ou faux : <code>true</code> / <code>false</code></li>
  <li><code>null</code> — absence <strong>intentionnelle</strong> de valeur (tu le mets toi-même)</li>
  <li><code>undefined</code> — valeur <strong>non assignée</strong> (JS la met automatiquement)</li>
  <li><code>bigint</code> — très grands entiers : <code>9007199254740992n</code></li>
  <li><code>symbol</code> — identifiant unique (avancé)</li>
</ul>

<h4>Les template literals — écrire du texte avec des variables</h4>
<p>Utilise les backticks <code>\`\`</code> pour insérer des variables directement dans une chaîne avec <code>\${variable}</code>. Beaucoup plus lisible que les concaténations avec <code>+</code>.</p>

<h4>Égalité stricte === vs abstraite ==</h4>
<p><strong>Toujours utiliser <code>===</code></strong> — il compare la valeur ET le type. L'opérateur <code>==</code> fait des conversions implicites surprenantes qui causent des bugs.</p>

<h4>Valeurs "falsy"</h4>
<p>Ces valeurs sont considérées comme <code>false</code> dans un <code>if</code> : <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Tout le reste est <em>truthy</em> (même un tableau vide <code>[]</code> !).</p>`,
        code: `// ──────────────────────────────────────
// Déclarations
// ──────────────────────────────────────
const PI    = 3.14159;  // jamais réassigné → const
let   score = 0;        // sera modifié plus tard → let

score = 42; // ✅ ok car let
// PI = 3;  // ❌ Erreur ! const ne peut pas être réassigné

// ──────────────────────────────────────
// Les différents types
// ──────────────────────────────────────
const prenom    = "Pierre";         // string
const age       = 21;               // number
const estAdmin  = false;            // boolean
const rien      = null;             // null (intentionnel)
let   nonDefini;                    // undefined (automatique)

// typeof — connaître le type d'une valeur
console.log(typeof prenom);   // "string"
console.log(typeof age);      // "number"
console.log(typeof estAdmin); // "boolean"
console.log(typeof rien);     // "object" ← BUG HISTORIQUE de JS, null n'est pas un objet !
console.log(typeof nonDefini);// "undefined"

// ──────────────────────────────────────
// Template literals — la bonne façon d'écrire du texte
// ──────────────────────────────────────

// ❌ Ancienne façon (difficile à lire)
const msg1 = "Bonjour " + prenom + ", tu as " + age + " ans.";

// ✅ Nouvelle façon avec backticks
const msg2 = \`Bonjour \${prenom}, tu as \${age} ans.\`;

// On peut même mettre des expressions à l'intérieur
const msg3 = \`Dans 10 ans tu auras \${age + 10} ans.\`;

console.log(msg2); // "Bonjour Pierre, tu as 21 ans."
console.log(msg3); // "Dans 10 ans tu auras 31 ans."

// ──────────────────────────────────────
// === vs == — toujours utiliser ===
// ──────────────────────────────────────
console.log(0   ==  false);  // true  ← PIÈGE ! JS convertit 0 en false
console.log(0  ===  false);  // false ← correct, ce sont des types différents
console.log("" ==  false);   // true  ← PIÈGE !
console.log("" === false);   // false ← correct

// Conversions implicites absurdes de ==
console.log(null  == undefined);  // true  ← bizarre
console.log(null === undefined);  // false ← logique

// ──────────────────────────────────────
// Valeurs "falsy" — ce qui est faux dans un if
// ──────────────────────────────────────
if (!0)         console.log("0 est falsy");
if (!"")        console.log("chaîne vide est falsy");
if (!null)      console.log("null est falsy");
if (!undefined) console.log("undefined est falsy");

// ATTENTION : ces valeurs sont TOUJOURS truthy :
if ([])  console.log("tableau vide [] est TRUTHY !");
if ({})  console.log("objet vide {} est TRUTHY !");
if ("0") console.log('la chaîne "0" est TRUTHY !');`
      },
      {
        title: "Fonctions & Arrow Functions",
        body: `
<p>Une <strong>fonction</strong> est un bloc de code réutilisable. En JavaScript, les fonctions sont des valeurs comme les autres : on peut les stocker dans une variable, les passer en argument, les retourner d'une autre fonction.</p>

<h4>3 façons d'écrire une fonction</h4>
<ul>
  <li><strong>Déclaration</strong> <code>function nom() {}</code> — hoistée : disponible AVANT sa définition dans le fichier</li>
  <li><strong>Expression</strong> <code>const f = function() {}</code> — non hoistée, traitée comme une variable</li>
  <li><strong>Arrow function</strong> <code>const f = () => {}</code> — syntaxe courte, et n'a pas son propre <code>this</code> (important en Angular/React)</li>
</ul>

<h4>Arrow function — raccourcis</h4>
<ul>
  <li>Un seul paramètre : les parenthèses sont optionnelles → <code>x => x * 2</code></li>
  <li>Corps sur une ligne : pas besoin de <code>return</code> ni d'accolades → <code>(a, b) => a + b</code></li>
  <li>Retourner un objet sur une ligne : entoure-le de parenthèses → <code>id => ({ id, label: "x" })</code></li>
</ul>

<h4>Paramètres avancés</h4>
<ul>
  <li><strong>Valeur par défaut</strong> : <code>function f(x = 0)</code> — si x n'est pas fourni, vaut 0</li>
  <li><strong>Rest parameters</strong> : <code>function f(...args)</code> — capture tous les arguments dans un tableau</li>
  <li><strong>Déstructuration</strong> : <code>function f({ name, age })</code> — extrait directement les propriétés d'un objet passé en argument</li>
</ul>

<h4>Closures — qu'est-ce que c'est ?</h4>
<p>Une fonction a accès aux variables des scopes qui l'entourent, même après que ce scope soit terminé. C'est une <strong>fermeture</strong> (closure). Exemple classique : un compteur. La fonction interne "se souvient" de la variable <code>count</code> même si <code>createCounter()</code> a fini de s'exécuter.</p>`,
        code: `// ──────────────────────────────────────
// 3 façons d'écrire une fonction
// ──────────────────────────────────────

// 1. Déclaration — disponible avant cette ligne grâce au hoisting
function additionner(a, b) {
  return a + b;
}

// 2. Expression — stockée dans une variable
const multiplier = function(a, b) {
  return a * b;
};

// 3. Arrow function
const soustraire = (a, b) => a - b;

// Appel identique pour les 3
additionner(3, 4);  // 7
multiplier(3, 4);   // 12
soustraire(10, 4);  // 6

// ──────────────────────────────────────
// Arrow functions — les raccourcis
// ──────────────────────────────────────

// Corps sur une ligne → return implicite
const double = x => x * 2;
const somme  = (a, b) => a + b;

// Corps multi-lignes → accolades et return explicite
const saluer = (prenom) => {
  const message = \`Bonjour \${prenom} !\`;
  return message;
};

// Retourner un objet sur une ligne → entourer de ()
const creerUser = (id, nom) => ({
  id:  id,
  nom: nom
});

// ──────────────────────────────────────
// Paramètres avancés
// ──────────────────────────────────────

// Valeur par défaut
const puissance = (base, exposant = 2) => base ** exposant;
puissance(3);    // 9  (exposant vaut 2 par défaut)
puissance(3, 3); // 27

// Rest parameters — capture tout dans un tableau
const additionnerTout = (...nombres) => {
  return nombres.reduce((total, n) => total + n, 0);
};
additionnerTout(1, 2, 3, 4, 5); // 15

// Déstructuration dans les paramètres
function afficherProfil({ nom, age, role = "inconnu" }) {
  console.log(\`\${nom}, \${age} ans, rôle : \${role}\`);
}
afficherProfil({ nom: "Alice", age: 28, role: "admin" });
// "Alice, 28 ans, rôle : admin"

// ──────────────────────────────────────
// Closure — exemple concret : compteur
// ──────────────────────────────────────
function creerCompteur() {
  let count = 0; // cette variable est "capturée" par les fonctions internes

  return {
    incrementer: () => {
      count = count + 1;
      return count;
    },
    decrementer: () => {
      count = count - 1;
      return count;
    },
    valeur: () => count
  };
}

const compteur = creerCompteur();
compteur.incrementer(); // 1
compteur.incrementer(); // 2
compteur.incrementer(); // 3
compteur.decrementer(); // 2
compteur.valeur();      // 2
// Note : count est inaccessible de l'extérieur — c'est de l'encapsulation !`
      },
      {
        title: "Tableaux et méthodes ES6+",
        body: `
<p>Un <strong>tableau</strong> est une liste ordonnée de valeurs. Les méthodes modernes permettent de manipuler ces listes de façon claire et sans modifier le tableau original.</p>

<h4>Les méthodes essentielles — avec une analogie</h4>
<ul>
  <li><code>map(fn)</code> — <em>"Transforme chaque élément"</em> → retourne un nouveau tableau de la même longueur. Comme une chaîne de montage qui modifie chaque pièce.</li>
  <li><code>filter(fn)</code> — <em>"Garde seulement ceux qui passent le test"</em> → retourne un sous-ensemble. Comme un filtre à café.</li>
  <li><code>reduce(fn, init)</code> — <em>"Réduit tout en une seule valeur"</em> → somme, objet, texte... Comme un entonnoir.</li>
  <li><code>find(fn)</code> — retourne <strong>le premier élément</strong> qui correspond (ou <code>undefined</code>)</li>
  <li><code>findIndex(fn)</code> — retourne l'<strong>index</strong> du premier élément trouvé (ou <code>-1</code>)</li>
  <li><code>some(fn)</code> — <code>true</code> si <strong>au moins un</strong> élément passe le test</li>
  <li><code>every(fn)</code> — <code>true</code> si <strong>tous</strong> passent le test</li>
  <li><code>includes(val)</code> — <code>true</code> si la valeur est présente</li>
  <li><code>flat(n)</code> — aplatis les tableaux imbriqués</li>
  <li><code>flatMap(fn)</code> — map + flat en une seule opération</li>
</ul>

<h4>Règle d'or : ne pas muter le tableau original</h4>
<p>Ces méthodes retournent toujours un <strong>nouveau tableau</strong>. L'original n'est jamais modifié. Cela évite les bugs difficiles à trouver. Pour ajouter un élément : <code>[...tableau, nouvelElement]</code> plutôt que <code>tableau.push()</code>.</p>

<h4>Chaîner les méthodes</h4>
<p>On peut enchaîner <code>.filter()</code>, <code>.map()</code>, etc. sur une même ligne. C'est lisible et puissant — chaque méthode reçoit en entrée le résultat de la précédente.</p>`,
        code: `// Notre tableau de départ — chaque objet sur ses propres lignes
const users = [
  {
    id:     1,
    name:   "Alice",
    age:    28,
    active: true
  },
  {
    id:     2,
    name:   "Bob",
    age:    17,
    active: false
  },
  {
    id:     3,
    name:   "Clara",
    age:    32,
    active: true
  }
];

// ──────────────────────────────────────
// map — transformer chaque élément
// ──────────────────────────────────────
// Extraire juste les noms
const names = users.map(u => u.name);
// → ["Alice", "Bob", "Clara"]

// Créer un nouveau tableau d'objets transformés
const usersWithLabel = users.map(u => ({
  id:    u.id,
  label: \`\${u.name} (\${u.age} ans)\`
}));
// → [{ id:1, label:"Alice (28 ans)" }, ...]

// ──────────────────────────────────────
// filter — garder seulement certains éléments
// ──────────────────────────────────────
const actifs = users.filter(u => u.active);
// → [Alice, Clara] (Bob retiré car active: false)

const majeurs = users.filter(u => u.age >= 18);
// → [Alice, Clara] (Bob retiré car 17 ans)

// ──────────────────────────────────────
// reduce — agréger en une seule valeur
// ──────────────────────────────────────
// Somme des âges
const totalAge = users.reduce((somme, u) => somme + u.age, 0);
// → 77 (28 + 17 + 32)

const moyenneAge = totalAge / users.length;
// → 25.67

// ──────────────────────────────────────
// find / findIndex — chercher un élément
// ──────────────────────────────────────
const bob = users.find(u => u.id === 2);
// → { id:2, name:"Bob", age:17, active:false }

const indexBob = users.findIndex(u => u.id === 2);
// → 1 (position dans le tableau)

// ──────────────────────────────────────
// Chaîner — filtre + transformation
// ──────────────────────────────────────
const nomsActifsMajeurs = users
  .filter(u => u.active && u.age >= 18)
  .map(u => u.name.toUpperCase());
// → ["ALICE", "CLARA"]

// ──────────────────────────────────────
// Immutabilité — ajouter sans "push"
// ──────────────────────────────────────
const nouvelUser = {
  id:     4,
  name:   "Dave",
  age:    25,
  active: true
};

const usersPlus = [...users, nouvelUser]; // users n'est PAS modifié
const usersSans = users.filter(u => u.id !== 2); // retire Bob

// Destructuration de tableau
const [premier, deuxieme, ...reste] = users;
console.log(premier.name); // "Alice"
console.log(reste.length); // 1 (Clara)`
      },
      {
        title: "Objets & Déstructuration",
        body: `
<p>Un <strong>objet</strong> en JavaScript est une collection de paires <em>clé : valeur</em>. C'est la structure de données la plus utilisée du langage — presque tout est un objet en JS.</p>

<h4>Créer un objet</h4>
<p>On crée un objet avec des accolades <code>{ }</code>. Chaque propriété a un nom (la clé) et une valeur. Pour bien lire ton code, <strong>écris chaque propriété sur sa propre ligne</strong> :</p>
<ul>
  <li><code>const user = { id: 1, name: "Pierre" }</code> → difficile à lire si beaucoup de propriétés</li>
  <li>Préfère la version multi-lignes montrée dans l'exemple ci-dessous</li>
</ul>

<h4>Accéder aux valeurs</h4>
<ul>
  <li><code>user.name</code> — notation pointée (la plus courante)</li>
  <li><code>user["name"]</code> — notation crochet (utile si la clé est dans une variable)</li>
</ul>

<h4>Modifier un objet</h4>
<ul>
  <li>Modifier : <code>user.age = 22</code></li>
  <li>Ajouter une propriété : <code>user.email = "p@mail.com"</code></li>
  <li>Supprimer : <code>delete user.email</code></li>
</ul>

<h4>Déstructuration — extraire des propriétés facilement</h4>
<p>Au lieu d'écrire <code>user.name</code>, <code>user.age</code>... on peut extraire plusieurs propriétés en une ligne :</p>
<ul>
  <li><code>const { name, age } = user</code> → crée directement les variables <code>name</code> et <code>age</code></li>
  <li>Avec valeur par défaut : <code>const { role = "user" } = user</code> → si <code>role</code> n'existe pas, vaut "user"</li>
  <li>Avec renommage : <code>const { name: userName } = user</code> → la variable s'appelle <code>userName</code></li>
</ul>

<h4>Copier un objet sans le modifier (spread)</h4>
<p><code>{ ...user }</code> crée une <strong>copie nouvelle</strong> de l'objet — l'original reste intact. On peut aussi ajouter ou écraser des propriétés en même temps.</p>

<h4>Object.keys / values / entries</h4>
<p>Ces méthodes permettent de parcourir un objet comme un tableau :</p>
<ul>
  <li><code>Object.keys(obj)</code> → tableau des noms des propriétés</li>
  <li><code>Object.values(obj)</code> → tableau des valeurs</li>
  <li><code>Object.entries(obj)</code> → tableau de paires <code>[clé, valeur]</code></li>
</ul>`,
        code: `// ✅ Création d'objet — une propriété par ligne, bien lisible
const user = {
  id:    1,
  name:  "Pierre",
  age:   21,
  role:  "student",
  address: {
    city:    "Paris",
    zip:     "75001",
    country: "France"
  }
};

// Accès aux propriétés
console.log(user.name);            // "Pierre"
console.log(user.address.city);    // "Paris"
const key = "age";
console.log(user[key]);            // 21

// Modifier / ajouter
user.age   = 22;
user.email = "pierre@mail.com";

// Supprimer
delete user.email;

// ────────────────────────────────
// Déstructuration
// ────────────────────────────────

// Extraction simple
const { name, age } = user;
console.log(name); // "Pierre"
console.log(age);  // 22

// Valeur par défaut si la propriété n'existe pas
const { role = "user", score = 0 } = user;
console.log(role);  // "student" (existe dans user)
console.log(score); // 0 (n'existe pas → valeur par défaut)

// Renommage : la variable s'appelle "userName", pas "name"
const { name: userName } = user;
console.log(userName); // "Pierre"

// Déstructuration imbriquée
const { address: { city, zip } } = user;
console.log(city); // "Paris"
console.log(zip);  // "75001"

// Dans les paramètres d'une fonction
function afficherUser({ name, age, role = "inconnu" }) {
  console.log(\`\${name} (\${age} ans) — rôle : \${role}\`);
}
afficherUser(user); // "Pierre (22 ans) — rôle : student"

// ────────────────────────────────
// Copier et modifier sans toucher l'original
// ────────────────────────────────
const userModifie = {
  ...user,          // copie toutes les propriétés de user
  age:   23,        // écrase l'âge
  email: "p@x.com"  // ajoute une nouvelle propriété
};
// user est toujours intact ! userModifie est un nouvel objet.

// ────────────────────────────────
// Parcourir un objet
// ────────────────────────────────
const produit = {
  nom:   "Clavier",
  prix:  49.99,
  stock: 12
};

Object.keys(produit).forEach(cle => {
  console.log(cle); // "nom", "prix", "stock"
});

Object.entries(produit).forEach(([cle, valeur]) => {
  console.log(\`\${cle} = \${valeur}\`);
  // "nom = Clavier"
  // "prix = 49.99"
  // "stock = 12"
});

// Shorthand ES6 — si la variable et la clé ont le même nom
const nom  = "Alice";
const age2 = 30;
const personne = { nom, age: age2 }; // { nom: "Alice", age: 30 }`
      },
      {
        title: "Promesses & async/await",
        body: `
<p>JavaScript est <strong>mono-thread et asynchrone</strong>. Pour gérer des opérations longues (API, fichiers, timers) sans bloquer l'interface, on utilise les Promesses ou async/await.</p>
<h4>Les Promises</h4>
<p>Une <code>Promise</code> représente une valeur future : elle est <em>pending</em>, puis <em>fulfilled</em> ou <em>rejected</em>.</p>
<ul>
  <li><code>.then(cb)</code> : callback si succès</li>
  <li><code>.catch(cb)</code> : callback si erreur</li>
  <li><code>.finally(cb)</code> : toujours exécuté</li>
  <li><code>Promise.all([p1, p2])</code> : attend toutes les promesses</li>
  <li><code>Promise.allSettled([...])</code> : attend toutes, succès ou échec</li>
</ul>
<h4>async/await</h4>
<p>Syntaxe qui rend le code asynchrone lisible comme du code synchrone. Une fonction <code>async</code> retourne toujours une Promise. <code>await</code> suspend l'exécution jusqu'à la résolution.</p>`,
        code: `// === Fetch d'une API ===

// Style Promise
fetch("https://api.exemple.com/users")
  .then(res => {
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json();
  })
  .then(users => console.log(users))
  .catch(err => console.error("Erreur :", err))
  .finally(() => console.log("Requête terminée"));

// Style async/await (recommandé)
async function getUsers() {
  try {
    const res = await fetch("https://api.exemple.com/users");
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    const users = await res.json();
    return users;
  } catch (err) {
    console.error("Erreur :", err);
    throw err; // re-lancer si nécessaire
  }
}

// Appels parallèles
async function loadDashboard(userId) {
  const [user, posts, comments] = await Promise.all([
    fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    fetch(\`/api/posts?user=\${userId}\`).then(r => r.json()),
    fetch(\`/api/comments?user=\${userId}\`).then(r => r.json()),
  ]);
  return { user, posts, comments };
}`
      },
      {
        title: "Manipulation du DOM",
        body: `
<p>Le <strong>DOM</strong> (Document Object Model) est la représentation en arbre de la page HTML. JavaScript peut le lire et le modifier dynamiquement.</p>
<h4>Sélection d'éléments</h4>
<ul>
  <li><code>document.getElementById("id")</code></li>
  <li><code>document.querySelector(".classe")</code> : premier match CSS</li>
  <li><code>document.querySelectorAll("p")</code> : NodeList de tous les matches</li>
</ul>
<h4>Modification</h4>
<ul>
  <li><code>el.textContent = "..."</code> : texte brut (sécurisé)</li>
  <li><code>el.innerHTML = "..."</code> : HTML (attention XSS)</li>
  <li><code>el.classList.add/remove/toggle("classe")</code></li>
  <li><code>el.setAttribute("attr", "val")</code></li>
  <li><code>el.style.color = "red"</code> (style inline)</li>
</ul>
<h4>Création et insertion</h4>
<ul>
  <li><code>document.createElement("div")</code></li>
  <li><code>parent.appendChild(el)</code> / <code>parent.append(el)</code></li>
  <li><code>el.remove()</code></li>
</ul>`,
        code: `// Sélection
const btn   = document.querySelector("#submit-btn");
const items = document.querySelectorAll(".item");
const title = document.getElementById("main-title");

// Modification de texte
title.textContent = "Nouveau titre";

// Classes
btn.classList.add("active");
btn.classList.remove("disabled");
btn.classList.toggle("hidden");
btn.classList.contains("active"); // true/false

// Attributs
const input = document.querySelector("input");
input.setAttribute("placeholder", "Saisir...");
input.setAttribute("disabled", "");
input.removeAttribute("disabled");
const val = input.getAttribute("type"); // "text"

// Création d'un élément
function createCard(title, desc) {
  const card = document.createElement("article");
  card.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = desc;

  card.append(h2, p);
  return card;
}

const container = document.querySelector(".cards");
container.appendChild(createCard("Mission 1", "Structure HTML"));

// Événements
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Cliqué !");
});`
      },
      {
        title: "Modules ES6 & Classes",
        body: `
<p>Les <strong>modules ES6</strong> permettent de diviser le code en fichiers réutilisables avec <code>import</code>/<code>export</code>. Les <strong>classes</strong> apportent une syntaxe orientée objet claire (sucre syntaxique sur les prototypes).</p>
<h4>Modules</h4>
<ul>
  <li><code>export const x = ...</code> : export nommé</li>
  <li><code>export default function f() {}</code> : export par défaut (un seul par fichier)</li>
  <li><code>import { x, y } from './fichier.js'</code> : import nommé</li>
  <li><code>import f from './fichier.js'</code> : import par défaut</li>
  <li><code>import * as utils from './utils.js'</code> : tout importer</li>
</ul>
<h4>Classes</h4>
<ul>
  <li><code>constructor()</code> : appelé à <code>new</code></li>
  <li><code>static</code> : méthode de classe (pas d'instance)</li>
  <li><code>extends</code> : héritage</li>
  <li><code>super()</code> : appel du constructeur parent</li>
  <li>Champs privés : <code>#name</code> (ES2022)</li>
</ul>`,
        code: `// === utils.js ===
export const add = (a, b) => a + b;
export const PI  = 3.14159;
export default function greet(name) {
  return \`Hello \${name}!\`;
}

// === main.js ===
import greet, { add, PI } from './utils.js';
import * as utils from './utils.js';

// === Classes ===
class Animal {
  #name; // champ privé

  constructor(name, sound) {
    this.#name = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.#name} dit \${this.sound}\`;
  }

  get name() { return this.#name; }

  static create(name, sound) {
    return new Animal(name, sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
    this.tricks = [];
  }

  learn(trick) {
    this.tricks.push(trick);
    return this;
  }

  speak() {
    return super.speak() + " 🐕";
  }
}

const rex = new Dog("Rex");
rex.learn("assis").learn("couché");
console.log(rex.speak()); // "Rex dit Woof 🐕"`
      }
    ]
  },

  angular: {
    title: "Angular",
    icon: "🔺",
    color: "#dd0031",
    chapters: [
      {
        title: "Architecture & Composants",
        body: `
<p>Angular est un framework frontend complet développé par Google. Il utilise <strong>TypeScript</strong> et adopte une architecture basée sur les <strong>composants</strong>.</p>
<h4>Le décorateur @Component</h4>
<p>Un composant Angular = classe TypeScript + décorateur <code>@Component</code> qui définit :</p>
<ul>
  <li><code>selector</code> : nom de la balise HTML custom (<code>&lt;app-card&gt;</code>)</li>
  <li><code>templateUrl</code> / <code>template</code> : le HTML du composant</li>
  <li><code>styleUrls</code> / <code>styles</code> : le CSS scoped du composant</li>
</ul>
<h4>Communication entre composants</h4>
<ul>
  <li><code>@Input()</code> : reçoit des données du parent</li>
  <li><code>@Output()</code> + <code>EventEmitter</code> : envoie des événements vers le parent</li>
  <li><code>ngOnInit()</code> : lifecycle hook appelé après l'initialisation</li>
</ul>
<h4>Standalone Components (Angular 17+)</h4>
<p>Les composants peuvent être <code>standalone: true</code>, sans NgModule. Ils importent directement leurs dépendances.</p>`,
        code: `// user-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="card" [class.active]="isActive">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button (click)="onSelect()">
        Sélectionner
      </button>
    </div>
  \`,
  styles: [\`
    .card { padding: 16px; border: 1px solid #ccc; }
    .active { border-color: #dd0031; }
  \`]
})
export class UserCardComponent {
  @Input() user!: { name: string; email: string };
  @Input() isActive = false;
  @Output() selected = new EventEmitter<void>();

  onSelect() {
    this.selected.emit();
  }
}

// Utilisation dans le parent :
// <app-user-card [user]="currentUser" (selected)="handleSelect()" />`
      },
      {
        title: "Directives & Binding",
        body: `
<p>Angular enrichit le HTML avec des <strong>directives</strong> et des mécanismes de <strong>binding</strong> pour lier les données à l'interface.</p>
<h4>Property Binding</h4>
<p><code>[propriété]="expression"</code> — lie une valeur TypeScript à un attribut HTML. Ex: <code>[disabled]="isLoading"</code></p>
<h4>Event Binding</h4>
<p><code>(événement)="méthode()"</code> — écoute un événement DOM. Ex: <code>(click)="save()"</code>, <code>(input)="onInput($event)"</code></p>
<h4>Two-way Binding</h4>
<p><code>[(ngModel)]="variable"</code> — synchronise dans les deux sens (nécessite <code>FormsModule</code>).</p>
<h4>Directives structurelles</h4>
<ul>
  <li><code>*ngIf="condition"</code> / <code>@if</code> (Angular 17+) : affichage conditionnel</li>
  <li><code>*ngFor="let item of items"</code> / <code>@for</code> : boucle</li>
  <li><code>*ngSwitch</code> / <code>@switch</code> : conditions multiples</li>
</ul>`,
        code: `<!-- Template Angular -->

<!-- Interpolation -->
<h1>{{ title }}</h1>
<p>{{ user.name | uppercase }}</p>

<!-- Property binding -->
<img [src]="user.avatarUrl" [alt]="user.name" />
<button [disabled]="isLoading">Envoyer</button>
<div [class.active]="isSelected" [style.color]="textColor">...</div>

<!-- Event binding -->
<button (click)="openModal()">Ouvrir</button>
<input (input)="onSearch($event.target.value)" />
<form (ngSubmit)="onSubmit()">...</form>

<!-- Two-way binding -->
<input [(ngModel)]="searchQuery" placeholder="Rechercher..." />

<!-- Nouvelle syntaxe Angular 17+ -->
@if (user) {
  <app-user-card [user]="user" />
} @else {
  <p>Chargement...</p>
}

@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
} @empty {
  <li>Aucun élément</li>
}

<!-- Ancienne syntaxe (toujours valide) -->
<div *ngIf="isVisible">Contenu</div>
<li *ngFor="let item of items; let i = index">
  {{ i + 1 }}. {{ item.name }}
</li>`
      },
      {
        title: "Services & Injection de dépendances",
        body: `
<p>Les <strong>services</strong> centralisent la logique métier (appels API, gestion d'état, utilitaires). L'<strong>Injection de Dépendances</strong> (DI) fournit automatiquement les services aux composants.</p>
<h4>Créer un service</h4>
<p>Un service est une classe avec le décorateur <code>@Injectable({ providedIn: 'root' })</code> — cela crée un singleton accessible partout dans l'app.</p>
<h4>Injecter un service</h4>
<p>Deux syntaxes :</p>
<ul>
  <li>Constructeur : <code>constructor(private userService: UserService) {}</code></li>
  <li>inject() (Angular 14+) : <code>private userService = inject(UserService)</code></li>
</ul>
<h4>Séparation des responsabilités</h4>
<p>Le composant <strong>affiche</strong> et <strong>délègue</strong>. Le service <strong>fait le travail</strong>. Cette séparation facilite les tests et la réutilisation.</p>`,
        code: `// user.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = '/api/users';

  // State local avec BehaviorSubject
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => this.usersSubject.next(users))
    );
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }

  create(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      tap(newUser => {
        const current = this.usersSubject.getValue();
        this.usersSubject.next([...current, newUser]);
      })
    );
  }
}

// Utilisation dans un composant
@Component({ ... })
export class UsersComponent implements OnInit {
  private userService = inject(UserService);
  users: User[] = [];

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}`
      },
      {
        title: "Routing & Navigation",
        body: `
<p>Le routeur Angular gère la navigation entre vues sans rechargement de page (SPA — Single Page Application).</p>
<h4>Configuration des routes</h4>
<p>Les routes sont définies dans un tableau <code>Routes</code> associant un chemin (<code>path</code>) à un composant.</p>
<h4>Concepts clés</h4>
<ul>
  <li><code>RouterOutlet</code> : emplacement où le composant actif est rendu</li>
  <li><code>RouterLink</code> : navigation sans rechargement (<code>[routerLink]="['/path']"</code>)</li>
  <li><code>ActivatedRoute</code> : accès aux paramètres de la route actuelle</li>
  <li><code>Router</code> : navigation programmatique (<code>router.navigate(['/path'])</code>)</li>
  <li><code>Guards</code> : protège les routes (auth, rôles)</li>
  <li><code>Lazy loading</code> : charge un module à la demande</li>
</ul>`,
        code: `// app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'login',   component: LoginComponent },
  {
    path: 'users',
    canActivate: [authGuard],
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    // Lazy loading
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.adminRoutes)
  },
  { path: '**', component: NotFoundComponent }
];

// Composant avec paramètre de route
@Component({ ... })
export class UserDetailComponent implements OnInit {
  private route  = inject(ActivatedRoute);
  private router = inject(Router);
  private userService = inject(UserService);
  user?: User;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getById(id).subscribe(u => this.user = u);
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}

// Template
// <router-outlet />
// <a [routerLink]="['/users', user.id]">Voir profil</a>
// <a routerLink="/login" routerLinkActive="active">Login</a>`
      },
      {
        title: "RxJS & Observables",
        body: `
<p>RxJS est la bibliothèque de <strong>programmation réactive</strong> intégrée à Angular. Elle gère les flux de données asynchrones avec les <strong>Observables</strong>.</p>
<h4>Observable vs Promise</h4>
<ul>
  <li>Promise : une valeur unique, non annulable</li>
  <li>Observable : flux de valeurs sur le temps, annulable, combinable</li>
</ul>
<h4>Sujets (Subjects)</h4>
<ul>
  <li><code>Subject</code> : observable "manuel" auquel on peut pousser des valeurs</li>
  <li><code>BehaviorSubject(init)</code> : Subject avec valeur initiale, émet la dernière valeur aux nouveaux abonnés</li>
  <li><code>ReplaySubject(n)</code> : rejoue les n dernières valeurs</li>
</ul>
<h4>Opérateurs essentiels</h4>
<ul>
  <li><code>map</code>, <code>filter</code> : transforme/filtre</li>
  <li><code>switchMap</code> : annule la requête précédente (recherche)</li>
  <li><code>mergeMap</code> : parallèle</li>
  <li><code>debounceTime(300)</code> : attend 300ms sans nouvel événement</li>
  <li><code>distinctUntilChanged()</code> : ignore si valeur identique</li>
  <li><code>takeUntilDestroyed()</code> : désabonnement auto (Angular 16+)</li>
</ul>`,
        code: `import {
  Component, OnInit, inject, DestroyRef
} from '@angular/core';
import {
  Subject, BehaviorSubject, fromEvent
} from 'rxjs';
import {
  debounceTime, distinctUntilChanged,
  switchMap, takeUntilDestroyed
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  template: \`
    <input #searchInput type="text" placeholder="Rechercher..." />
    <ul>
      <li *ngFor="let r of results$ | async">{{ r.name }}</li>
    </ul>
  \`
})
export class SearchComponent implements OnInit {
  private http        = inject(HttpClient);
  private destroyRef  = inject(DestroyRef);

  results$ = new BehaviorSubject<any[]>([]);

  ngOnInit() {
    const input = document.querySelector('input')!;

    fromEvent<Event>(input, 'input').pipe(
      map((e: any) => e.target.value as string),
      debounceTime(300),           // attend 300ms
      distinctUntilChanged(),      // ignore doublons
      switchMap(query =>           // annule la requête précédente
        this.http.get<any[]>(\`/api/search?q=\${query}\`)
      ),
      takeUntilDestroyed(this.destroyRef) // cleanup auto
    ).subscribe(results => {
      this.results$.next(results);
    });
  }
}`
      },
      {
        title: "Reactive Forms",
        body: `
<p>Les <strong>Reactive Forms</strong> d'Angular offrent un contrôle total sur les formulaires depuis TypeScript : validation, état, valeurs, événements — le tout typé.</p>
<h4>Concepts clés</h4>
<ul>
  <li><code>FormControl</code> : un champ individuel</li>
  <li><code>FormGroup</code> : groupe de controls (formulaire)</li>
  <li><code>FormArray</code> : liste dynamique de controls</li>
  <li><code>Validators</code> : validations intégrées (required, minLength, email, pattern…)</li>
</ul>
<h4>Avantages vs Template-driven</h4>
<ul>
  <li>Logique dans le TS (testable)</li>
  <li>Validation synchrone et asynchrone</li>
  <li>Accès direct à l'état (valid, invalid, dirty, touched, errors)</li>
  <li>Binding avec <code>formControlName</code></li>
</ul>`,
        code: `import {
  Component, inject
} from '@angular/core';
import {
  FormBuilder, Validators, ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: \`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="email" type="email" />
      @if (email.invalid && email.touched) {
        <span class="error">
          @if (email.hasError('required')) { Email requis }
          @if (email.hasError('email'))    { Format invalide }
        </span>
      }

      <input formControlName="password" type="password" />

      <button [disabled]="form.invalid">Connexion</button>
    </form>
  \`
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
  });

  get email()    { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      console.log({ email, password });
    }
  }
}`
      }
    ]
  },

  node: {
    title: "Node.js",
    icon: "🟢",
    color: "#68a063",
    chapters: [
      {
        title: "Introduction à Node.js",
        body: `
<p>Node.js est un <strong>runtime JavaScript côté serveur</strong> basé sur le moteur V8 de Chrome. Il permet d'exécuter du JS hors navigateur, idéal pour les serveurs web, APIs, scripts, outils CLI.</p>
<h4>Caractéristiques clés</h4>
<ul>
  <li><strong>Event loop</strong> : mono-thread, non-bloquant, asynchrone par design</li>
  <li><strong>npm</strong> : gestionnaire de packages (le plus grand écosystème monde)</li>
  <li><strong>Modules</strong> : CommonJS (<code>require/module.exports</code>) ou ESM (<code>import/export</code>)</li>
  <li>Idéal pour : APIs REST, WebSockets, microservices, CLI tools, BFF</li>
</ul>
<h4>CommonJS vs ESM</h4>
<ul>
  <li>CommonJS : <code>const x = require('./x')</code> / <code>module.exports = x</code></li>
  <li>ESM (moderne) : <code>import x from './x.js'</code> / <code>export default x</code></li>
  <li>Dans <code>package.json</code> : <code>"type": "module"</code> active ESM par défaut</li>
</ul>`,
        code: `// package.json
{
  "name": "mon-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev":   "node --watch index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "dotenv": "^16.0.0"
  }
}

// CommonJS
const path = require('path');
const { readFileSync } = require('fs');
module.exports = { myFunction };

// ESM
import path from 'path';
import { readFile } from 'fs/promises';
export { myFunction };
export default class MyClass { ... }

// Variables globales Node.js
console.log(__dirname);   // CJS : répertoire du fichier
console.log(__filename);  // CJS : chemin complet du fichier
console.log(process.env); // variables d'environnement
console.log(process.argv); // arguments CLI`
      },
      {
        title: "Express.js — Serveur & Routes",
        body: `
<p>Express est le framework web Node.js le plus populaire. Il ajoute une couche d'abstraction sur le module HTTP natif pour créer des serveurs et APIs facilement.</p>
<h4>Concepts fondamentaux</h4>
<ul>
  <li><code>app.get/post/put/delete(path, handler)</code> : définir une route</li>
  <li><code>req</code> (Request) : contient les données entrantes (params, body, query, headers)</li>
  <li><code>res</code> (Response) : envoyer la réponse (json, send, status, redirect)</li>
  <li><code>next()</code> : passer au middleware suivant</li>
  <li><code>app.use(middleware)</code> : middleware global</li>
</ul>
<h4>Paramètres de route</h4>
<ul>
  <li><code>/users/:id</code> → <code>req.params.id</code></li>
  <li><code>/search?q=test</code> → <code>req.query.q</code></li>
  <li>Body JSON → <code>req.body</code> (nécessite <code>express.json()</code>)</li>
</ul>`,
        code: `import express from 'express';
import cors from 'cors';

const app  = express();
const PORT = process.env.PORT || 3000;

// === Middlewares globaux ===
app.use(cors());
app.use(express.json());           // parse body JSON
app.use(express.urlencoded({ extended: true })); // form data

// Middleware de log
app.use((req, _res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

// === Données temporaires (mock) ===
let users = [
  { id: 1, name: "Alice", email: "alice@x.com" },
  { id: 2, name: "Bob",   email: "bob@x.com"   },
];

// === Routes CRUD ===
// GET /api/users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// POST /api/users
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: 'name et email requis' });

  const newUser = { id: Date.now(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id
app.put('/api/users/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  users[idx] = { ...users[idx], ...req.body };
  res.json(users[idx]);
});

// DELETE /api/users/:id
app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  users  = users.filter(u => u.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(\`🚀 API en écoute sur http://localhost:\${PORT}\`);
});`
      },
      {
        title: "Middleware & Gestion d'erreurs",
        body: `
<p>Les <strong>middlewares</strong> sont des fonctions qui s'intercalent dans le cycle requête/réponse. Ils constituent l'architecture principale d'Express.</p>
<h4>Ordre des middlewares</h4>
<p>L'ordre <strong>compte</strong> : les middlewares sont exécutés dans l'ordre où ils sont déclarés. Toujours déclarer les middlewares globaux <em>avant</em> les routes.</p>
<h4>Types de middleware</h4>
<ul>
  <li><strong>Application-level</strong> : <code>app.use(fn)</code></li>
  <li><strong>Router-level</strong> : <code>router.use(fn)</code></li>
  <li><strong>Error-handling</strong> : <code>(err, req, res, next) => {}</code> — 4 paramètres</li>
  <li><strong>Built-in</strong> : <code>express.json()</code>, <code>express.static()</code></li>
  <li><strong>Third-party</strong> : cors, helmet, morgan, multer…</li>
</ul>
<h4>Router Express</h4>
<p><code>express.Router()</code> crée un mini-app pour grouper les routes par domaine.</p>`,
        code: `import express from 'express';

// === Auth Middleware ===
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Non autorisé' });

  try {
    // Vérification token (JWT, session…)
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(403).json({ error: 'Token invalide' });
  }
}

// === Router modulaire ===
const userRouter = express.Router();

userRouter.get('/',       getUsers);
userRouter.get('/:id',    getUser);
userRouter.post('/',      requireAuth, createUser);
userRouter.put('/:id',    requireAuth, updateUser);
userRouter.delete('/:id', requireAuth, deleteUser);

// Montage du router
app.use('/api/users', userRouter);

// === Gestion d'erreurs centralisée ===
// Wrapper async pour éviter try/catch partout
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get('/api/data', asyncHandler(async (req, res) => {
  const data = await fetchFromDB();
  res.json(data);
}));

// Middleware d'erreur — TOUJOURS en dernier
app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.error(err);
  res.status(status).json({
    error: err.message || 'Erreur interne',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});`
      },
      {
        title: "Variables d'environnement & dotenv",
        body: `
<p>Les <strong>variables d'environnement</strong> stockent les informations sensibles et la configuration (clés API, URLs, mots de passe DB) en dehors du code.</p>
<h4>Règles fondamentales</h4>
<ul>
  <li>Ne <strong>jamais</strong> committer les secrets dans git</li>
  <li>Toujours ajouter <code>.env</code> dans <code>.gitignore</code></li>
  <li>Fournir un <code>.env.example</code> avec les clés (sans valeurs) pour la documentation</li>
  <li>Accès via <code>process.env.NOM_VARIABLE</code></li>
</ul>
<h4>dotenv</h4>
<p>La bibliothèque <code>dotenv</code> charge un fichier <code>.env</code> dans <code>process.env</code> au démarrage.</p>
<h4>Structure recommandée</h4>
<p>Centraliser toute la config dans un fichier dédié et exporter des valeurs validées.</p>`,
        code: `# .env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=votre_secret_tres_long_et_aleatoire
API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx

# .env.example (committer ce fichier)
PORT=3000
NODE_ENV=development
DATABASE_URL=
JWT_SECRET=
API_KEY=

// config.js — centralise et valide la config
import 'dotenv/config';

function required(key) {
  const val = process.env[key];
  if (!val) throw new Error(\`Variable d'env manquante: \${key}\`);
  return val;
}

export const config = {
  port:        Number(process.env.PORT) || 3000,
  env:         process.env.NODE_ENV || 'development',
  isDev:       process.env.NODE_ENV === 'development',
  dbUrl:       required('DATABASE_URL'),
  jwtSecret:   required('JWT_SECRET'),
};

// index.js
import { config } from './config.js';
import express from 'express';

const app = express();
app.listen(config.port, () => {
  console.log(\`Mode: \${config.env}\`);
  console.log(\`Port: \${config.port}\`);
});`
      },
      {
        title: "Async/Await & Gestion des erreurs",
        body: `
<p>Node.js est conçu autour de l'<strong>I/O asynchrone non-bloquante</strong>. Toutes les opérations longues (DB, fichiers, réseau) sont asynchrones.</p>
<h4>Patterns de gestion d'erreurs</h4>
<ul>
  <li><code>try/catch</code> avec async/await</li>
  <li>Wrapper asyncHandler pour Express</li>
  <li>Classe d'erreur custom avec code HTTP</li>
</ul>
<h4>Travailler avec les fichiers (fs/promises)</h4>
<p>Le module <code>fs/promises</code> expose des versions Promise des opérations de fichier : <code>readFile</code>, <code>writeFile</code>, <code>readdir</code>, <code>mkdir</code>, <code>unlink</code>…</p>
<h4>Timeouts et retries</h4>
<p>Pattern essentiel en production : retry avec backoff exponentiel pour les requêtes réseau.</p>`,
        code: `import { readFile, writeFile, readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lire un fichier
async function readConfig() {
  try {
    const raw  = await readFile(
      path.join(__dirname, 'config.json'),
      'utf-8'
    );
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === 'ENOENT') return {}; // fichier absent → défaut
    throw err;
  }
}

// Écrire un fichier
async function saveData(data) {
  await writeFile(
    'output.json',
    JSON.stringify(data, null, 2),
    'utf-8'
  );
}

// === Classe d'erreur custom ===
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

// Retry avec backoff exponentiel
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new AppError(\`HTTP \${res.status}\`, res.status);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      const delay = 2 ** i * 500; // 500ms, 1s, 2s
      console.warn(\`Retry \${i + 1} dans \${delay}ms...\`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}`
      }
    ]
  }
};
