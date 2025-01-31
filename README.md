## Introduction

This project is a Next.js-based web application developed for users to order umrah packages by visiting our website and order it via WhatsApp

## Tech Stack

The project is built using the following technologies:

- Next.js (15.1.15)
- TypeScript
- Tailwind CSS
- ShadCN UI
- Zustand
- pnpm

## Installation Guide

1. Clone the Repository

```sh
https://github.com/kabarhaji-id/goumrah-konvensional.git
```

2. Change the current working directory

```sh
cd goumrah-konvensional
```

3. Install Dependencies

```sh
pnpm install
```

4. Set Up Environment Variables

Create an .env file in the root directory and configure the required environment variables:

```sh
APP_QONTAK_ID=
APP_QONTAK_CODE=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_COLLECTION_ID_URL=
NEXT_PUBLIC_API_TOKEN=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_PIXEL_ID=
```

5. Run the Development Server

```sh
pnpm dev
```

## Project Flow

1. Homepage [ Beranda ] – Displays the main information and navigation to key features.
2. Packages List [ Paket Umrah ] - Displays list of all packages
3. Tanya Isma - Chatbox for user to ask any question related to goumrah.id
4. Package Detail - Displays the detail information of package

## Project Structure (Important Folders or Files)

```
📦 goumrah-konvensional
├── 📁 public/ (Serve static files)
│   ├── 📁 assets/ (Contains Image File)
│   │   ├── 📁 airlines/ (Airline's Logo)
│   │   ├── 📁 icons/ (Icons)
│   │   ├── 📁 image/ (Hotel's Image, Package's cover, etc)
│   │   ├── 📁 isma/ (Isma Illustration)
│   │   ├── 📁 patterns/ (Patterns and Accent)
│   │   ├── 📁 promo/ (Promo image)
│   │   └── 📁 skytrax/ (Skytrax image assets)
│   └── 📁 audio/ (Contains Audio File)
│
├── 📁 src/ (Common pattern of placing application code)
│   ├── 📁 app/
│   │   ├── 📁 syarat-ketentuan/ (Terms and Condition Page)
│   │   ├── 📁 umrah/
│   │   │   ├── 📁 [slug]/ (Package Detail)
│   │   │   ├── 📁 ideal/ (Ideal Page [note: currently not in use])
│   │   │   ├── 📁 rekomendasi/ (Recommended Page [note: currently not in use])
│   │   │   └── 📄 page.tsx (List of All Packages)
│   │   ├── 📄 globals.css (Main CSS of the app)
│   │   ├── 📄 layout.tsx (Main layout of the app)
│   │   ├── 📄 not-found.tsx (404 error)
│   │   ├── 📄 page.tsx (Homepage)
│   │   ├── 📄 robots.ts (Robots for SEO)
│   │   └── 📄 sitemap.ts (Sitemap for SEO)
│   │
│   ├── 📁 components/
│   │   ├── 📁 layout/ (Layout components like Navbar, Header, Footer, etc)
│   │   └── 📁 ui/ (ShadCN UI components and other custom components)
│   │
│   ├── 📁 data/ (Custom Hooks)
│   │   ├── 📁 gold/ (Package with gold category in json format)
│   │   ├── 📁 platinum/ (Package with platinum category in json format)
│   │   ├── 📁 silver/ (Package with silver category in json format)
│   │   ├── 📄 packages.ts (All Packages data in ts format)
│   │   └── 📄 testimonies.ts (Testimonies data)
│   │
│   ├── 📁 lib/ (Helper functions and configurations)
│   │   ├── 📁 fetcher/ (API fetching function)
│   │   ├── 📄 svgr-loader.ts (import SVG as React components)
│   │   └── 📄 utlis.ts (General helper functions)
│   │
│   ├── 📁 section/
│   │   ├── 📁 home/ (Home Section)
│   │   ├── 📁 package-detail/ (Package Detail Section)
│   │   ├── 📁 packages/ (Package Section)
│   │   ├── 📁 syarat-ketentuan/ (Terms and Condition Section)
│   │   └── 📁 tanya-isma/ (Chatbox)
│   │
│   ├── 📁 store/ (State Management with Zustand)
│   │   └── 📄 useInterfaceStore.ts (Component state)
│   │
│   └── 📁 types/
│       ├── 📄 fetch.ts (fetch API type)
│       ├── 📄 navigator-connection.ts (for Skeleton Loader purposes)
│       ├── 📄 package-details.ts (Package Detail type)
│       ├── 📄 packages.ts (Package type)
│       └── 📄 testimonies.ts (Testimonies type)
│
├── 📄 tailwind.config.ts (Tailwind CSS configuration)
├── 📄 tsconfig.json (TypeScript configuration)
└── 📄 next.config.mjs (Next.js configuration)
```

## Additional Notes

- Core UI components are located in the src/components/ui/ folder.
- State management for more complex component (UI) is handled using Zustand, located in src/store/.
- API fetch functions can be found in src/lib/fetcher/ folder
- If there is any further question or concerns, please refer to ask the current developer or contact the previous developer.

## Future Development (WebApps)

WebApps flow: https://excalidraw.com/#json=yoyxjiM9c6fSncfiReFr7,8zRRNdq0iF26qlPj0sQH2Q
