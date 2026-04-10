// ─── NAVIGATION MOBILE ───────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── SAÉ DATA (Uniquement S1 et S2) ──────────────────────────────
const saeData = {
  sae101: {
    code: 'SAÉ 1.01',
    title: "Se sensibiliser à l'hygiène informatique",
    sem: 'Semestre 1', duree: '4 semaines', mode: 'Individuel',
    acs: [
      { code: 'AC11.02', text: "Comprendre l'architecture et les fondements des systèmes numériques, les principes du codage de l'information, des communications et de l'Internet" },
      { code: 'AC11.04', text: "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation" },
      { code: 'AC11.05', text: "Identifier les dysfonctionnements du réseau local et savoir les signaler" },
    ],
    comps: ['RT1 — Administrer les réseaux et l'Internet'],
  },
  sae102: {
    code: 'SAÉ 1.02',
    title: "S'initier aux réseaux informatiques",
    sem: 'Semestre 1', duree: '6 semaines', mode: 'Binôme',
    acs: [
      { code: 'AC11.01', text: "Maîtriser les lois fondamentales de l'électricité" },
      { code: 'AC11.03', text: "Configurer les fonctions de base du réseau local" },
      { code: 'AC11.06', text: "Installer un poste client, expliquer la procédure mise en place" },
    ],
    comps: ['RT1 — Administrer les réseaux et l'Internet'],
  },
  sae103: {
    code: 'SAÉ 1.03',
    title: "Découvrir un dispositif de transmission",
    sem: 'Semestre 1', duree: '4 semaines', mode: 'Groupe',
    acs: [
      { code: 'AC12.01', text: "Mesurer et analyser les signaux" },
      { code: 'AC12.03', text: "Déployer des supports de transmission" },
      { code: 'AC12.05', text: "Communiquer avec un tiers et adapter son discours" },
    ],
    comps: ['RT2 — Connecter les entreprises et les usagers'],
  },
  sae104: {
    code: 'SAÉ 1.04',
    title: "Se présenter sur Internet",
    sem: 'Semestre 1', duree: '3 semaines', mode: 'Individuel',
    acs: [
      { code: 'AC13.01', text: "Utiliser un système informatique et ses outils" },
      { code: 'AC13.04', text: "Connaître l'architecture et les technologies d'un site Web" },
    ],
    comps: ['RT3 — Créer des outils et des applications informatiques pour les R&T'],
  },
  sae105: {
    code: 'SAÉ 1.05',
    title: "Traiter des données",
    sem: 'Semestre 1', duree: '4 semaines', mode: 'Binôme',
    acs: [
      { code: 'AC13.02', text: "Lire, exécuter, corriger et modifier un programme" },
      { code: 'AC13.03', text: "Traduire un algorithme, dans un langage et pour un environnement donné" },
      { code: 'AC13.05', text: "Choisir les mécanismes de gestion de données adaptés au développement de l'outil" },
      { code: 'AC13.06', text: "S'intégrer dans un environnement propice au développement et au travail collaboratif" },
    ],
    comps: ['RT3 — Créer des outils et des applications informatiques pour les R&T'],
  },
  sae201: {
    code: 'SAÉ 2.01',
    title: "Construire un réseau informatique pour une PME",
    sem: 'Semestre 2', duree: '8 semaines', mode: 'Groupe',
    acs: [
      { code: 'AC11.02', text: "Comprendre l'architecture et les fondements des systèmes numériques" },
      { code: 'AC11.03', text: "Configurer les fonctions de base du réseau local" },
      { code: 'AC11.04', text: "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation" },
      { code: 'AC11.05', text: "Identifier les dysfonctionnements du réseau local et savoir les signaler" },
      { code: 'AC11.06', text: "Installer un poste client, expliquer la procédure mise en place" },
    ],
    comps: ['RT1 — Administrer les réseaux et l'Internet'],
  },
  sae202: {
    code: 'SAÉ 2.02',
    title: "Mesurer et caractériser un signal ou un système",
    sem: 'Semestre 2', duree: '6 semaines', mode: 'Groupe',
    acs: [
      { code: 'AC12.01', text: "Mesurer et analyser les signaux" },
      { code: 'AC12.02', text: "Caractériser des systèmes de transmission élémentaires" },
      { code: 'AC12.05', text: "Communiquer avec un tiers et adapter son discours" },
    ],
    comps: ['RT2 — Connecter les entreprises et les usagers'],
  },
  sae203: {
    code: 'SAÉ 2.03',
    title: "Mettre en place une solution informatique pour une PME",
    sem: 'Semestre 2', duree: '8 semaines', mode: 'Groupe',
    acs: [
      { code: 'AC13.01', text: "Utiliser un système informatique et ses outils" },
      { code: 'AC13.02', text: "Lire, exécuter, corriger et modifier un programme" },
      { code: 'AC13.03', text: "Traduire un algorithme, dans un langage et pour un environnement donné" },
      { code: 'AC13.04', text: "Connaître l'architecture et les technologies d'un site Web" },
      { code: 'AC13.05', text: "Choisir les mécanismes de gestion de données adaptés au développement de l'outil" },
      { code: 'AC13.06', text: "S'intégrer dans un environnement propice au développement et au travail collaboratif" },
    ],
    comps: ['RT3 — Créer des outils et des applications pour les R&T'],
  }
};

// ─── SAÉ DETAIL (AVEC DÉFILEMENT FLUIDE) ──────────────────────────────────
function showSAE(id) {
  const d = saeData[id];
  if (!d) return;

  // Remplissage des données
  document.getElementById('sae-code').textContent = d.code;
  document.getElementById('sae-title').textContent = d.title;
  document.getElementById('sae-sem').textContent = d.sem;
  document.getElementById('sae-duree').textContent = 'Durée : ' + d.duree;
  document.getElementById('sae-mode').textContent = d.mode;
  document.getElementById('sd-sem').textContent = d.sem;
  document.getElementById('sd-duree').textContent = d.duree;
  document.getElementById('sd-mode').textContent = d.mode;

  // Liste des AC
  const acList = document.getElementById('sae-ac-list');
  acList.innerHTML = d.acs.map(ac => `
    <div class="ac-item">
      <div class="ac-code">${ac.code}</div>
      <div class="ac-text">${ac.text}</div>
    </div>
  `).join('');

  // Sidebar Compétences / UE
  document.getElementById('sae-comp-list').innerHTML = d.comps.map(c =>
    `<div class="sidebar-item">${c}</div>`
  ).join('');

  // 1. On affiche la section détaillée (sans cacher la liste)
  const detailSection = document.getElementById('sae-detail');
  const divider = document.getElementById('sae-divider');
  
  detailSection.style.display = 'block';
  divider.style.display = 'block';

  // 2. On fait défiler la page doucement vers le détail
  // Le setTimeout permet au navigateur de calculer la hauteur avant de scroller
  setTimeout(() => {
    detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function hideSAE() {
  const detailSection = document.getElementById('sae-detail');
  const divider = document.getElementById('sae-divider');

  // 1. On remonte en haut de la page doucement
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 2. On cache la section après avoir laissé le temps au scroll de se faire (environ 400ms)
  setTimeout(() => {
    detailSection.style.display = 'none';
    divider.style.display = 'none';
  }, 400);
}
