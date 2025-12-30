import { 
  Code2, 
  Rocket, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  Smartphone,
  LucideIcon 
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  color: string;
};

export const services: Service[] = [
  {
    id: 'web-saas',
    title: 'Ingénierie Web & SaaS',
    description: 'Conception d’architectures logicielles modernes et scalables. Développement de plateformes multi-rôles, dashboards complexes et infrastructures cloud sécurisées.',
    stack: ['React', 'Next.js 14', 'Node.js', 'PostgreSQL', 'SaaS Architecture'],
    icon: Code2,
    color: 'text-overcome-accent' // Bleu
  },
  {
    id: 'ia-integration',
    title: 'IA & Automations Métier',
    description: 'Intégration d’agents intelligents (LLM) et automatisation de workflows pour booster la productivité. Transformation de vos processus internes grâce à l’IA générative.',
    stack: ['OpenAI', 'Agents IA', 'RAG', 'Workflow Automation', 'Python'],
    icon: Cpu,
    color: 'text-overcome-success' // Vert
  },
  {
    id: 'product-strategy',
    title: 'Stratégie Produit & MVP',
    description: 'Accompagnement de l’idée au déploiement. Définition de la roadmap, priorisation des fonctionnalités critiques et structuration technique pour un lancement rapide.',
    stack: ['Product Thinking', 'MVP Design', 'Agile', 'Scalability Strategy'],
    icon: Rocket,
    color: 'text-overcome-highlight' // Or/Ambre
  },
  {
    id: 'branding-ia',
    title: 'Branding & Contenu IA',
    description: 'Création d’identités visuelles distinctives et de stratégies de contenu assistées par IA. Optimisation de votre présence numérique pour la conversion et l’influence.',
    stack: ['Midjourney', 'Digital Branding', 'Prompt Engineering', 'Copywriting'],
    icon: Palette,
    color: 'text-overcome-accent' // Bleu
  },
  {
    id: 'tech-support',
    title: 'Audit & Optimisation Tech',
    description: 'Analyse approfondie de vos systèmes existants. Refonte UX/UI, optimisation de performance, sécurisation des données et mise aux normes de votre stack technique.',
    stack: ['Security Audit', 'Performance Optimization', 'UX/UI Refactor'],
    icon: ShieldCheck,
    color: 'text-text-muted' // Gris/Muted
  },
  {
    id: 'local-pme',
    title: 'Solutions Low-Tech pour PME',
    description: 'Développement d’outils pragmatiques et économiques adaptés aux réalités du terrain (RDC/Afrique). Focus sur l’accessibilité, le hors-ligne et la faible connectivité.',
    stack: ['USSD', 'SMS Gateway', 'Offline-First', 'Cost-Effective Tech'],
    icon: Smartphone,
    color: 'text-overcome-success' // Vert
  }
];