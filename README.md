# 🎥 React Video List App with Comments

A modern React application that displays a list of videos with detailed information and associated comments. The project is built using functional components, hooks, and mock APIs.

---

## 🚀 Features

- Fetches video data from a public mock API
- Displays video title, description, and embedded player
- Shows related comments for each video
- Clean, responsive UI using Bootstrap
- Organized and modular component structure

---

## 📦 Tech Stack

- React (Functional Components + Hooks)
- Axios (for data fetching)
- Bootstrap 5 (styling and layout)
- Mock APIs (via Mocki.io)

---

## 📂 Project Structure

src/
├── App.jsx # Root component
├── main.jsx # Entry point
├── components/
│ ├── videolist.jsx # Renders all videos
│ ├── videoitem.jsx # Single video component
│ ├── comments.jsx # Fetches and displays comments
│ └── comment.jsx # Individual comment UI
---

## 📡 API Endpoints

- **Videos:** `https://mocki.io/v1/a055ff59-3367-4f9a-9b14-ff3c8c131717`
- **Comments:** `https://mocki.io/v1/da95a9b0-14c5-45a2-9bd6-0b1f62279c9b`

---

## 🛠️ How to Run

```bash
git clone repo url
npm install
npm run dev
