let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name cannot be empty.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email cannot be empty.";
        isValid = false;
    } 
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
        isValid = false;
    }

    // If everything is valid
    if (isValid) {
        successMessage.textContent =
            "Registration successful!";

        form.reset();
    }

});