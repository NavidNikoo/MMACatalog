# 🥋 MMA Fighter Catalog

An interactive UFC fighter catalog web application built using HTML, CSS, and JavaScript. Users can explore champions and top contenders, filter by weight class and fighting style, sort by stats, and even view short highlight clips.

## 🚀 Live Site
🌐 [View it on GitHub Pages](https://navidnikoo.github.io/MMACatalog/)

## 📸 Features

- 🎖️ **Champion Highlighting** — Champions have a gold-bordered card and belt.
- ⭐ **Favorites System** — Click the star to favorite a fighter (stored in memory).
- 🔍 **Live Search** — Quickly find fighters by name, weight class, style, or rank.
- 🥋 **Filters** — Filter by weight class and fighting style.
- 🧮 **Sorting Options** — Sort fighters by wins, losses, win rate, gender, and favorites.
- 🌙 **Dark Mode** — Toggle a stylish dark theme.
- 🎥 **View Highlight Button** — Watch a short fight GIF on demand (per card).

## 📁 Project Structure

MMACatalog/ ├── index.html # Main HTML page ├── style.css # All styles (light & dark mode) ├── scripts.js # Handles logic for filtering, sorting, rendering, events ├── fighterData.js # Fighter data stored in a JavaScript array └── README.md # You're reading it!


## 🧠 Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Responsive grid layout, dark mode, hover effects, fonts
- **JavaScript (Vanilla)**: DOM manipulation, event listeners, logic handling
- **Google Fonts**: For clean UFC-style typography
- **GitHub Pages**: Live deployment hosting

## 🛠 How It Works

- Fighters are stored as structured JavaScript objects inside an array (`fighterData.js`).
- The DOM is dynamically populated via JS (`scripts.js`) using a hidden HTML card template.
- Clicking sort, filter, or search dynamically re-renders filtered data.
- Highlight GIFs are toggled per fighter on button click (not hover).

## ⚡ Future Ideas

- Add audio pronunciation for fighter names
- Add championship history or stats charts
- Responsive design improvements for mobile devices
- Include a “Compare Fighters” feature side-by-side

## 📬 Contact

Made by [Navid Nikoo](https://github.com/navidnikoo) 💪  
Have questions or suggestions? Feel free to reach out or open an issue!

