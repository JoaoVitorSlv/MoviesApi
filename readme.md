# 🌍 Country Explorer with React

This is a simple and clean React application that demonstrates how to consume external APIs to display country data and related images. The project integrates two APIs:

- **REST Countries API** – for country details and flags
- **Unsplash API** – for background images related to the selected country

## 🚀 Features

- Fetch and display all countries with flags
- Click on a country to view more info and related photos
- Responsive grid layout with Tailwind CSS
- Built using React Router, Hooks, and modular API service structure

## 📦 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/country-explorer.git
cd country-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add your Unsplash API access key:

```env
VITE_UNSPLASH_KEY=your_unsplash_access_key_here
```

You can get a free key by creating an account at [Unsplash Developers](https://unsplash.com/developers).

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

## 🧱 Tech Stack

- React
- React Router
- Tailwind CSS
- Vite
- REST Countries API
- Unsplash API

## 📂 Project Structure (Simplified)

```
src/
│
├── App.jsx               # Home page listing all countries
├── main.jsx              # App entry point with routing
├── pages/
│   └── Info.jsx          # Detailed country info and image
├── services/
│   ├── countryApi.js     # REST Countries API logic
└── styles/
    ├── index.css         # Tailwind config
    └── App.css           # Additional component styles
```

## 📄 License

This project is open source and free to use under the MIT license.

---

Happy coding! ✨
