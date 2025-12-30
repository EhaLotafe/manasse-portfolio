export type ProjectStatus = 'Live' | 'En développement' | 'MVP Ready' | 'Concept';

export type Project = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  stack: string[];
  description: string;
  impact: string;
  image: string;
  featured: boolean;
  links?: {
    demo?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    id: 'klasika-saas',
    title: 'Klasika 2.0',
    category: 'SaaS / EdTech',
    status: 'MVP Ready',
    featured: true,
    stack: ['TypeScript', 'Express', 'Drizzle ORM', 'PostgreSQL', 'WebSockets'],
    description: 'Une plateforme SaaS complète de gestion scolaire. Centralise le suivi pédagogique, administratif et financier avec une architecture multi-rôles (Admin, Prof, Parent, Élève).',
    impact: 'Architecture 2026 avec authentification 2FA et moteur de statistiques SQL avancé.',
    image: '/projects/school-platform.png',
    links: { github: 'https://github.com/EhaLotafe' }
  },
  {
    id: 'edupay-rdc',
    title: 'EduPay RDC',
    category: 'Fintech / EdTech',
    status: 'En développement',
    featured: true,
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Mobile Payment'],
    description: 'Solution mobile facilitant le paiement sécurisé des frais scolaires en RDC. Vise à éliminer les files d’attente et à automatiser la perception pour les écoles.',
    impact: 'Transparence totale des flux financiers et gain de temps majeur pour les parents.',
    image: '/projects/edupay.jpeg'
  },
  {
    id: 'agriconnect',
    title: 'AgriConnect',
    category: 'AgriTech',
    status: 'MVP Ready',
    featured: true,
    stack: ['React', 'Node.js', 'MongoDB', 'USSD/SMS API'],
    description: 'Plateforme hybride web & low-tech connectant les agriculteurs ruraux aux acheteurs urbains sans nécessiter de connexion internet permanente.',
    impact: 'Digitalisation du circuit court et autonomisation des producteurs locaux.',
    image: '/projects/agric-connect.jpeg'
  },
  {
    id: 'citylinker',
    title: 'CityLinker Lubumbashi',
    category: 'CivicTech / Business',
    status: 'Live',
    featured: true,
    stack: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    description: 'Annuaire numérique interactif pour la ville de Lubumbashi. Permet de découvrir des services vérifiés et aux PME de gérer leur visibilité.',
    impact: 'Centralisation des informations commerciales fiables dans le Haut-Katanga.',
    image: '/projects/vitrine-lub.png',
    links: { demo: 'https://city-linker.vercel.app' }
  },
  {
    id: 'meria-brand',
    title: 'Meria Lus’k Identity',
    category: 'Branding / Portfolio',
    status: 'Live',
    featured: false,
    stack: ['Next.js 14', 'Framer Motion', 'Lottie', 'Tailwind CSS'],
    description: 'Identité numérique et portfolio professionnel pour Meria Lus’k. Conçu avec une approche "Dark Mode Premium" et des micro-animations interactives.',
    impact: 'Présentation haute performance de mes compétences et de ma vision de "Digital Architect".',
    image: '/projects/portfolio-ia.jpeg',
    links: { demo: 'https://portfolio-meria.vercel.app' }
  },
  {
    id: 'rh-excel-vba',
    title: 'Système RH & Finance Excel',
    category: 'Business Automation',
    status: 'Live',
    featured: false,
    stack: ['Excel VBA', 'Python', 'Data Analysis'],
    description: 'Automatisation complète de la gestion du personnel, des paies et de la facturation via des macros VBA et scripts Python.',
    impact: 'Transformation de fichiers Excel statiques en véritables outils de pilotage décisionnel.',
    image: '/projects/rh-excel.png'
  },
  {
    id: 'z-foods',
    title: 'Z Foods',
    category: 'FoodTech',
    status: 'Live',
    featured: false,
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    description: 'Plateforme vitrine et système de commande directe pour un restaurant local. Optimisé pour la conversion mobile-first.',
    impact: 'Digitalisation d’un commerce traditionnel avec une expérience utilisateur fluide.',
    image: '/projects/copilot_image_1755644311563.jpeg'
  },
  {
    id: 'ai-chatbots',
    title: 'Chatbots Enterprise (Cozo)',
    category: 'Artificial Intelligence',
    status: 'Live',
    featured: false,
    stack: ['Node.js', 'OpenAI', 'Cozo DB', 'Vector Search'],
    description: 'Agents conversationnels intelligents formés sur les données spécifiques des entreprises pour automatiser le support métier.',
    impact: 'Disponibilité 24/7 et automatisation des réponses aux questions fréquentes.',
    image: '/projects/chatbots-cozo.jpeg'
  }
];