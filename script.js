// ─── NAVIGATION MOBILE ───────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── SAÉ DATA (Mise à jour avec le contenu de tes cours et projets) ─
const saeData = {
  sae101: {
    code: 'SAÉ 1.01',
    title: "Se sensibiliser à l'hygiène informatique et à la cybersécurité",
    sem: 'Semestre 1', duree: '12h de projet', mode: 'Individuel et Groupe',
    acs: [
      "Comprendre l'architecture et les fondements des systèmes numériques",
      "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
    contexte: "Le professionnel R&T est souvent le premier interlocuteur pour la sécurité numérique d'une entreprise. L'objectif de cette SAÉ était de comprendre les menaces communes du cyberespace et d'être capable de sensibiliser des collaborateurs aux bonnes pratiques d'hygiène informatique.",
    taches: "Dans un premier temps, j'ai suivi l'auto-formation du MOOC de l'ANSSI (SecNumAcademie) pour consolider mes bases individuelles. Ensuite, en groupe, nous avons mené un travail de recherche et d'expérimentation sur une thématique précise (gestion des mots de passe, accès SSH ou découverte de machines) que nous avons restitué à l'oral. Enfin, nous avons participé à un TP sous forme de 'Capture The Flag' (CTF).",
    traces: [
      { icon: '🏆', name: 'Open Badge ANSSI', desc: 'Preuve de réussite de la micro-certification SecNumAcademie.' },
      { icon: '📊', name: 'Support de présentation', desc: 'Diaporama utilisé pour notre restitution orale sur notre thématique de recherche.' }
    ],
    autoeval: "Cette SAÉ m'a permis de prendre réellement conscience des vulnérabilités classiques et de l'importance d'une bonne configuration (comme la force d'un mot de passe ou la cryptographie SSH). L'approche ludique du CTF m'a beaucoup motivé, même si certaines failles étaient difficiles à trouver. C'est une excellente introduction pour mon projet d'alternance et mes futures missions en administration système."
  },

  sae102: {
    code: 'SAÉ 1.02',
    title: "S'initier aux réseaux informatiques",
    sem: 'Semestre 1', duree: '6 semaines', mode: 'Binôme',
    acs: [
      "Configurer les fonctions de base du réseau local",
      "Installer un poste client, expliquer la procédure mise en place"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
    contexte: "Il s'agissait ici de comprendre et de mettre en œuvre l'architecture de base d'un réseau local d'entreprise, en allant du câblage physique jusqu'à la configuration logique des équipements.",
    taches: "Nous avons configuré des équipements actifs (switchs, routeurs) et paramétré l'adressage IP. Un point central de la SAÉ a été la modélisation de notre réseau via la réalisation de schémas physiques et logiques (format Visio), ainsi que la répartition et la priorisation des tâches au sein de notre binôme.",
    traces: [
      { icon: '🗺️', name: 'Schéma physique et logique', desc: 'Plan détaillé du réseau réalisé sous Visio.' },
      { icon: '📋', name: 'Fichier de répartition des tâches', desc: 'Tableau de suivi démontrant l\'organisation de notre binôme.' }
    ],
    autoeval: "La traduction d'un besoin théorique vers une configuration pratique sur le matériel m'a demandé de l'adaptation. J'ai compris l'importance vitale d'une documentation claire (les schémas) pour faciliter le dépannage futur. Cette rigueur me sera indispensable pour la gestion d'infrastructures plus complexes."
  },

  sae103: {
    code: 'SAÉ 1.03',
    title: "Découvrir un dispositif de transmission",
    sem: 'Semestre 1', duree: '12h de projet', mode: 'Groupe',
    acs: [
      "Mesurer et analyser les signaux",
      "Déployer des supports de transmission",
      "Communiquer avec un tiers et adapter son discours"
    ],
    comps: ['UE1.2 — Connecter les entreprises et les usagers'],
    contexte: "Ne disposant pas d'un certificateur de câble automatisé, le but de cette SAÉ était de reproduire manuellement les mesures de certification pour comprendre le comportement physique des supports de transmission (câbles en cuivre et fibre optique).",
    taches: "J'ai manipulé des câbles coaxiaux et Ethernet pour déterminer leur longueur (DTF) et calculer la NVP à l'aide d'un générateur basse fréquence (GBF) et d'un oscilloscope. En parallèle, j'ai réalisé une liaison fibre optique (FTTH) sur laquelle j'ai effectué une mesure d'atténuation globale par photométrie.",
    traces: [
      { icon: '📄', name: 'Rapport de mesure (Cuivre)', desc: 'Rapport justifiant les calculs de NVP et les mesures DTF.' },
      { icon: '📄', name: 'Rapport de mesure (Fibre)', desc: 'Rapport présentant l\'atténuation relevée par photométrie.' },
      { icon: '📝', name: 'Fiche de synthèse documentaire', desc: 'Synthèse des normes de certification autorisée pour le QCM final.' }
    ],
    autoeval: "Manipuler les ondes sur l'oscilloscope et manipuler la fibre optique demande beaucoup de minutie. Comprendre les phénomènes physiques (atténuation, réflexion) m'a permis de réaliser qu'un problème réseau n'est pas toujours logiciel, mais souvent matériel. Cela renforce ma capacité de diagnostic global."
  },

  sae104: {
    code: 'SAÉ 1.04',
    title: "Se présenter sur Internet",
    sem: 'Semestre 1', duree: '3 semaines', mode: 'Individuel',
    acs: [
      "Utiliser un système informatique et ses outils",
      "Connaître l'architecture et les technologies d'un site Web"
    ],
    comps: ['UE1.3 — Créer des outils et des applications informatiques pour les R&T'],
    contexte: "Dans le cadre de cette SAÉ, la mission consistait à concevoir de A à Z un site web multipages statique pour présenter un sujet personnel, en respectant les standards du web et l'accessibilité.",
    taches: "J'ai développé le site en HTML et CSS pur, en utilisant Flexbox/Grid pour le rendre adaptatif (Responsive Design). J'ai dû m'assurer de la conformité W3C et WCAG 2.0 (accessibilité). Le code source a été versionné sur GitHub et hébergé via GitHub Pages, le tout documenté par un fichier README détaillé.",
    traces: [
      { icon: '🌐', name: 'Lien GitHub Pages', desc: 'URL du site web hébergé et fonctionnel.' },
      { icon: '💻', name: 'Code source et README.md', desc: 'Dépôt GitHub illustrant l\'organisation de mon code et mes commits.' }
    ],
    autoeval: "Bien que mon orientation principale soit l'administration système, comprendre la structure du web m'aide à mieux appréhender la façon dont les serveurs dialoguent avec les clients. L'apprentissage du versioning avec Git (commits réguliers) est une compétence transversale que je réutiliserai tout le temps."
  },

  sae105: {
    code: 'SAÉ 1.05',
    title: "Traiter des données",
    sem: 'Semestre 1', duree: '20h en autonomie', mode: 'Binôme',
    acs: [
      "Lire, exécuter, corriger et modifier un programme",
      "Traduire un algorithme, dans un langage et pour un environnement donné",
      "Choisir les mécanismes de gestion de données adaptés"
    ],
    comps: ['UE1.3 — Créer des outils et des applications informatiques pour les R&T'],
    contexte: "Le professionnel R&T doit souvent automatiser des tâches pour exploiter des données brutes (logs, état des équipements). L'objectif était de créer un programme capable de récupérer des informations sur le web, de les traiter et de les formater en statistiques lisibles.",
    taches: "J'ai développé un script en Python utilisant la bibliothèque `requests` pour interroger l'API REST d'OpenStreetMap. J'ai ensuite écrit le code permettant de parser les données reçues (en format JSON ou XML), d'effectuer des calculs statistiques, puis d'exporter automatiquement un rapport final structuré en langage Markdown.",
    traces: [
      { icon: '🐍', name: 'Script Python', desc: 'Le code source contenant les requêtes API et la logique de traitement.' },
      { icon: '📑', name: 'Rapport Markdown', desc: 'Le document statique généré automatiquement par le script.' }
    ],
    autoeval: "Interagir avec une API REST et comprendre la différence entre JSON et XML a été une révélation technique. J'ai rencontré des difficultés avec l'extraction de certains nœuds XML profonds, mais l'utilisation des bibliothèques Python a simplifié la tâche. L'automatisation est un axe que je veux absolument développer pour mon profil."
  }
};

// ─── CHARGEMENT DU DÉTAIL ────────────────────────────────────────
function loadSAEDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  // Si on est sur une page sans ID valide, on ne fait rien
  if (!id || !saeData[id]) return;

  const d = saeData[id];
  
  // Remplissage des textes simples
  const elements = {
    'sae-code': d.code,
    'sae-title': d.title,
    'sae-sem': d.sem,
    'sae-duree': 'Durée : ' + d.duree,
    'sae-mode': d.mode,
    'sd-sem': d.sem,
    'sd-duree': d.duree,
    'sd-mode': d.mode
  };

  for (let key in elements) {
    const el = document.getElementById(key);
    if (el) el.textContent = elements[key];
  }

  // Remplissage dynamique des nouvelles sections (Contexte, Tâches, Autoévaluation)
  if (d.contexte) {
    const ctx = document.getElementById('sae-contexte');
    if (ctx) ctx.innerHTML = `<p>${d.contexte}</p>`;
  }
  if (d.taches) {
    const taches = document.getElementById('sae-taches');
    if (taches) taches.innerHTML = `<p>${d.taches}</p>`;
  }
  if (d.autoeval) {
    const autoeval = document.getElementById('sae-autoeval');
    if (autoeval) autoeval.innerHTML = `<p>${d.autoeval}</p>`;
  }

  // Remplissage des Apprentissages Critiques
  const acList = document.getElementById('sae-ac-list');
  if (acList) {
    acList.innerHTML = d.acs.map(texte => `
      <div class="ac-item">
        <div class="ac-text">${texte}</div>
      </div>
    `).join('');
  }

  // Remplissage des Traces / Preuves
  const tracesList = document.getElementById('sae-traces');
  if (tracesList && d.traces) {
    tracesList.innerHTML = d.traces.map(t => `
      <div class="trace-item">
        <div class="trace-icon">${t.icon}</div>
        <div class="trace-info">
          <div class="trace-name">${t.name}</div>
          <div class="trace-desc">${t.desc}</div>
        </div>
      </div>
    `).join('');
  }

  // Remplissage des Compétences (Sidebar)
  const compList = document.getElementById('sae-comp-list');
  if (compList) {
    compList.innerHTML = d.comps.map(c => `<div class="sidebar-item">${c}</div>`).join('');
  }

  // Modification du titre de l'onglet du navigateur
  document.title = d.code + " — " + d.title;
}

// Initialisation au chargement de la page de détail uniquement
if (document.getElementById('page-sae-detail')) {
  window.addEventListener('DOMContentLoaded', loadSAEDetail);
}
