document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const submitButton = document.querySelector("button");
    const toggleThemeButton = document.createElement("button");

    function validateInput(input, errorMessage, validationFn) {
        input.addEventListener("input", () => {
            const tooltip = input.nextElementSibling;
            if (!validationFn(input.value)) {
                tooltip.textContent = errorMessage;
                tooltip.style.opacity = "1";
            } else {
                tooltip.textContent = "";
                tooltip.style.opacity = "0";
            }
        });
    }

    validateInput(username, "Username is required.", value => value.trim() !== "");
    validateInput(email, "Enter a valid email.", value => value.includes("@"));
    validateInput(password, "Password must be at least 6 characters.", value => value.length >= 6);

    form.addEventListener("submit", event => {
        event.preventDefault();
        confirmationMessage.textContent = "Form submitted successfully!";
        confirmationMessage.style.color = "green";
        confirmationMessage.style.opacity = "0";
        confirmationMessage.style.transition = "opacity 0.5s ease";

        setTimeout(() => confirmationMessage.style.opacity = "1", 100);
    });

    submitButton.addEventListener("click", () => {
        submitButton.style.transform = "scale(0.95)";
        setTimeout(() => submitButton.style.transform = "scale(1)", 100);
    });

    toggleThemeButton.textContent = "Toggle Dark Mode";
    toggleThemeButton.style.marginTop = "20px";
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
