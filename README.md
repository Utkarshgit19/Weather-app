# 🌤️ Weather App

A simple weather application built with **Node.js**, **Express**, **EJS**, and the **OpenWeatherMap API**.  
It allows users to search current weather conditions either by entering a **city name** or using **latitude and longitude** coordinates.

---

## 🚀 Live Demo

👉 [Click here to visit the live site]https://weather-app-u7wy.onrender.com 

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **API**: OpenWeatherMap

---

## 💡 Features

- Search weather by **city name**
- Or by **latitude and longitude**
- Displays:
  - Temperature
  - Weather description
  - Humidity
  - Wind speed
- Toggle between input modes
- Responsive and clean user interface

---

## 📁 Folder Structure

Weather-App/
│
├── public/
│ ├── style.css
│ └── script.js
│
├── views/
│ └── index.ejs
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json


---

## 🔐 Environment Variables

Create a `.env` file in the root folder with your OpenWeatherMap API key:

Make sure `.env` is in your `.gitignore` to keep it private.

---

## 📦 How to Run Locally

1. Clone this repository:

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

npm install

Add your .env file with:
    API_KEY=your_api_key_here

node index.js

https://localhost:3000
