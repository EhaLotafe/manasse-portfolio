// src/lib/servicesData.ts
import { 
  Code2, 
  Cpu, 
  Smartphone,
  Database,
  GraduationCap,
  Palette,
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
    stack: ['React', 'Next.js 14', 'Node.js', 'PostgreSQL', 'Supabase'],
    icon: Code2,
    color: 'text-blue-500 dark:text-blue-400'
  },
  {
    id: 'ia-integration',
    title: 'IA & Automations Métier',
    description: 'Intégration d’agents intelligents (LLM) et automatisation de workflows pour booster la productivité. Transformation de vos processus internes grâce à l’IA générative.',
    stack: ['OpenAI', 'Agents IA', 'RAG', 'Workflow Automation'],
    icon: Cpu,
    color: 'text-purple-500 dark:text-purple-400' 
  },
  {
    id: 'local-pme',
    title: 'Solutions Low-Tech (RDC)',
    description: 'Développement d’outils pragmatiques adaptés aux réalités du terrain (faible connectivité). Focus sur l’accessibilité, les architectures Offline-First et les USSD.',
    stack: ['Offline-First', 'SyncManager', 'Mobile Payment', 'USSD/SMS'],
    icon: Smartphone,
    color: 'text-emerald-500 dark:text-emerald-400'
  },
  {
    id: 'data-vba',
    title: 'Business Data & Excel VBA',
    description: 'Automatisation de la gestion du personnel, de la paie et de la facturation. Transformation de vos fichiers Excel statiques en véritables outils de pilotage décisionnel.',
    stack: ['Excel VBA', 'Python', 'Analyse de Données', 'Macros'],
    icon: Database,
    color: 'text-amber-500 dark:text-amber-400'
  },
  {
    id: 'formation-mentoring',
    title: 'Formation & E-learning',
    description: 'Accompagnement pédagogique et transfert de compétences. Mise à disposition de ressources numériques (Digital Mastery Hub) et coaching sur les outils technologiques.',
    stack: ['Pédagogie', 'Mentoring Tech', 'Infoprenariat', 'Support B2C'],
    icon: GraduationCap,
    color: 'text-rose-500 dark:text-rose-400'
  },
  {
    id: 'branding-ui',
    title: 'Branding & UI/UX Premium',
    description: 'Création d’identités numériques distinctives (Dark Mode, Glassmorphism). Optimisation de votre présence en ligne avec des interfaces fluides et des micro-animations.',
    stack: ['Tailwind CSS', 'Framer Motion', 'Design System', 'Lottie'],
    icon: Palette,
    color: 'text-cyan-500 dark:text-cyan-400'
  }
];