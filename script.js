// ─── NAVIGATION MOBILE ───────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── SAÉ DATA ────────────────────────────────────────────────────
const saeData = {
  sae101: {
    code: 'SAÉ 1.01',
    title: "Se sensibiliser à l'hygiène informatique et à la cybersécurité",
    sem: 'Semestre 1', duree: '12h de projet', mode: 'Individuel et Groupe',
    niveauDefaut: 3,
    acs: [
      "Comprendre l'architecture et les fondements des systèmes numériques",
      "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
    contexte: "Le professionnel R&T est l'un des premiers interlocuteurs des nouveaux collaborateurs arrivant au sein d'une entreprise concernant les risques de leur environnement numérique. L'objectif de cette SAÉ était d'appréhender les menaces communes et d'apprendre à vulgariser les remédiations clés auprès d'utilisateurs non spécialistes.",
    taches: "J'ai suivi une auto-formation individuelle sur la plateforme de l'ANSSI pour préparer la certification SecNumAcadémie. En parallèle, nous avons mené un travail d'expérimentation technique en groupe sur un lot dédié (mécanismes de force brute de mots de passe sur Debian, durcissement d'accès SSH par clés privées/publiques, ou cartographie et scan de ports réseau). Le projet s'est conclu par une restitution orale sur diaporamas et un TP technique d'application sous forme de Capture The Flag (CTF).",
    traces: [
      { icon: '🏆', name: 'Micro-certification ANSSI — SecNumAcadémie', desc: "Badge officiel obtenu après validation du parcours de formation à plus de 75 %. (Le badge ne peut malheureusement plus être récupéré, la plateforme MOOC n'étant plus accessible.)" },
    ],
    autoeval: "Cette situation m'a permis d'acquérir de bons réflexes d'administration système sécurisée, notamment sur la gestion rigoureuse des accès privilèges et l'analyse de vulnérabilités applicatives. Le travail collaboratif et la mise en situation professionnelle du CTF ont développé ma réactivité face aux incidents d'infrastructure.",
    difficultes: [
      { probleme: "Lors du durcissement SSH par clés, le risque était de se verrouiller hors du serveur Debian en désactivant trop tôt l'authentification par mot de passe.", solution: "Nous avons d'abord généré et copié la clé publique, vérifié qu'une connexion par clé fonctionnait sur une seconde session, puis seulement ensuite désactivé l'authentification par mot de passe dans sshd_config." },
      { probleme: "Sous la pression du CTF, identifier la bonne piste parmi les services exposés faisait perdre du temps.", solution: "Nous avons adopté une démarche méthodique de cartographie (scan de ports systématique avant toute exploitation) pour prioriser les cibles plutôt que d'avancer au hasard." }
    ]
  },
  sae102: {
    code: 'SAÉ 1.02',
    title: "S'initier aux réseaux informatiques",
    sem: 'Semestre 1', duree: '6 semaines', mode: 'Binôme',
    niveauDefaut: 2,
    acs: [
      "Configurer les fonctions de base du réseau local",
      "Installer un poste client, expliquer la procédure mise en place"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
    contexte: "L'objectif était de concevoir, documenter et déployer l'architecture réseau fonctionnelle d'une infrastructure locale simulée, en partant du câblage physique jusqu'à l'adressage logique des hôtes.",
    taches: "Nous avons procédé à la configuration logicielle d'équipements actifs et de postes clients. Nous avons planifié nos livrables (planification et répartition via Trello) et produit des schémas d'architecture rigoureux.",
    traces: [
      { icon: '🗺️', name: 'Schéma physique et logique du réseau', desc: 'Plan d\'architecture complet représentant le câblage physique des équipements et l\'organisation logique de l\'adressage (sous-réseaux et interconnexions).', link: 'sch%C3%A9ma_logique.jpg' },
      { icon: '📋', name: 'Configuration complète des équipements', desc: 'Relevé détaillé de toutes les configurations déployées (VLAN, plan d\'adressage IP, routage) pour l\'infrastructure Fibre&Company.', link: 'SAE12_config_complete.txt' }
    ],
    autoeval: "La formalisation de schémas techniques normalisés m'a appris l'importance de la rigueur documentaire en entreprise pour optimiser les futures interventions de maintenance ou de supervision réseau.",
    difficultes: [
      { probleme: "Au départ, les machines de VLAN différents ne communiquaient pas entre elles malgré la création des VLAN.", solution: "Le routage inter-VLAN n'était pas actif : il a fallu activer 'ip routing' sur le switch L3 (SWR-1) et configurer une interface virtuelle (SVI) avec passerelle pour chaque VLAN." },
      { probleme: "L'agrégation de liens (EtherChannel) ne montait pas entre SWR-1 et les switchs d'accès.", solution: "Les modes LACP étaient incohérents de part et d'autre. Nous avons mis SWR-1 en 'active' et les switchs opposés en 'passive', et aligné l'encapsulation trunk (dot1q) ainsi que le VLAN natif (696) des deux côtés." },
      { probleme: "Les postes clients ne récupéraient pas d'adresse via DHCP sur certains VLAN.", solution: "Nous avons vérifié les plages exclues (ip dhcp excluded-address) et confirmé via 'show ip dhcp binding' que les pools correspondaient bien au bon sous-réseau et à la bonne passerelle." }
    ]
  },
  sae103: {
    code: 'SAÉ 1.03',
    title: "Découvrir un dispositif de transmission",
    sem: 'Semestre 1', duree: '12h de projet', mode: 'Groupe',
    niveauDefaut: 3,
    acs: [
      "Mesurer et analyser les signaux",
      "Déployer des supports de transmission",
      "Communiquer avec un tiers et adapter son discours"
    ],
    comps: ['UE1.2 — Connecter les entreprises et les usagers'],
    contexte: "Cette SAÉ ciblait l'étude pratique et expérimentale des supports physiques de transmission de première année : les câbles en cuivre (coaxiaux et paires torsadées) et la fibre optique. Le but était de comprendre et reproduire manuellement les analyses effectuées de manière automatique par un certificateur industriel.",
    taches: "Pour le pôle cuivre, j'ai manipulé des câbles pour relever le temps de propagation d'une impulsion à l'aide d'un GBF et d'un oscilloscope afin de calculer la NVP et localiser la distance à un défaut (Distance to Fault). Pour le pôle optique, j'ai réalisé le câblage complet d'une liaison de type FTTH et procédé à une qualification de son atténuation globale par photométrie.",
    traces: [
      { icon: '📄', name: 'Compte rendu de mesure — Cuivre', desc: 'Rapport technique détaillant la mesure du temps de propagation à l\'oscilloscope, le calcul de la NVP et la localisation d\'un défaut (DTF) sur câble coaxial RG58 et paire torsadée Ethernet.', link: 'Compte_rendu_cuivre.pdf' },
      { icon: '📄', name: 'Compte rendu de mesure — Fibre optique', desc: 'Bilan de puissance et relevé d\'affaiblissement d\'une liaison FTTH par photométrie — atténuation globale mesurée de 4,92 dB à 1550 nm.', link: 'compte_rendu_fibre_optique.pdf' }
    ],
    autoeval: "Faire face aux contraintes réelles du signal physique m'a permis de lier les théories mathématiques à la réalité du terrain. Travailler avec minutie sur la fibre optique m'a sensibilisé aux problématiques concrètes d'atténuation que l'on rencontre en raccordement client.",
    difficultes: [
      { probleme: "Les deux méthodes de mesure du câble coaxial donnaient des résultats différents : 3,02 m au DTF contre environ 3,56 m à l'oscilloscope.", solution: "Nous avons identifié les sources d'erreur — difficulté à placer précisément les curseurs au début de la montée du signal et longueur des câbles BNC de raccordement qui s'ajoute à la mesure — et retenu le DTF, calibré au port de sortie, comme méthode de référence." },
      { probleme: "La NVP du câble Ethernet inconnu n'était pas connue à l'avance, faussant la mesure de longueur.", solution: "Nous avons d'abord déterminé la NVP (0,61) à l'aide d'un câble étalon selon la méthode vue en TD, avant de l'appliquer pour mesurer le câble attribué." },
      { probleme: "Sur la paire torsadée, le signal était fortement atténué (-33,61 dB) et la trace bruitée, rendant la lecture délicate.", solution: "Nous avons relié ce comportement à l'impédance des paires torsadées non blindées et soigné le réglage de l'appareil pour isoler le pic de réflexion utile." }
    ]
  },
  sae104: {
    code: 'SAÉ 1.04',
    title: "Se présenter sur Internet",
    sem: 'Semestre 1', duree: '3 semaines', mode: 'Individuel',
    niveauDefaut: 4,
    acs: [
      "Utiliser un système informatique et ses outils",
      "Connaître l'architecture et les technologies d'un site Web"
    ],
    comps: ['UE1.3 — Créer des outils et des applications informatiques pour les R&T'],
    contexte: "La consigne imposait la création d'un site web multipages complet, responsive et accessible, déployé pour présenter notre profil professionnel et nos travaux de manière propre.",
    taches: "Développement intégral de la structure en HTML5 et de l'habillage en CSS3 en exploitant les grilles CSS Grid et Flexbox pour s'assurer de l'adaptation mobile. Validation du code aux normes W3C et WCAG 2.0 AA, archivage régulier par commits porteurs de sens sur Git et hébergement via GitHub Pages.",
    traces: [
      { icon: '🌐', name: 'Site web déployé — Se présenter sur Internet', desc: 'Site multipages responsive déployé via GitHub Pages, validé W3C et WCAG 2.0 AA.', link: 'https://azerazer02.github.io/site-sa--14-v2/' }
    ],
    autoeval: "Bien que mon profil s'oriente vers les infrastructures système et réseaux, maîtriser la publication web et l'outil de gestion de version Git m'apporte une double compétence indispensable pour collaborer efficacement au sein d'une équipe technique.",
    difficultes: [
      { probleme: "En affichage mobile, le menu de navigation disparaissait sur certaines pages, rendant le site difficile à parcourir.", solution: "J'ai ajouté un bouton « burger » et la fonction de bascule associée, en m'assurant que le script de navigation était bien chargé sur chaque page." },
      { probleme: "Le code ne passait pas du premier coup la validation W3C et les critères d'accessibilité WCAG 2.0 AA.", solution: "J'ai corrigé itérativement les erreurs remontées par le validateur (balises, attributs alt, contrastes) jusqu'à conformité complète." },
      { probleme: "Une fois en ligne sur GitHub Pages, certains liens vers des fichiers ne fonctionnaient pas alors qu'ils marchaient en local.", solution: "J'ai compris que GitHub Pages est sensible à la casse et aux caractères accentués ; j'ai aligné exactement les noms de fichiers et encodé les caractères spéciaux dans les liens." }
    ]
  },
  sae105: {
    code: 'SAÉ 1.05',
    title: "Traiter des données",
    sem: 'Semestre 1', duree: '20h en autonomie', mode: 'Binôme',
    niveauDefaut: 3,
    acs: [
      "Lire, exécuter, corriger et modifier un programme",
      "Traduire un algorithme, dans un langage et pour un environnement donné",
      "Choisir les mécanismes de gestion de données adaptés au développement de l'outil"
    ],
    comps: ['UE1.3 — Créer des outils et des applications informatiques pour les R&T'],
    contexte: "Les techniciens R&T doivent régulièrement centraliser des informations brutes (provenant d'équipements ou de serveurs) afin de les trier et automatiser leur mise en forme. L'objectif était de développer un outil capable d'interroger des services distants et de générer un bilan synthétique exploitable.",
    taches: "Conception et implémentation d'un script d'automatisation en langage Python. Nous avons configuré la bibliothèque `requests` pour effectuer des appels HTTP distants et récupérer des données géographiques brutes depuis l'API REST d'OpenStreetMap. Nous avons structuré le traitement des formats sérialisés JSON et XML, calculé des statistiques et automatisé l'export final des résultats dans un fichier structuré en Markdown.",
    traces: [
      { icon: '🐍', name: 'Script principal — Requêtes Overpass', desc: 'Code source Python interrogeant l\'API Overpass d\'OpenStreetMap pour collecter et compter des données géographiques (équipements urbains de la ville de Caen).', link: 'SAE105/info_locales.py' },
      { icon: '🐍', name: 'Script — Fiche descriptive d\'un nœud OSM', desc: 'Script récupérant les attributs d\'un nœud précis via l\'API REST d\'OpenStreetMap et générant automatiquement une fiche structurée en Markdown.', link: 'SAE105/fiche_osm.py' },
      { icon: '📊', name: 'Bilan généré — Infos locales Caen', desc: 'Fichier de sortie HTML produit automatiquement par le script à partir des données brutes récupérées et traitées.', link: 'SAE105/InfoLocalesCaen.html' }
    ],
    autoeval: "Manipuler des structures de données complexes (tableaux et structures imbriquées JSON/XML) a été un exercice exigeant. Surmonter les erreurs de requêtes HTTP m'a appris à analyser précisément les codes de retour serveurs (comme les erreurs 400 ou 404), une compétence clé pour le développement de scripts d'infrastructure.",
    difficultes: [
      { probleme: "Extraire une valeur précise (la population) dans la réponse JSON de l'API était source d'erreurs à cause de l'imbrication profonde des données.", solution: "Nous avons isolé le chemin exact dans la structure (elements → tags → population) et converti proprement la valeur en entier pour pouvoir l'exploiter dans les calculs." },
      { probleme: "Certaines poubelles ne possédaient pas l'attribut 'material', ce qui faisait planter la génération du rapport.", solution: "Nous avons utilisé la méthode .get() avec une valeur par défaut (« Matière non trouvée ») pour gérer proprement les attributs manquants sans interrompre le script." },
      { probleme: "Une ville sans donnée renvoyait une division par zéro lors du calcul du ratio habitants/poubelle.", solution: "Nous avons ajouté un test en amont : si aucune poubelle n'est trouvée, le script renvoie un message explicite au lieu de tenter le calcul." }
    ]
  }
};

// ─── SYSTÈME DE NIVEAU ESTIMÉ ────────────────────────────────────
const NIVEAU_LABELS = ['', 'Débutant', 'En progression', 'Confirmé', 'Expert'];
const NIVEAU_STORAGE_KEY = 'portfolio_niveaux';

function getNiveaux() {
  try { return JSON.parse(localStorage.getItem(NIVEAU_STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveNiveau(id, val) {
  const niveaux = getNiveaux();
  niveaux[id] = val;
  localStorage.setItem(NIVEAU_STORAGE_KEY, JSON.stringify(niveaux));
}

function renderNiveau(id, niveauDefaut) {
  const container = document.getElementById('sae-niveau');
  if (!container) return;

  const niveaux = getNiveaux();
  const current = niveaux[id] !== undefined ? niveaux[id] : niveauDefaut;

  function build(val) {
    container.innerHTML = '';
    for (let i = 1; i <= 4; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i <= val ? ' filled' : ' empty');
      dot.title = NIVEAU_LABELS[i];
      dot.style.cursor = 'pointer';
      dot.style.transition = 'transform 0.15s ease, background 0.2s ease';
      dot.addEventListener('mouseenter', () => { dot.style.transform = 'scale(1.35)'; });
      dot.addEventListener('mouseleave', () => { dot.style.transform = 'scale(1)'; });
      dot.addEventListener('click', () => {
        // Cliquer sur le dot déjà seul actif (niveau 1) remet à 1, sinon on change
        const next = (val === i && i === 1) ? 1 : i;
        saveNiveau(id, next);
        build(next);
        const label = document.querySelector('.niveau-label');
        if (label) label.textContent = NIVEAU_LABELS[next];
      });
      container.appendChild(dot);
    }
    const label = document.querySelector('.niveau-label');
    if (label) label.textContent = NIVEAU_LABELS[val];
  }

  build(current);
}

// ─── CHARGEMENT DU DÉTAIL DYNAMIQUE ──────────────────────────────
function loadSAEDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  // Sécurité si aucun identifiant correspondant n'est trouvé
  if (!id || !saeData[id]) return;

  const d = saeData[id];
  
  // Remplissage des textes d'entête
  const elements = {
    'sae-code': d.code,
    'sae-title': d.title,
    'sae-sem': d.sem,
    'sae-duree': d.duree,
    'sae-mode': d.mode
  };

  for (let key in elements) {
    const el = document.getElementById(key);
    if (el) el.textContent = elements[key];
  }

  // Remplissage des blocs éditoriaux principaux
  if (document.getElementById('sae-contexte')) {
    document.getElementById('sae-contexte').innerHTML = `<p>${d.contexte}</p>`;
  }
  if (document.getElementById('sae-taches')) {
    document.getElementById('sae-taches').innerHTML = `<p>${d.taches}</p>`;
  }
  if (document.getElementById('sae-autoeval')) {
    document.getElementById('sae-autoeval').innerHTML = `<p>${d.autoeval}</p>`;
  }

  // Remplissage de la liste des Apprentissages Critiques (AC)
  const acList = document.getElementById('sae-ac-list');
  if (acList) {
    acList.innerHTML = d.acs.map(texte => `
      <div class="ac-item">
        <div class="ac-text">${texte}</div>
      </div>
    `).join('');
  }

  // Remplissage de la liste des Preuves & Traces
  const tracesList = document.getElementById('sae-traces');
  if (tracesList && d.traces) {
    tracesList.innerHTML = d.traces.map(t => `
      <div class="trace-item">
        <div class="trace-icon">${t.icon}</div>
        <div class="trace-info">
          <div class="trace-name">${t.name}</div>
          <div class="trace-desc">${t.desc}</div>
          ${t.link ? `<a href="${t.link}" target="_blank" rel="noopener" class="trace-link">Ouvrir le document →</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Remplissage des Difficultés rencontrées & solutions
  const diffList = document.getElementById('sae-difficultes');
  const diffSection = document.getElementById('sae-difficultes-section');
  if (diffList && d.difficultes && d.difficultes.length) {
    diffList.innerHTML = d.difficultes.map(item => `
      <div class="diff-item">
        <div class="diff-probleme"><span class="diff-tag diff-tag-pb">Difficulté</span>${item.probleme}</div>
        <div class="diff-solution"><span class="diff-tag diff-tag-sol">Solution</span>${item.solution}</div>
      </div>
    `).join('');
  } else if (diffSection) {
    diffSection.style.display = 'none';
  }

  // Remplissage des Compétences Associées (Sidebar)
  const compList = document.getElementById('sae-comp-list');
  if (compList) {
    compList.innerHTML = d.comps.map(c => `<div class="sidebar-item">${c}</div>`).join('');
  }

  // Rendu interactif du niveau estimé
  renderNiveau(id, d.niveauDefaut || 3);

  // Changement du titre de l'onglet du navigateur
  document.title = d.code + " — " + d.title;
}

// Déclenchement sécurisé dès que le DOM est complètement chargé et construit
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('page-sae-detail')) {
    loadSAEDetail();
  }
});
