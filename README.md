# Weather API Web Application



A simple weather dashboard built using HTML, CSS, and JavaScript that displays real-time weather data using the OpenWeather API and the browser's Geolocation API.

## 📌 Overview
This project allows users to:

View current weather conditions.

Search weather information by city.

Automatically detect weather based on their location.

## ✨ Features

Real-Time Weather Data (temperature, humidity, wind speed, etc.)

Geolocation Support – Automatically fetch weather for your current location.

Search by City Name

Responsive Design – Works on mobile and desktop.

Error Handling – Displays messages for invalid cities or network errors.

## 🛠 Tech Stack

Frontend: HTML, CSS, JavaScript

API: OpenWeather API

Geolocation: HTML5 Geolocation API

## 🚀 Getting Started

### Prerequisites

Any modern web browser

OpenWeather API Key (Free sign-up at OpenWeather)

### Installation

# Clone the repository
git clone <REPO_URL>
cd <REPO_NAME>

# Open the project
open index.html (or double-click it)

### API Key Setup
Open script.js and replace:

const API_KEY = "YOUR_OPENWEATHER_API_KEY";

with your actual key.

## 📂 Project Structure

weather-app/
├─ index.html
├─ style.css
├─ script.js
└─ README.md

## 🔍 API Reference
Example Request:

https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

Parameters:

q: City name

appid: Your OpenWeather API key

units: metric (°C) or imperial (°F)

