// Optional element (not used right now) - kept for future use
const element = document.getElementById("demo");

// Image element for slideshow
const image = document.getElementById("image");

//TODO: Get Better images
let images = [
    "Images/programming.png",
    "Images/Project_media/rock_model_front.png",
    "Images/hollow_knight.webp",
    "Images/AI_pixil_art.png",
    "Images/Project_media/phong_lighting.png",
    "Images/satstifactory.webp"
];
let images_alt = [
    "a screen full of code",
    "a 3D model of a rock",
    "Hollow Knight artwork",
    "an AI-generated pixel art image",
    "a demonstration of Phong lighting in a 3D engine",
    "a screenshot of the game Satisfactory"
];
let index=0;

if (image) {
    setInterval(function () {
    image.src = images[index];
    image.alt = images_alt[index];
    index++;
    index = index % images.length;
  }, 3000); // change every 3s for readability
}




    