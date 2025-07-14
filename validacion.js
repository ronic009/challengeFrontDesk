document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    if (!form) {
        return;
    }

    // Ya no se necesitan los mensajes de error aquí, se obtendrán de language.js
    const errorTypes = ['valueMissing', 'typeMismatch', 'tooShort'];

    function showErrorMessage(inputType, input) {
        let message = '';
        errorTypes.forEach(error => {
            if (input.validity[error]) {
                // Construye la clave de traducción y la obtiene de la función global
                const key = `validation_${inputType}_${error.toLowerCase().replace('valuemissing', 'missing').replace('typemismatch', 'invalid')}`;
                message = getTranslation(key);
            }
        });
        return message;
    }

    function validateInput(input) {
        const inputType = input.name;
        const errorMessageContainer = input.parentElement.querySelector('.input-message-error');

        if (input.validity.valid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorMessageContainer.textContent = '';
            errorMessageContainer.style.display = 'none';
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            errorMessageContainer.textContent = showErrorMessage(inputType, input);
            errorMessageContainer.style.display = 'block';
        }
    }

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', (event) => {
            validateInput(event.target);
        });
    });

    form.addEventListener('submit', function(event) {
        let isFormValid = true;
        form.querySelectorAll('input, textarea').forEach(input => {
            validateInput(input);
            if (!input.validity.valid) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            event.preventDefault();
            formMessages.textContent = getTranslation('validation_error_form');
            formMessages.className = 'form-messages error';
            formMessages.style.display = 'block';
        }
    });
});