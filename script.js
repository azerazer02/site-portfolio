// ─── NAVIGATION MOBILE ───────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── SAÉ DATA ────────────────────────────────────────────────────
const saeData = {
  sae101: {
    code: 'SAÉ 1.01',
    title: "Se sensibiliser à l'hygiène informatique",
    sem: 'Semestre 1', duree: '4 semaines', mode: 'Individuel',
    acs: [
      "Comprendre l'architecture et les fondements des systèmes numériques",
      "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation",
      "Identifier les dysfonctionnements du réseau local et savoir les signaler"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
  },
  sae102: {
    code: 'SAÉ 1.02',
    title: "S'initier aux réseaux informatiques",
    sem: 'Semestre 1', duree: '6 semaines', mode: 'Binôme',
    acs: [
      "Maîtriser les lois fondamentales de l'électricité",
      "Configurer les fonctions de base du réseau local",
      "Installer un poste client, expliquer la procédure mise en place"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
  },
  sae103: {
    code: 'SAÉ 1.03',
    title: "Découvrir un dispositif de transmission",
    sem: 'Semestre 1', duree: '4 semaines', mode: 'Groupe',
    acs: [
      "Mesurer et analyser les signaux",
      "Déployer des supports de transmission",
      "Communiquer avec un tiers et adapter son discours"
    ],
    comps: ['UE1.2 — Connecter les entreprises et les usagers'],
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
  },
  sae105: {
    code: 'SAÉ 1.05',
    title: "Traiter des données",
    sem: 'Semestre 1', duree: '4 semaines', mode: 'Binôme',
    acs: [
      "Lire, exécuter, corriger et modifier un programme",
      "Traduire un algorithme, dans un langage et pour un environnement donné",
      "Choisir les mécanismes de gestion de données adaptés au développement de l'outil"
    ],
    comps: ['UE1.3 — Créer des outils et des applications informatiques pour les R&T'],
  },
  sae201: {
    code: 'SAÉ 2.??',
    title: "???",
    sem: 'Semestre 2', duree: '?? semaines', mode: '??',
    acs: [
      "???"
    ],
    comps: ['UE1.1 — Administrer les réseaux et l\'Internet'],
  },
  sae202: {
    code: 'SAÉ 2.??',
    title: "???",
    sem: 'Semestre 2', duree: '?? semaines', mode: '??',
    acs: [
      "???"
    ],
    comps: ['UE1.2 — Connecter les entreprises et les usagers'],
  },
  sae203: {
    code: 'SAÉ 2.??',
    title: "???",
    sem: 'Semestre 2', duree: '?? semaines', mode: '??',
    acs: [
      "???"
    ],
    comps: ['UE1.3 — Créer des outils et des applications pour les R&T'],
  }
};

// ─── CHARGEMENT DU DÉTAIL ────────────────────────────────────────
function loadSAEDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id || !saeData[id]) return;

  const d = saeData[id];
  
  // Remplissage texte
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

  // Apprentissages Critiques
  const acList = document.getElementById('sae-ac-list');
  if (acList) {
    acList.innerHTML = d.acs.map(texte => `
      <div class="ac-item">
        <div class="ac-text">${texte}</div>
      </div>
    `).join('');
  }

  // Compétences (Sidebar)
  const compList = document.getElementById('sae-comp-list');
  if (compList) {
    compList.innerHTML = d.comps.map(c => `<div class="sidebar-item">${c}</div>`).join('');
  }

  document.title = d.code + " — " + d.title;
}

// Initialisation au chargement de la page de détail uniquement
if (document.getElementById('page-sae-detail')) {
  window.addEventListener('DOMContentLoaded', loadSAEDetail);
}
