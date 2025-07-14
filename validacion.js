// Espera a que todo el contenido HTML de la página se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona el formulario por su ID
    const form = document.getElementById('contact-form');
    // Selecciona el div donde se mostrarán los mensajes de éxito o error
    const formMessages = document.getElementById('form-messages');

    // Si no se encuentra el formulario, no hace nada más.
    if (!form) {
        return;
    }

    // Define los tipos de errores de validación que vamos a comprobar
    const errorTypes = [
        'valueMissing', // El campo está vacío
        'typeMismatch', // El tipo de dato es incorrecto (ej: email mal formado)
        'tooShort'      // El texto es demasiado corto
    ];

    // Mensajes de error personalizados para cada campo y cada tipo de error
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

    // Función para mostrar el mensaje de error adecuado
    function showErrorMessage(inputType, input) {
        let message = '';
        errorTypes.forEach(error => {
            if (input.validity[error]) {
                message = errorMessages[inputType][error];
            }
        });
        return message;
    }

    // Función para validar un campo individual
    function validateInput(input) {
        const inputType = input.name;
        const errorMessageContainer = input.parentElement.querySelector('.input-message-error');

        if (input.validity.valid) {
            // Si el campo es válido, quita los estilos de error y limpia el mensaje
            input.classList.remove('invalid');
            input.classList.add('valid');
            errorMessageContainer.textContent = '';
            errorMessageContainer.style.display = 'none';
        } else {
            // Si el campo es inválido, agrega estilos de error y muestra el mensaje
            input.classList.remove('valid');
            input.classList.add('invalid');
            errorMessageContainer.textContent = showErrorMessage(inputType, input);
            errorMessageContainer.style.display = 'block';
        }
    }

    // Agrega un "escuchador" a cada input y textarea para que se validen al perder el foco
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', (event) => {
            validateInput(event.target);
        });
    });

    // Agrega un "escuchador" para el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del navegador (que es recargar la página)
        event.preventDefault();

        let isFormValid = true;
        // Valida todos los campos una última vez antes de enviar
        form.querySelectorAll('input, textarea').forEach(input => {
            validateInput(input);
            if (!input.validity.valid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Si el formulario es válido, prepara los datos para enviarlos
            const formData = new FormData(form);
            
            // Usa la API Fetch para enviar los datos a Netlify en segundo plano
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Si el envío es exitoso, muestra un mensaje de éxito
                formMessages.textContent = '¡Mensaje enviado con éxito!';
                formMessages.className = 'form-messages success';
                formMessages.style.display = 'block';
                form.reset(); // Limpia el formulario
                form.querySelectorAll('.valid, .invalid').forEach(el => el.classList.remove('valid', 'invalid'));

                // Oculta el mensaje después de 5 segundos
                setTimeout(() => {
                    formMessages.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                // Si hay un error en el envío, muestra un mensaje de error
                formMessages.textContent = `Error al enviar el formulario: ${error}`;
                formMessages.className = 'form-messages error';
                formMessages.style.display = 'block';
            });
        } else {
            // Si el formulario no es válido, muestra un mensaje pidiendo corregir los errores
            formMessages.textContent = 'Por favor, corrija los errores en el formulario.';
            formMessages.className = 'form-messages error';
            formMessages.style.display = 'block';
        }
    });
});
