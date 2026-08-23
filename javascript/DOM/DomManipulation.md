document.body.style.backgroundColor = "rgb(17, 24, 39)";
'rgb(17, 24, 39)'
document.body.style.margin = "0";
'0'
document.body.style.fontFamily = "Arial, sans-serif";
'Arial, sans-serif'
document.body.style.color = "white";
'white'
let img = document.createElement("img");
undefined
img.alt = "Beautiful Bike";
'Beautiful Bike'
img.style.width = "500px";
'500px'
img.style.height = "300px";
'300px'
img.style.objectFit = "cover";
'cover'
img.style.display = "block";
'block'
img.style.margin = "30px auto";
'30px auto'
img.style.borderRadius = "15px";
'15px'
document.body.appendChild(img);
<img alt=​"Beautiful Bike" style=​"width:​ 500px;​ height:​ 300px;​ object-fit:​ cover;​ display:​ block;​ margin:​ 30px auto;​ border-radius:​ 15px;​">​
let input = document.createElement("input");
undefined
input.type = "file";
'file'
input.accept = "image/*";
'image/*'
input.onchange = function(event) {

    let file = event.target.files[0];

    if (file) {
        img.src = URL.createObjectURL(file);
    }
};
ƒ (event) {

    let file = event.target.files[0];

    if (file) {
        img.src = URL.createObjectURL(file);
    }
}
input.click();
undefined
let heading = document.createElement("h1");
undefined
heading.textContent = "Welcome to Bike World";
'Welcome to Bike World'
heading.style.color = "#f59e0b";
'#f59e0b'
heading.style.textAlign = "center";
'center'
heading.style.fontSize = "3rem";
'3rem'
heading.style.marginTop = "20px";
'20px'
document.body.appendChild(heading);
<h1 style=​"color:​ rgb(245, 158, 11)​;​ text-align:​ center;​ font-size:​ 3rem;​ margin-top:​ 20px;​">​Welcome to Bike World​</h1>​
let para = document.createElement("p");
undefined
para.textContent =
    "Experience the power, style and freedom of riding your dream bike.";
'Experience the power, style and freedom of riding your dream bike.'
para.style.color = "#e5e7eb";
'#e5e7eb'
para.style.fontSize = "1.3rem";
'1.3rem'
para.style.textAlign = "center";
'center'
para.style.maxWidth = "700px";
'700px'
para.style.margin = "20px auto";
'20px auto'
para.style.lineHeight = "1.6";
'1.6'
document.body.appendChild(para);
<p style=​"color:​ rgb(229, 231, 235)​;​ font-size:​ 1.3rem;​ text-align:​ center;​ max-width:​ 700px;​ margin:​ 20px auto;​ line-height:​ 1.6;​">​Experience the power, style and freedom of riding your dream bike.​</p>​
let button = document.createElement("button");
undefined
button.textContent = "Explore Bikes";
'Explore Bikes'
button.style.display = "block";
'block'
button.style.margin = "30px auto";
'30px auto'
button.style.padding = "15px 30px";
'15px 30px'
button.style.fontSize = "1.2rem";
'1.2rem'
button.style.border = "none";
'none'
button.style.borderRadius = "8px";
'8px'
button.style.cursor = "pointer";
'pointer'
button.style.backgroundColor = "#f59e0b";
'#f59e0b'
button.style.color = "black";
'black'
button.style.fontWeight = "bold";
'bold'
button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
'0 4px 10px rgba(0,0,0,0.3)'
document.body.appendChild(button);
<button style=​"display:​ block;​ margin:​ 30px auto;​ padding:​ 15px 30px;​ font-size:​ 1.2rem;​ border-width:​ medium;​ border-style:​ none;​ border-color:​ currentcolor;​ border-image:​ none;​ border-radius:​ 8px;​ cursor:​ pointer;​ background-color:​ rgb(245, 158, 11)​;​ color:​ black;​ font-weight:​ bold;​ box-shadow:​ rgba(0, 0, 0, 0.3)​ 0px 4px 10px;​">​Explore Bikes​</button>​
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#d97706";
    button.style.color = "white";
});
undefined
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#f59e0b";
    button.style.color = "black";
});

undefined
let card = document.createElement("div");
undefined
card.style.width = "400px";
'400px'
card.style.margin = "30px auto";
'30px auto'
card.style.padding = "25px";
'25px'
card.style.borderRadius = "15px";
'15px'
card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
'0 5px 20px rgba(0,0,0,0.4)'
card.style.backgroundColor = "#1f2937";
'#1f2937'
card.style.textAlign = "center";
'center'
document.body.appendChild(card);
<div style=​"width:​ 400px;​ margin:​ 30px auto;​ padding:​ 25px;​ border-radius:​ 15px;​ box-shadow:​ rgba(0, 0, 0, 0.4)​ 0px 5px 20px;​ background-color:​ rgb(31, 41, 55)​;​ text-align:​ center;​">​</div>​
let cardTitle = document.createElement("h2");
undefined
cardTitle.textContent = "Sport Bike";
'Sport Bike'
cardTitle.style.color = "#f59e0b";
'#f59e0b'
cardTitle.style.fontSize = "2rem";
'2rem'
cardTitle.style.marginBottom = "15px";
'15px'
card.appendChild(cardTitle);
<h2 style=​"color:​ rgb(245, 158, 11)​;​ font-size:​ 2rem;​ margin-bottom:​ 15px;​">​Sport Bike​</h2>​
let cardText = document.createElement("p");
undefined
cardText.textContent =
    "A powerful and stylish bike designed for speed, performance and adventure.";
'A powerful and stylish bike designed for speed, performance and adventure.'
cardText.style.color = "#f3f4f6";
'#f3f4f6'
cardText.style.fontSize = "1.1rem";
'1.1rem'
cardText.style.lineHeight = "1.6";
'1.6'
card.appendChild(cardText);
<p style=​"color:​ rgb(243, 244, 246)​;​ font-size:​ 1.1rem;​ line-height:​ 1.6;​">​A powerful and stylish bike designed for speed, performance and adventure.​</p>​
let features = document.createElement("p");
undefined
features.textContent =
    "Powerful Engine | High Speed Performance | Premium Tyres | Modern Design";
'Powerful Engine | High Speed Performance | Premium Tyres | Modern Design'
features.style.color = "#d1d5db";
'#d1d5db'
features.style.fontSize = "1rem";
'1rem'
features.style.lineHeight = "2";
'2'
card.appendChild(features);
<p style=​"color:​ rgb(209, 213, 219)​;​ font-size:​ 1rem;​ line-height:​ 2;​">​Powerful Engine | High Speed Performance | Premium Tyres | Modern Design​</p>​
document.body.style.minHeight = "100vh";
'100vh'
document.body.style.padding = "20px";
'20px'
document.body.style.boxSizing = "border-box";
'border-box'