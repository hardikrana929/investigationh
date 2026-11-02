# AI Investigation Room Client

React and Vite frontend for creating and solving AI-generated detective mysteries. It supports English, Hindi, and Gujarati interfaces and case content.

## Folder structure

```text
client/
├── src/
│   ├── api/             # Axios API client
│   ├── assets/          # Static assets
│   ├── Game.jsx         # Screens, routes, and localization
│   ├── App.css          # Application styles
│   └── main.jsx         # React entry point
├── .env.example         # Frontend environment template
├── package.json
└── vite.config.js
```

## Setup

Requirements: Node.js 20.19 or later and a running API server.

```powershell
cd client
Copy-Item .env.example .env
npm install
npm run dev
```

Set the API URL in `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Open `http://localhost:5173` after Vite starts.

## Commands

```powershell
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run lint     # Check frontend code
npm run preview  # Preview the production build
```

## Git workflow

The `client` folder belongs to the shared repository at the project root. Run Git commands from `client` or the project root:

```powershell
git status
git add client/src client/package.json client/package-lock.json client/README.md
git commit -m "Update client interface"
git push
```

Do not commit `.env`, `node_modules`, or `dist`.
