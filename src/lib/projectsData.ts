// src/lib/projectsData.ts

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
  longDescription?: string; // Ajouté pour tes futures pages dynamiques
};

export const projects: Project[] = [
  // ---------------------------------------------------------
  // 1. TOP PROJETS (AFFICHÉS SUR L'ACCUEIL : featured = true)
  // ---------------------------------------------------------
  {
    id: 'lubum-food',
    title: 'Lubum Food',
    category: 'SaaS / FoodTech',
    status: 'Live',
    featured: true,
    stack: ['React 18', 'Tailwind v4', 'Prisma 6', 'Supabase PostgreSQL'],
    description: 'Application web complète de restauration à Lubumbashi. Moteur de vente optimisé pour la conversion mobile avec Shadow Accounts (sans mot de passe) et Cockpit Admin.',
    impact: 'Zéro friction pour les clients, commande instantanée via QR Code et gestion temps réel pour les restaurateurs.',
    image: '/projects/lubum-food.jpg', // N'oublie pas d'ajouter l'image dans public/projects/
    links: { github: 'https://github.com/EhaLotafe/Lubum-Food' },
    longDescription: `**Lubum Food** est une solution SaaS conçue pour moderniser la restauration à Lubumbashi. 
    L'innovation majeure réside dans l'architecture "Frictionless" : création de compte automatique sans mot de passe, détection de table par QR Code et intégration WhatsApp. Le backend est propulsé par Prisma et Supabase.`
  },
  {
    id: 'biolink-rdc',
    title: 'BioLink RDC',
    category: 'SaaS / Marketing',
    status: 'Live',
    featured: true,
    stack: ['React 19', 'Supabase Storage', 'Framer Motion', 'Netlify'],
    description: 'Plateforme SaaS "Link-in-Bio" de nouvelle génération pour les créateurs et entreprises en RDC. Design Liquid Glass, Smart Links et Analytics de précision.',
    impact: 'Centralisation de la présence numérique avec monétisation intégrée (Mobile Money) et tableau de bord Analytics complet.',
    image: '/projects/biolink.jpg',
    links: { demo: 'biolinkweb.netlify.app' },
    longDescription: `**BioLink RDC** est plus qu'un agrégateur de liens. C'est une vitrine professionnelle premium. 
    Fonctionnalités clés : Liens pulsants, protection par mot de passe, géolocalisation du trafic, et upload d'avatars via Supabase Storage. Le design utilise un effet OLED Black et Glassmorphism.`
  },
  {
    id: 'agriconnect',
    title: 'AgriConnect',
    category: 'AgriTech / Low-Tech',
    status: 'MVP Ready',
    featured: true,
    stack: ['React', 'Node.js', 'Drizzle ORM', 'SyncManager (Offline)'],
    description: 'Marketplace résiliente connectant agriculteurs ruraux et acheteurs urbains. Intègre une innovation "Offline-First" pour les zones à faible connectivité.',
    impact: 'Digitalisation du circuit court, traçabilité des récoltes et autonomisation en zone blanche (EDGE/3G instable).',
    image: '/projects/agric-connect.jpeg',
    links: { demo : 'https://agri-connect-rdc.vercel.app/' },
    longDescription: `Projet de TFC innovant. Utilisation d'un **SyncManager asynchrone** permettant à l'agriculteur de préparer ses offres hors-ligne au champ. Les données sont persistées localement et synchronisées automatiquement dès le retour du réseau.`
  },
  {
    id: 'weylandts-na-lobi',
    title: 'Weylandts Na Lobi',
    category: 'E-commerce Prestige',
    status: 'MVP Ready',
    featured: true,
    stack: ['React', 'Tailwind CSS', 'AI Gemini', 'Business Engine'],
    description: 'Plateforme SaaS haut de gamme orchestrant la relation entre un showroom de design exclusif et sa clientèle. CRM Conciergerie et intelligence logistique intégrés.',
    impact: 'Transformation du site vitrine en véritable outil de pilotage métier et d\'expérience client premium.',
    image: '/projects/weylandts.jpg',
    links: { demo: 'Lien-vers-la-demo' },
    longDescription: `Conçu pour l'excellence opérationnelle. Intègre un Moteur d'Inventaire multicritères, un Portail de Conciergerie pour les clients, et utilise l'IA (Gemini) pour générer un storytelling émotionnel autour du mobilier de luxe.`
  },
  {
    id: 'klasika-saas',
    title: 'Klasika 2.0',
    category: 'SaaS / EdTech',
    status: 'MVP Ready',
    featured: true,
    stack: ['TypeScript', 'Express', 'Drizzle ORM', 'PostgreSQL', 'WebSockets'],
    description: 'Une plateforme SaaS complète de gestion scolaire. Centralise le suivi pédagogique, administratif et financier avec une architecture multi-rôles.',
    impact: 'Architecture 2026 avec authentification 2FA et moteur de statistiques SQL avancé.',
    image: '/projects/school-platform.png',
    links: { github: 'https://github.com/EhaLotafe' }
  },

  // ---------------------------------------------------------
  // 2. AUTRES PROJETS (PAGE PROJETS UNIQUEMENT : featured = false)
  // ---------------------------------------------------------
  {
    id: 'digital-mastery-hub',
    title: 'Digital Mastery Hub 1.0',
    category: 'Infoprenariat / Formation',
    status: 'Live',
    featured: false,
    stack: ['Marketing Automation', 'Airtel Money API', 'Google Drive', 'SEO'],
    description: 'Tunnel de vente optimisé pour la commercialisation de formations et de ressources PDF. Stratégie de conversion directe axée sur le marché congolais.',
    impact: 'Monétisation de l\'expertise technique via une approche "Trust & Value" et paiements mobiles locaux.',
    image: '/projects/dm-hub.jpg',
    longDescription: `Plateforme d'infoprenariat exploitant un tunnel "Aperçu (Telegram) -> Paiement (Airtel Money) -> Transfert (Drive)". Conçue pour une vitesse maximale sur réseaux 3G avec un SEO optimisé pour les mots clés locaux.`
  },
  {
    id: 'rh-excel-vba',
    title: 'Système RH & Finance Excel',
    category: 'Business Automation / Consulting',
    status: 'Live',
    featured: false,
    stack: ['Excel VBA', 'Python', 'Data Analysis', 'Pédagogie'],
    description: 'Développement d\'outils de pilotage décisionnel sur mesure et formation des équipes d\'entreprise. Automatisation de la paie et de la facturation.',
    impact: 'Transformation de fichiers statiques en logiciels de gestion, avec accompagnement et formation des utilisateurs finaux.',
    image: '/projects/rh-excel.png'
  },
  {
    id: 'z-foods',
    title: 'Z Foods',
    category: 'FoodTech',
    status: 'Live',
    featured: false,
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    description: 'Single Page Application (SPA) haut de gamme pour un restaurant congolais. Menu dynamique intelligent changeant selon les jours de la semaine.',
    impact: 'Conversion immédiate via intégration WhatsApp et présentation luxueuse du service traiteur.',
    image: '/projects/copilot_image_1755644311563.jpeg',
    links: { github: 'https://github.com/EhaLotafe/Z-Foods' }
  },
  {
    id: 'edupay-rdc',
    title: 'EduPay RDC',
    category: 'Fintech / EdTech',
    status: 'En développement',
    featured: false,
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Mobile Payment'],
    description: 'Solution mobile facilitant le paiement sécurisé des frais scolaires en RDC pour automatiser la perception pour les écoles.',
    impact: 'Transparence totale des flux financiers et gain de temps majeur pour les parents.',
    image: '/projects/edupay.jpeg'
  },
  {
    id: 'citylinker',
    title: 'CityLinker Lubumbashi',
    category: 'CivicTech / Business',
    status: 'Live',
    featured: false,
    stack: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    description: 'Annuaire numérique interactif pour la ville de Lubumbashi. Permet de découvrir des services vérifiés et aux PME de gérer leur visibilité.',
    impact: 'Centralisation des informations commerciales fiables dans le Haut-Katanga.',
    image: '/projects/vitrine-lub.png',
    links: { demo: 'https://city-linker.vercel.app' }
  },
  {
    id: 'ai-chatbots',
    title: 'Chatbots Enterprise (Cozo)',
    category: 'Intelligence Artificielle',
    status: 'Live',
    featured: false,
    stack: ['Node.js', 'OpenAI API', 'Cozo DB', 'Vector Search'],
    description: 'Agents conversationnels intelligents formés sur les données spécifiques des entreprises (RAG) pour automatiser le support métier.',
    impact: 'Disponibilité 24/7 et automatisation à 80% des réponses aux questions fréquentes.',
    image: '/projects/chatbots-cozo.jpeg'
  },
  {
    id: 'meria-brand',
    title: 'Meria Lus’k Identity',
    category: 'Branding / UI Design',
    status: 'Live',
    featured: false,
    stack: ['Next.js 14', 'Framer Motion', 'Lottie', 'Tailwind CSS'],
    description: 'Identité numérique et portfolio professionnel pour Meria Lus’k. Conçu avec une approche "Dark Mode Premium" et des micro-animations interactives.',
    impact: 'Présentation haute performance de mes compétences de "Digital Architect".',
    image: '/projects/portfolio-ia.jpeg',
    links: { demo: 'https://portfolio-meria.vercel.app' }
  }
];