let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let modal = document.getElementById("modal");

openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});