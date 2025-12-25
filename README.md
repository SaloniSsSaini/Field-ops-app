# Field Ops App – Offline First Mobile Application

A tiny offline-first field operations mobile app built using **React Native (Expo)**.
The app allows **Operators** to capture downtime and maintenance activities on the shop floor,
and **Supervisors** to review and acknowledge alerts.

This project was built as part of the **Cross-Platform Mobile Challenge (Intern)**.

---

## 🚀 Features

### Authentication (Mocked)
- Accepts any email
- Mock JWT token stored locally
- Role selection on first login (Operator / Supervisor)

### Machines
- List of machines with status chips (RUN / IDLE / OFF)
- Machine-level navigation

### Downtime (Operator)
- Start / End downtime
- Two-level reason tree selection
- Optional photo capture with compression
- Fully offline-capable with queued sync

### Maintenance (Operator)
- Due / Overdue / Done checklist items
- Mark tasks complete with notes
- Offline-first with auto sync

### Alerts (Supervisor)
- Simulated alert stream (mocked)
- Alert lifecycle:
  - Created → Acknowledged → Cleared
- Tracks who acknowledged and when

### Reports
- Simple per-machine summary
- Active time, Idle time, and top downtime reasons

---

## 🛠️ Tech Stack

- **React Native (Expo)**
- **TypeScript**
- **Zustand** – state management
- **SQLite (expo-sqlite)** – offline persistence
- **Expo APIs** – camera, network detection

---

## ▶️ How to Run

### Prerequisites
- Node.js (LTS)
- npm
- Android phone with **Expo Go** installed (recommended)

### Steps

```bash
npm install
npx expo start
Scan the QR code using Expo Go (Android)

The app will run on your device

🔌 Offline & Sync Design
SQLite is used as the primary offline data store

All actions are written locally first

Unsynced items are queued with unique IDs

Sync is triggered automatically on network reconnect

Idempotent sync using event IDs

Conflict strategy: Last write wins

🧠 State Management Choice

Zustand was chosen because:

Minimal boilerplate

Easy to reason about

No heavy reducers or actions

Clean separation of domain stores

🔐 Security Placeholder

Every stored entity includes a tenant_id

No real authentication is implemented (as per requirements)

📝 Notes

A mock alert stream is used instead of a real backend

The app was tested by:

Turning airplane mode ON

Capturing downtime and maintenance actions

Restarting the app

Reconnecting to the network and observing auto-sync

Expo was chosen for faster iteration and easy access to device features

🔮 What I’d Ship Next

Background sync service

Real-time alerts using SSE/WebSockets

Dark mode and localization support

Analytics dashboard for supervisors

📦 Submission Artifacts

GitHub Repo:
https://github.com/SaloniSsSaini/Field-ops-app

Live App:
Expo Go (QR-based)



👤 Author

Saloni Saini
