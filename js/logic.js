// Optional element (not used right now) - kept for future use
const element = document.getElementById("demo");

// Image element for slideshow
const image = document.getElementById("image");

//TODO: Get Better images
let images = [
  "Images/northern_lights.avif",
  "Images/nyan_cat.gif",
  "Images/programming.png",
  "Images/AI_pixil_art.png",
];
let index=0;
//setInterval(function() {element.innerHTML += "Hello"}, 1000);
if (image) {
  setInterval(function () {
    image.src = images[index];
    index++;
    index = index % images.length;
  }, 3000); // change every 3s for readability
}

fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today')
    .then(res => res.json())
    .then(data => {
        document.getElementById('quote').textContent = '"' + data[0].q + '"';
        document.getElementById('author').textContent = '— ' + data[0].a;
    });


    // const api_url = "https://zenquotes.io/api/quotes/";
    // //Ai improved quote api
    // async function getapi(url) {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) throw new Error(`HTTP ${response.status}`);
    //         const data = await response.json();
    //         console.log("quotes api response:", data);

    //         const quoteEl = document.getElementById("quote");
    //         if (!quoteEl) return; // nothing to show

    //         if (Array.isArray(data) && data.length > 0) {
    //         // ZenQuotes returns objects like { q: "quote text", a: "author" }
    //         const first = data[0];
    //         const text = first.q || first.quote || JSON.stringify(first);
    //         const author = first.a || first.author || "Unknown";
    //         quoteEl.innerText = `"${text}" — ${author}`;
    //         } else if (data && typeof data === "object") {
    //         // some endpoints return a single object
    //         const text = data.q || data.quote || JSON.stringify(data);
    //         const author = data.a || data.author || "Unknown";
    //         quoteEl.innerText = `"${text}" — ${author}`;
    //         } else {
    //         quoteEl.innerText = "No quote available.";
    //         }
    //     } catch (err) {
    //         console.error("Failed to fetch quote:", err);
    //         const quoteEl = document.getElementById("quote");
    //         if (quoteEl) quoteEl.innerText = "Could not load quote.";
    //     }
    // }

    // // Trigger fetching the quote. Script is loaded at end of body so DOM elements exist.
    // getapi(api_url);