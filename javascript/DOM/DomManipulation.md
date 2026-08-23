// Step 1: Set Background Color
document.body.style.backgroundColor = "#111827";
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.color = "white";


// Step 2: Create a Bike Image
let img = document.createElement("img");

img.alt = "Beautiful Bike";

img.style.width = "500px";
img.style.height = "300px";
img.style.objectFit = "cover";
img.style.display = "block";
img.style.margin = "30px auto";
img.style.borderRadius = "15px";

document.body.appendChild(img);


// Select Bike Image
let input = document.createElement("input");

input.type = "file";
input.accept = "image/*";

input.onchange = function(event) {

    let file = event.target.files[0];

    if (file) {
        img.src = URL.createObjectURL(file);
    }
};

input.click();


// Step 3: Add a Styled Heading
let heading = document.createElement("h1");

heading.textContent = "Welcome to Bike World";

heading.style.color = "#f59e0b";
heading.style.textAlign = "center";
heading.style.fontSize = "3rem";
heading.style.marginTop = "20px";

document.body.appendChild(heading);


// Step 4: Add a Beautiful Paragraph
let para = document.createElement("p");

para.textContent =
    "Experience the power, style and freedom of riding your dream bike.";

para.style.color = "#e5e7eb";
para.style.fontSize = "1.3rem";
para.style.textAlign = "center";
para.style.maxWidth = "700px";
para.style.margin = "20px auto";
para.style.lineHeight = "1.6";

document.body.appendChild(para);


// Step 5: Add a Styled Button
let button = document.createElement("button");

button.textContent = "Explore Bikes";

button.style.display = "block";
button.style.margin = "30px auto";
button.style.padding = "15px 30px";
button.style.fontSize = "1.2rem";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#f59e0b";
button.style.color = "black";
button.style.fontWeight = "bold";
button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

document.body.appendChild(button);


// Step 6: Add Hover Effect to Button
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#d97706";
    button.style.color = "white";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#f59e0b";
    button.style.color = "black";
});


// Step 7: Create a Bike Card
let card = document.createElement("div");

card.style.width = "400px";
card.style.margin = "30px auto";
card.style.padding = "25px";
card.style.borderRadius = "15px";
card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
card.style.backgroundColor = "#1f2937";
card.style.textAlign = "center";

document.body.appendChild(card);


// Bike Card Title
let cardTitle = document.createElement("h2");

cardTitle.textContent = "Sport Bike";

cardTitle.style.color = "#f59e0b";
cardTitle.style.fontSize = "2rem";
cardTitle.style.marginBottom = "15px";

card.appendChild(cardTitle);


// Bike Card Description
let cardText = document.createElement("p");

cardText.textContent =
    "A powerful and stylish bike designed for speed, performance and adventure.";

cardText.style.color = "#f3f4f6";
cardText.style.fontSize = "1.1rem";
cardText.style.lineHeight = "1.6";

card.appendChild(cardText);


// Bike Features
let features = document.createElement("p");

features.textContent =
    "Powerful Engine | High Speed Performance | Premium Tyres | Modern Design";

features.style.color = "#d1d5db";
features.style.fontSize = "1rem";
features.style.lineHeight = "2";

card.appendChild(features);


// Step 8: Make the Page Responsive
document.body.style.minHeight = "100vh";
document.body.style.padding = "20px";
document.body.style.boxSizing = "border-box";