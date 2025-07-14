document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    if (!form) {
        return;
    }

    const errorTypes = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'tooShort'
    ];

    const errorMessages = {
        nombre: {
            valueMissing: 'El campo nombre no puede estar vacío.',
            tooShort: 'Por favor, ingrese un nombre con al menos 3 caracteres.'
        },
        email: {
            valueMissing: 'El campo e-mail no puede estar vacío.',
            typeMismatch: 'Por favor, ingrese un correo electrónico válido.'
        },
        asunto: {
            valueMissing: 'El campo asunto no puede estar vacío.',
            tooShort: 'El asunto debe tener al menos 5 caracteres.'
        },
        mensaje: {
            valueMissing: 'El campo mensaje no puede estar vacío.',
        }
    };

    function showErrorMessage(inputType, input) {
        let message = '';
        errorTypes.forEach(error => {
            if (input.validity[error]) {
                message = errorMessages[inputType][error];
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

        input.addEventListener('input', (event) => {
            if (event.target.classList.contains('invalid')) {
                validateInput(event.target);
            }
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isFormValid = true;
        form.querySelectorAll('input, textarea').forEach(input => {
            validateInput(input);
            if (!input.validity.valid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            const formData = new FormData(form);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                formMessages.textContent = '¡Mensaje enviado con éxito!';
                formMessages.className = 'form-messages success';
                formMessages.style.display = 'block';
                form.reset();
                form.querySelectorAll('.valid, .invalid').forEach(el => el.classList.remove('valid', 'invalid'));

                setTimeout(() => {
                    formMessages.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                formMessages.textContent = `Error al enviar el formulario: ${error}`;
                formMessages.className = 'form-messages error';
                formMessages.style.display = 'block';
            });
        } else {
            formMessages.textContent = 'Por favor, corrija los errores en el formulario.';
            formMessages.className = 'form-messages error';
            formMessages.style.display = 'block';
        }
    });
});