import { asset } from "../utils/asset";

const dev = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const labels = {
  title: "Développeuse Fullstack & Automatisation IA",
  about: "À propos",
  skills: "Compétences",
  experience: "Expériences",
  projects: "Réalisations",
  certifications: "Certifications",
  education: "Formation",
  download: "Mon CV",
  contact: "Contacts",
};

export const aboutText = `Très passionnée par la création d’applications web, 
je suis développeuse fullstack & automatisation IA. 
Avec 5 ans d’expérience en développement front-end et fullstack, je conçois des applications 
complètes. J’automatise aussi des tâches répétitives pour améliorer 
la productivité en entreprise. 
J’accorde une grande importance au travail en équipe, 
aussi bien avec les designers qu’avec les autres développeurs 
et je collabore étroitement avec les parties prenantes du projet. 
Dotée d'une grande capacité d'adaptabilité, curieuse, rigoureuse 
et très motivée, j’aime explorer de nouvelles technologies et évoluer 
dans des environnements où l’innovation, la collaboration 
et le partage de connaissances sont valorisés.`;

export const experiences = [
  {
    role: "Développeuse fullstack & Automatisation IA(Stage)",
    period: "Mai 2026 à octobre 2026",
    company: "SANERGIE SAS – Régny (France)",
    featured: true,
    items: [
      "AnalyzFac : extraction de données de factures, export vers un template Excel et génération de rapports Word (React/Vite, Node.js/Express, PHP)",
      "Scraping EEX : collecte des données énergétiques via l’API EEX et alimentation automatique d’un template Excel (React, Node/Express, PHP/PHPSpreadsheet, Python, MySQL)",
      "Automatisation n8n : orchestration et planification du workflow de scraping pour fiabiliser la collecte de données",
      "CoVoiturer : application de covoiturage avec cartographie et géocodage via l’API Adresse du gouvernement (Node/Express, Leaflet/OpenStreetMap)",
      "Migration ChatGPT vers Copilot : projet de réduction de coûts sur les licences Microsoft existantes, avec présentation à la direction",
    ],
  },
  {
    role: "Développeuse front-end / Technicienne informatique",
    period: "Janvier 2022 à août 2025",
    company: "Multi Soft Sarl – Cotonou (Bénin)",
    items: [
      "Réalisation d’interfaces web responsives de Wsite avec HTML5, CSS3, JavaScript, Bootstrap 3",
      "Intégration de maquettes et collaboration avec l’équipe back-end",
      "Assistance technique à distance et maintenance des MECeF avec support aux fournisseurs",
    ],
  },
  {
    role: "Hiteuse",
    period: "Mai 2021 à septembre 2023",
    company: "ISAHIT SAS – St-Mandé (France)",
    items: [
      "Annotation de données pour l’intelligence artificielle (textes, images, vidéos) et gestion du back-office",
      "Recherches stratégiques sur LinkedIn pour enrichissement et catégorisation de données",
    ],
  },
  {
    role: "Consultante en développement web",
    period: "Septembre 2021 à décembre 2021",
    company: "Multi Soft Sarl – Cotonou (Bénin)",
    items: [
      "Développement d’interfaces web responsives de XXmaTECH avec HTML5, CSS3, JavaScript et Bootstrap 3",
      "Intégration de maquettes, participation aux revues de code",
    ],
  },
  {
    role: "Stage professionnel",
    period: "Juillet 2020 à juillet 2021",
    company: "Multi Soft Sarl – Cotonou (Bénin)",
    items: [
      "Création d’interfaces pour BizEduSante avec HTML5, CSS3, JavaScript",
      "Participation à la conception de la base de données sous PhpMyAdmin",
      "Gestion du parc informatique : installation, configuration et mise à jour des logiciels",
    ],
  },
];

export const education = [
  {
    title: "Bachelor 3 Informatique & Devops",
    school: "IPSSI – Grande École d’Informatique (France)",
    period: "Depuis 2025",
  },
  {
    title: "Licence Système Informatique et Logiciel",
    school: "ESCAE – École d’Ingénierie Informatique (Bénin)",
    period: "2016 – 2019",
  },
];

export const skillGroups = [
  {
    title: "Front-end",
    items: [
      { name: "HTML5", icon: dev("html5") },
      { name: "CSS3", icon: dev("css3") },
      { name: "JavaScript", icon: dev("javascript") },
      { name: "React", icon: dev("react") },
      { name: "Vue.js", icon: dev("vuejs") },
      { name: "Bootstrap", icon: dev("bootstrap") },
      { name: "Tailwind", icon: dev("tailwindcss") },
      { name: "Responsive Web", icon: asset("images/responsive-web.svg") },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: dev("nodejs") },
      { name: "Express", icon: dev("express") },
      { name: "Python", icon: dev("python") },
      { name: "PHP", icon: dev("php") },
      { name: "Symfony", icon: dev("symfony") },
      { name: "Laravel", icon: dev("laravel") },
      { name: "MySQL", icon: dev("mysql") },
      { name: "GitHub", icon: dev("github") },
    ],
  },
];

export const automationTools = [
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
  { name: "Notion", icon: dev("notion") },
];

export const certifications = [
  { title: "L'essentiel de React.js", issuer: "Linkedin Learning" },
  { title: "JavaScript Essentials 1", issuer: "JS INSTITUTE" },
  { title: "L'essentiel de JavaScript", issuer: "Linkedin Learning" },
  { title: "L'essentiel de Vue.js", issuer: "Linkedin Learning" },
];

export const projects = [
  {
    name: "Portfolio",
    img: asset("images/portfo.png"),
    link: "https://mafifame.github.io/Portfolio/",
    description:
      "Un aperçu clair et créatif de mes projets réalisés, reflétant mon savoir-faire et mon univers.",
    tech: "Reactjs, HTML, CSS",
  },
  {
    name: "BizEduSante",
    img: asset("images/bes.png"),
    link: "https://mafifame.github.io/bizedusante.com/",
    description:
      "Interfaces créées pour un client du secteur de la santé dans le but d’améliorer ses services.",
    tech: "HTML, CSS, JavaScript, MySQL",
  },
  {
    name: "XXmaTECH",
    img: asset("images/xxma.png"),
    link: "https://mafifame.github.io/xxmatech.com/",
    description:
      "Site web développé pour une entreprise en collaboration avec la Direction générale des impôts du Niger, puis transformé en template.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
  },
  {
    name: "Wsite",
    img: asset("images/wsite.png"),
    link: "https://mafifame.github.io/wsite.com/",
    description:
      "Création d’un site web pour une entreprise du secteur de la restauration.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
  },
  {
    name: "AnalyzFac",
    img: asset("images/analyz.jpeg"),
    context: "Stage Sanergie",
    description:
      "Extraction de données de factures, export vers un template Excel et génération de rapports Word.",
    tech: "React/Vite, Node.js/Express, PHP",
  },
  {
    name: "Scraping EEX",
    img: asset("images/scrap.jpeg"),
    context: "Stage Sanergie",
    description:
      "Collecte des données énergétiques via l’API EEX et alimentation automatique d’un template Excel.",
    tech: "React, Node/Express, PHP/PHPSpreadsheet, Python, MySQL",
  },
  {
    name: "Automatisation n8n",
    img: asset("images/n8n_Work.jpeg"),
    context: "Stage Sanergie",
    description:
      "Orchestration et planification du workflow de scraping pour fiabiliser la collecte de données.",
    tech: "n8n",
  },
  {
    name: "CoVoiturer",
    img: asset("images/cov.jpeg"),
    context: "Stage Sanergie",
    description:
      "Application de covoiturage avec cartographie et géocodage via l’API Adresse du gouvernement.",
    tech: "Node/Express, Leaflet/OpenStreetMap",
  },
];

export const contacts = [
  { icon: "📧", label: "mafifame@gmail.com", href: "mailto:mafifame@gmail.com" },
  { icon: "📞", label: "07 83 78 80 70", href: "tel:+33783788070" },
  {
    icon: "🔗",
    label: "linkedin.com/in/martine-dete",
    href: "https://www.linkedin.com/in/martine-dete",
  },
  { icon: "💻", label: "github.com/Mafifame", href: "https://github.com/Mafifame" },
  { icon: "📍", label: "Lyon, France" },
];