# EllaYoga — Site vitrine

Site web professionnel pour **EllaYoga**, studio de yoga avec deux adresses à Tel Aviv (Port & Tour Azrieli Sarona). Construit avec Next.js 16, TypeScript et Tailwind CSS.

---

## Fonctionnalités

- **Multilingue** — Français, Anglais, Hébreu (avec support RTL complet)
- **Réservation en ligne** — Formulaire 2 étapes pour réserver un cours
- **Planning interactif** — Filtrage par jour et par studio
- **Blog / Actualités** — Section articles avec photos
- **Newsletter** — Formulaire d'inscription avec confirmation
- **RGPD** — Bandeau cookies avec localStorage, mentions légales
- **SEO de base** — Métadonnées, Open Graph, titres optimisés
- **Design responsive** — Mobile, tablette, desktop
- **Photos réelles** — Images téléchargées depuis ellayoga.com

## Sections du site

| Section | Description |
|---|---|
| Hero | Titre principal, stats, appel à l'action |
| Le Studio | Histoire, valeurs, photos des deux studios |
| Cours | 6 disciplines (Hatha, Vinyasa, Yin, Ashtanga, Nidra, Prénatal) |
| Planning | Tableau interactif par jour + filtre par studio |
| Tarifs | 3 formules avec toggle mensuel / annuel |
| Instructeurs | 4 profils avec biographie au clic |
| Témoignages | Carousel avec 5 avis clients |
| Blog | 3 articles avec photos, catégories, traduits |
| Newsletter | Inscription email |
| Réservation | Formulaire 2 étapes |
| Contact | Coordonnées des 2 studios avec Google Maps |

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| Next.js | 16.2.2 | Framework principal (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Typage |
| Tailwind CSS | 4 | Utilitaires CSS |
| Lucide React | — | Icônes |
| Framer Motion | 12 | Animations (disponible) |

### Design
- **Typographie** : Cormorant Garamond (titres) + Jost (corps) + Rubik (hébreu)
- **Palette** : Crème `#FAFAF7` · Sauge `#A8BAA4` · Pierre `#F2EEE8` · Charcoal `#1C1C1A`

---

## Structure du projet

```
ellayoga/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation + sélecteur de langue
│   │   ├── Hero.tsx            # Section principale
│   │   ├── Studio.tsx          # Présentation du studio
│   │   ├── Cours.tsx           # Grille des cours
│   │   ├── Planning.tsx        # Planning hebdomadaire
│   │   ├── Tarifs.tsx          # Abonnements et tarifs
│   │   ├── Instructeurs.tsx    # Équipe pédagogique
│   │   ├── Temoignages.tsx     # Avis clients
│   │   ├── Blog.tsx            # Articles / actualités
│   │   ├── Newsletter.tsx      # Inscription newsletter
│   │   ├── Reservation.tsx     # Formulaire de réservation
│   │   ├── Contact.tsx         # Coordonnées des studios
│   │   ├── Footer.tsx          # Pied de page
│   │   └── CookieBanner.tsx    # Bandeau RGPD
│   ├── lib/
│   │   └── i18n.tsx            # Contexte i18n + traductions (FR/EN/HE)
│   ├── globals.css             # Variables CSS + animations
│   ├── layout.tsx              # Layout racine
│   └── page.tsx                # Page principale
├── public/
│   └── images/                 # Photos des studios (11 images)
├── package.json
└── tsconfig.json
```

---

## Démarrage

### Prérequis
- Node.js 18+
- npm 9+

### Installation

```bash
git clone <repo>
cd ellayoga
npm install
```

### Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Build production

```bash
npm run build
npm start
```

---

## Déploiement (Vercel)

```bash
npx vercel        # Premier déploiement (connexion + configuration)
npx vercel --prod # Déploiement en production
```

Ou connecter le repo Git directement sur [vercel.com](https://vercel.com) pour un déploiement automatique à chaque push.

---

## Internationalisation

Les traductions sont centralisées dans `app/lib/i18n.tsx`.

| Langue | Code | RTL |
|---|---|---|
| Français | `fr` | Non |
| English | `en` | Non |
| עברית | `he` | Oui |

Pour ajouter une langue, ajouter un bloc dans l'objet `translations` et le code dans le type `Locale`.

---

## Roadmap

- [ ] Intégration paiement en ligne (Stripe)
- [ ] Système de réservation réel (backend)
- [ ] Page blog complète avec CMS
- [ ] Authentification membre
- [ ] Application mobile
