const VALID_EMAIL = "usuario@ejemplo.com";
const VALID_PASSWORD = "12345";

function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    const form = document.getElementById('loginForm');
    form.insertBefore(errorDiv, form.querySelector('button'));
}

function validateForm(email, password) {
    if (!email || !password) {
        displayError("Por favor, complete todos los campos.");
        return false;
    }
    return true;
}

function checkCredentials(email, password) {
    return email === VALID_EMAIL && password === VALID_PASSWORD;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

function handleSubmit(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    clearErrors();

    if (!validateForm(email, password)) return;

    if (checkCredentials(email, password)) {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html"; 
    } else {
        displayError("Credenciales incorrectas");
    }
}

document.getElementById('loginForm').addEventListener('submit', handleSubmit);