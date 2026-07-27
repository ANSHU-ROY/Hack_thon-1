# Hack_thon-1
StarDance challange 
# NASA Astronomy Picture of the Day (APOD) Viewer 🚀

A sleek, responsive web application that fetches and displays the daily astronomy picture or video directly from the official NASA API. 

## ✨ Features
* **Daily Content:** Automatically fetches the latest Astronomy Picture of the Day.
* **Smart Media Handling:** Seamlessly displays both images and YouTube video embeds depending on what NASA publishes that day.
* **Modern UI:** Features a dark, space-themed design using CSS Flexbox for a clean, centered layout.
* **Responsive Design:** Scales perfectly on desktop, tablet, and mobile devices.
* **Error Handling:** Includes a fallback UI just in case the NASA API is down or the internet connection drops.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure.
* **CSS3:** Custom styling, Flexbox layout, and responsive design.
* **JavaScript (Vanilla):** DOM manipulation, asynchronous functions (`async/await`), and Fetch API integration.

## 🚀 Getting Started

### Prerequisites
All you need is a modern web browser and a code editor (like VS Code).

### Installation & Setup
1. Clone this repository or download the source code files (`index.html`, `style.css`, `script.js`).
2. Open the project folder in your code editor.
3. Open `index.html` in your browser. 
   * *Note: For the best experience and to avoid local CORS issues, it is recommended to run the project using a local development server (like the "Live Server" extension in VS Code).*

### API Key Note
This project uses a demo API key provided by NASA. If you plan to deploy this or make heavy use of it, you should generate your own free API key from [api.nasa.gov](https://api.nasa.gov/) and replace the `API_KEY` variable at the top of the `script.js` file:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
