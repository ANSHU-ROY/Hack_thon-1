//finding a real API of NASA O KNOWLEDGE abou this taking help from ai .........................................
// Found api super easy
const API_KEY = 'YOUR_API_KEY'; 
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

//geting all DOM element 
const titleEl = document.getElementById('title');
const dateEl = document.getElementById('date');
const descEl = document.getElementById('description');
const mediaContainer = document.getElementById('media-container');

async function getSpaceStuff() {
    try {
        console.log("fetching nasa data mwahaha...meow gop gop gop gop gop gop gop gop gop gop gop gop gop gop gop......."); // debug log
        
        const response = await fetch(API_URL);
        const data = await response.json();
        
    //meow gop gop gogp gop gop.......
        console.log("NASA Data:", data); 
        
        // Update the easy text stuff
        titleEl.textContent = data.title;
        dateEl.textContent = data.date;
        descEl.textContent = data.explanation;
        
        // Clear out the loading text from the container just in case
        mediaContainer.innerHTML = ''; 
        
        // NASA sometimes posts youtube videos instead of pictures, so we gotta check the type
        if (data.media_type === 'image') {
            const img = document.createElement('img');
            img.src = data.url;
            img.alt = data.title; 
            mediaContainer.appendChild(img);

        } else if (data.media_type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = data.url;
            iframe.setAttribute('frameborder', '0'); 
            iframe.allowFullscreen = true;
            mediaContainer.appendChild(iframe);

        } else {
            // Just in case they send a weird format someday
            console.log("idk what this media format is lol");
        }
        
    } catch (error) {
        console.error("bruh the fetch failed:", error);
        
        // Fallback UI if the API is down or internet is off
        titleEl.textContent = " 🤖 Houston, we have a problem 👽 🚀💥";
        descEl.textContent = "Couldn't connect to NASA right now. Check your internet connection or try again later. Till then gop gop gop.. ";
    }
}

// Kick it off when the page loads
getSpaceStuff();
