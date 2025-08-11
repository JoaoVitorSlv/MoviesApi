# 🎬 Movies Explorer with React

A simple and modern **React** application that demonstrates how to consume the **The Movie Database (TMDB)** public API to display the top movies currently playing, including details such as posters, titles, ratings (stars), and trailers.

## 🚀 Features

- Fetch and display the top movies in theaters using the **TMDB API**
- View movie details when selected
- Watch trailers directly in the app
- Responsive, clean layout styled with **Tailwind CSS**
- Modular structure with **React Hooks**

## 📦 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/JoaoVitorSlv/MoviesApi.git
cd MoviesApi
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add your TMDB API key:

```env
VITE_TMDB_KEY=your_tmdb_api_key_here
```

You can get a free API key by creating an account at [The Movie Database](https://www.themoviedb.org/settings/api).

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

## 🧱 Tech Stack

- **React**
- **React Router**
- **Tailwind CSS**
- **Vite**
- **The Movie Database (TMDB) API**

## 📂 Project Structure (Simplified)

```
src/
│
├── App.jsx              # Home page listing all movies
├── main.jsx             # App entry point with routing
├── services/
│   └── movie.js
    └── api.js       # TMDB API logic
└── styles/
    ├── index.css        # Tailwind configuration
    └── App.css          # Additional component styles
```

## 📄 License

This project is **open source** and available under the MIT license.

---

✨ **Enjoy exploring movies!**
