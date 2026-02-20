# Manasse Eha Lotafe - 2026

![Manasse Eha Lotafe Logo](public/logo.png)

Un site vitrine moderne pour **Manasse Eha Lotafe**, construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS**, avec animations **Framer Motion** et intégration **Lottie**.

---

## 🚀 Démo en ligne

- Portfolio / site officiel : [Manasse Eha Lotafe Portfolio](https://portfolio-catalog.vercel.app/)

---

## 📌 Objectif

Créer un site vitrine professionnel qui présente :

- Une **page d’accueil** complète (Hero, À propos, Services, Projets, Contact)
- Pages dédiées pour chaque section (À propos, Services, Projets, Contact)
- Un **formulaire de contact** fonctionnel via l’API Next.js
- Animations fluides et responsive grâce à **Framer Motion** et **Lottie**

---

## 🛠️ Technologies utilisées

| Domaine       | Technologie            | Détails d'implémentation |
| ------------- | -------------------- | ----------------------- |
| Framework     | Next.js 14 (App Router) | Routage côté serveur (`layout.tsx`, `page.tsx`) |
| Langage       | TypeScript            | Typage strict avec `tsconfig.json` |
| Styling       | Tailwind CSS 3.4      | Couleurs personnalisées (`overcome-primary`, `overcome-background`) |
| Animations    | Framer Motion & Lottie | `MotionWrapper.tsx` et fichiers `.json` Lottie |
| Données       | Fichiers locaux       | `servicesData.ts` et `projectsData.ts` typés |

---

## 📂 Structure du projet

```

overcome-solution-2026/
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ services/page.tsx
│  │  ├─ projects/page.tsx
│  │  └─ contact/page.tsx
│  │
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ AboutSection.tsx
│  │  ├─ ServicesSection.tsx
│  │  ├─ ProjectsGrid.tsx
│  │  ├─ ContactForm.tsx
│  │  └─ MotionWrapper.tsx
│  │
│  ├─ hooks/
│  │  └─ useScrollAnimation.ts
│  │
│  ├─ lib/
│  │  ├─ projectsData.ts
│  │  └─ servicesData.ts
│  │
│  └─ styles/
│     └─ globals.css
│
├─ public/
│  ├─ lottie/
│  ├─ projects/
│  └─ images...
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ tsconfig.json

````

---

## ⚡ Fonctionnalités

- **Responsive design** pour mobile, tablette et desktop
- **Formulaire de contact fonctionnel** avec feedback `success/error`
- **Animations fluides** pour sections et chargement des pages
- **Navigation simple et rapide** grâce à la Navbar
- **Grille dynamique de services et projets** avec fichiers de données typés

---

## 📥 Installation locale

1. Cloner le dépôt :

```bash
git clone https://github.com/EhaLotafe/overcome-solution-2026.git
cd overcome-solution-2026
````

2. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

3. Lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## 📦 Dépendances principales

* `next` – Framework React moderne
* `react` & `react-dom` – Librairie principale
* `typescript` – Typage strict
* `tailwindcss` – Styling moderne
* `framer-motion` – Animations interactives
* `lottie-react` – Animations Lottie JSON
* `react-icons` – Icônes vectorielles pour UI

---

## 📞 Contacts

* **Email:** [overcomeeha@gmail.com](mailto:overcomeeha@gmail.com)
* **Téléphone:** +243 817517378
* **WhatsApp:** [Contact WhatsApp](https://wa.me/243990918934)
* **LinkedIn:** [Eha Lotafe](https://www.linkedin.com/in/eha-lotafe)
* **GitHub:** [EhaLotafe](https://github.com/EhaLotafe)

---

## 🔗 Liens utiles

* Portfolio : [https://portfolio-catalog.vercel.app/](https://portfolio-catalog.vercel.app/)
* Boutiques Chariow : [#1](https://iapductk.mychariow.shop) | [#2](https://osazgjlt.mychariow.shop)

---

## 📜 License

Ce projet est **open-source** et libre d'utilisation.

---

```


