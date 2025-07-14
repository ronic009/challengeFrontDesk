// Espera a que todo el contenido HTML de la página se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona el formulario y el contenedor de mensajes
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    
    if (!form) {
        return;
    }

    // Definiciones de errores (sin cambios)
    const errorTypes = ['valueMissing', 'typeMismatch', 'tooShort'];
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
    });

    // LÓGICA DE ENVÍO SIMPLIFICADA
    form.addEventListener('submit', function(event) {
        let isFormValid = true;
        // Valida todos los campos una última vez
        form.querySelectorAll('input, textarea').forEach(input => {
            validateInput(input);
            if (!input.validity.valid) {
                isFormValid = false;
            }
        });

        // Si el formulario NO es válido, detenemos el envío.
        if (!isFormValid) {
            event.preventDefault(); // Detiene el envío
            formMessages.textContent = 'Por favor, corrija los errores en el formulario.';
            formMessages.className = 'form-messages error';
            formMessages.style.display = 'block';
        }
        // Si el formulario ES válido, no hacemos nada aquí.
        // El navegador procederá con el envío normal del formulario,
        // y Netlify lo interceptará junto con el reCAPTCHA.
    });
});