let images = [
    "https://picsum.photos/id/1015/600/350",
    "https://picsum.photos/id/1016/600/350",
    "https://picsum.photos/id/1018/600/350"
];

let currentIndex = 0;

let sliderImage = document.getElementById("sliderImage");
let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton");

// Next button
nextButton.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];
});

// Previous button
previousButton.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    sliderImage.src = images[currentIndex];
});

// Automatically change image every 3 seconds
setInterval(function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    sliderImage.src = images[currentIndex];

}, 3000);