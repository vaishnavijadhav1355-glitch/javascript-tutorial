let generatedOTP = "";

const generateBtn = document.getElementById("generateBtn");
const verifyBtn = document.getElementById("verifyBtn");
const inputs = document.querySelectorAll(".otp-input");

// Generate a random 4-digit OTP
generateBtn.addEventListener("click", function () {
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();

    alert("Your OTP is: " + generatedOTP);

    inputs.forEach(input => {
        input.value = "";
    });

    inputs[0].focus();
});

// Move automatically to the next input
inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
        input.value = input.value.replace(/\D/g, "");

        if (input.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

// Validate OTP
verifyBtn.addEventListener("click", function () {
    let enteredOTP = "";

    inputs.forEach(input => {
        enteredOTP += input.value;
    });

    if (enteredOTP.length !== 4) {
        alert("Please enter all 4 digits.");
        return;
    }

    if (enteredOTP === generatedOTP) {
        alert("OTP verified successfully!");
    } else {
        alert("Invalid OTP. Please try again.");
    }
});
