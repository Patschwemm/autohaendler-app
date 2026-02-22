# Development Setup

## Quick Start

To start both frontend and backend services simultaneously:

```bash
npm run dev
```

This will start:
- **Backend API** on `https://localhost:7123` (or configured port)
- **Frontend** on `http://localhost:5173` (Vite default)

## Individual Services

If you need to run services individually:

```bash
# Frontend only
npm run frontend:dev

# Backend only  
npm run backend:dev
```

## First Time Setup

1. Install root dependencies: `npm install`
2. Install frontend dependencies: `cd frontend && npm install`
3. Restore backend packages: `cd backend && dotnet restore`
4. Run development environment: `npm run dev`

## Stopping Services

Press `Ctrl+C` in the terminal to stop both services.

The services will display with colored output:
- 🟦 **FRONTEND** (cyan)
- 🟨 **BACKEND** (yellow)