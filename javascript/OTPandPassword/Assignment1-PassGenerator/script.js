"use strict";

// Character sets
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const AMBIGUOUS = "lI1oO0";

// HTML elements
const passwordLength = document.getElementById("passwordLength");
const includeNumbers = document.getElementById("includeNumbers");
const includeUppercase = document.getElementById("includeUppercase");
const includeSpecial = document.getElementById("includeSpecial");
const excludeAmbiguous = document.getElementById("excludeAmbiguous");

const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");

const showPassword = document.getElementById("showPassword");
const copyBtn = document.getElementById("copyBtn");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const copyMessage = document.getElementById("copyMessage");


// Generate a cryptographically secure random number
function secureRandom(max) {

    const randomValues = new Uint32Array(1);

    crypto.getRandomValues(randomValues);

    return randomValues[0] % max;
}


// Select a random character from a string
function randomCharacter(characters) {

    return characters[secureRandom(characters.length)];
}


// Remove ambiguous characters
function removeAmbiguous(characters) {

    return characters
        .split("")
        .filter(character => !AMBIGUOUS.includes(character))
        .join("");
}


// Generate password
function generatePassword() {

    let length = parseInt(passwordLength.value);

    // Validate length
    if (isNaN(length)) {
        alert("Please enter a valid password length.");
        return;
    }

    if (length < 4) {
        alert("Password length must be at least 4 characters.");
        passwordLength.value = 4;
        return;
    }

    if (length > 100) {
        alert("Password length cannot exceed 100 characters.");
        passwordLength.value = 100;
        return;
    }


    // Build character pool
    let characterPool = "";
    let requiredCharacters = [];


    // Lowercase is always included
    let lowercase = LOWERCASE;

    if (excludeAmbiguous.checked) {
        lowercase = removeAmbiguous(lowercase);
    }

    characterPool += lowercase;

    requiredCharacters.push(
        randomCharacter(lowercase)
    );


    // Uppercase
    if (includeUppercase.checked) {

        let uppercase = UPPERCASE;

        if (excludeAmbiguous.checked) {
            uppercase = removeAmbiguous(uppercase);
        }

        characterPool += uppercase;

        requiredCharacters.push(
            randomCharacter(uppercase)
        );
    }


    // Numbers
    if (includeNumbers.checked) {

        let numbers = NUMBERS;

        if (excludeAmbiguous.checked) {
            numbers = removeAmbiguous(numbers);
        }

        characterPool += numbers;

        requiredCharacters.push(
            randomCharacter(numbers)
        );
    }


    // Special characters
    if (includeSpecial.checked) {

        let special = SPECIAL;

        if (excludeAmbiguous.checked) {
            special = removeAmbiguous(special);
        }

        characterPool += special;

        requiredCharacters.push(
            randomCharacter(special)
        );
    }


    // Make sure requested length can contain required characters
    if (length < requiredCharacters.length) {

        alert(
            `Password length must be at least ${requiredCharacters.length} characters for the selected options.`
        );

        return;
    }


    // Generate remaining characters
    const remainingLength =
        length - requiredCharacters.length;

    let passwordCharacters = [
        ...requiredCharacters
    ];


    for (let i = 0; i < remainingLength; i++) {

        passwordCharacters.push(
            randomCharacter(characterPool)
        );
    }


    // Securely shuffle password characters
    passwordCharacters =
        secureShuffle(passwordCharacters);


    const password =
        passwordCharacters.join("");


    // Display password
    generatedPassword.value = password;

    updateStrength(password);

    copyBtn.disabled = false;

    copyMessage.textContent = "";
}


// Secure Fisher-Yates shuffle
function secureShuffle(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j = secureRandom(i + 1);

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


// Calculate password strength
function updateStrength(password) {

    let score = 0;

    const length = password.length;


    // Length score
    if (length >= 8) {
        score += 20;
    }

    if (length >= 12) {
        score += 20;
    }

    if (length >= 16) {
        score += 20;
    }


    // Character variety
    if (/[a-z]/.test(password)) {
        score += 10;
    }

    if (/[A-Z]/.test(password)) {
        score += 10;
    }

    if (/[0-9]/.test(password)) {
        score += 10;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score += 10;
    }


    let text;
    let color;


    if (score < 40) {

        text = "Weak";
        color = "#dc3545";

    } else if (score < 60) {

        text = "Fair";
        color = "#fd7e14";

    } else if (score < 80) {

        text = "Strong";
        color = "#ffc107";

    } else {

        text = "Very Strong";
        color = "#198754";
    }


    strengthBar.style.width = `${score}%`;
    strengthBar.style.backgroundColor = color;

    strengthText.textContent = text;
    strengthText.style.color = color;
}


// Show / hide password
showPassword.addEventListener(
    "change",
    function () {

        if (showPassword.checked) {

            generatedPassword.type = "text";

        } else {

            generatedPassword.type = "password";
        }
    }
);


// Copy password
copyBtn.addEventListener(
    "click",
    async function () {

        const password =
            generatedPassword.value;

        if (!password) {
            return;
        }

        try {

            await navigator.clipboard.writeText(password);

            copyMessage.textContent =
                "Password copied successfully!";

        } catch (error) {

            // Fallback for browsers where Clipboard API is unavailable
            generatedPassword.select();

            document.execCommand("copy");

            copyMessage.textContent =
                "Password copied successfully!";
        }


        setTimeout(
            () => {
                copyMessage.textContent = "";
            },
            2000
        );
    }
);


// Generate password button
generateBtn.addEventListener(
    "click",
    generatePassword
);


// Generate a password automatically when page loads
generatePassword();
