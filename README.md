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
