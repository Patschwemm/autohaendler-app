# Autohaendler App

Kleine webbasierte Autohändler-Software als Hobbyprojekt.

Ziel dieses Projekts ist es, eine einfache, veraltete Händler-Software (ca. 2006) funktional nachzubauen und dabei moderne Web-Technologien einzusetzen. Der Fokus liegt auf einem überschaubaren Funktionsumfang, sauberer Architektur und Lernwert – nicht auf maximaler Skalierung oder Design-Komplexität.

---

## Ziele des Projekts

- Nachbau einer einfachen, klassischen Autohändler-Software
- Nutzung moderner Technologien (React + .NET)
- Klare Trennung von Frontend und Backend
- Fokus auf Wartbarkeit und Verständlichkeit
- Grundlage für mögliche spätere Erweiterungen

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQLite (lokal, später austauschbar)

### Dokumente
- QuestPDF (PDF-Erstellung)
- OpenXML / DocX (Word-Vorlagen, optional)

---

## Projektstruktur

autohaendler-app/
│
├─ backend/
│ ├─ Autohaendler.Api
│ ├─ Autohaendler.Application
│ ├─ Autohaendler.Domain
│ └─ Autohaendler.Infrastructure
│
├─ frontend/
│ ├─ src/
│ ├─ public/
│ └─ vite.config.ts
│
└─ README.md


---

## Funktionaler Umfang (MVP)

- Fahrzeuge anlegen, bearbeiten und anzeigen
- Kunden anlegen und verwalten
- Verkauf erfassen
- Netto-, Brutto- und MwSt-Berechnung
- Rechnung als PDF erzeugen
- Einzelbenutzer (keine Authentifizierung im MVP)

---

## Setup – Backend

Voraussetzungen:
- .NET SDK (aktuelle LTS-Version)

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run

Standardmäßig läuft die API unter:

https://localhost:5001


Swagger ist aktiviert und dient zur API-Erkundung.

Setup – Frontend

Voraussetzungen:

Node.js (LTS)

cd frontend
npm install
npm run dev


Frontend läuft standardmäßig unter:

http://localhost:5173

---

## Architekturprinzipien

- Frontend und Backend sind strikt getrennt
- Business-Logik befindet sich ausschließlich im Backend
- Frontend enthält keine fachliche Logik
- REST-basierte Kommunikation
- Klare Domänenmodelle (Kunde, Fahrzeug, Verkauf)

---

## Datenbank

- Start mit SQLite (lokale Datei)
- Entity Framework Core als ORM
- Wechsel zu PostgreSQL oder SQL Server jederzeit möglich

---

## Dokumentenerstellung

- Rechnungen werden serverseitig erzeugt
- PDF-Generierung über QuestPDF
- Word-Vorlagen optional über OpenXML / DocX
- Keine clientseitige Dokumentenlogik

---

## Docker

Docker ist nicht Teil des initialen MVPs.

Die Anwendung ist jedoch so strukturiert, dass:

- Backend und Frontend später containerisiert werden können
- ein docker-compose.yml problemlos ergänzt werden kann

Docker wird bewusst erst in einer späteren Phase eingeführt.

---

## Roadmap (optional)

- Rollen / Benutzer
- Mehrwertsteuer-Varianten (Export, EU)
- Erweiterte Dokumentvorlagen
- Docker-Setup
- Deployment