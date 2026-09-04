let password = document.getElementById("password");
let strength = document.getElementById("strength");

password.addEventListener("input", function() {

    let value = password.value;

    let hasUppercase = /[A-Z]/.test(value);
    let hasLowercase = /[a-z]/.test(value);
    let hasNumber = /[0-9]/.test(value);
    let hasSpecial = /[!@#$%^&*]/.test(value);

    if (value.length < 6) {

        strength.innerText = "Password Strength: Weak";

    } else if (
        value.length >= 6 &&
        (hasNumber || hasSpecial)
    ) {

        strength.innerText = "Password Strength: Medium";

    } else if (
        value.length >= 8 &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecial
    ) {

        strength.innerText = "Password Strength: Strong";

    } else {

        strength.innerText = "Password Strength: Medium";
    }
});