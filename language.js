// Objeto que contiene todas las traducciones
const translations = {
  es: {
    // Menú y Encabezado
    menu_about: "Sobre mí",
    menu_skills: "Skills",
    menu_hobbies: "Hobbies",
    menu_training: "Formación",
    menu_projects: "Proyectos",
    menu_contact_email: "rramirezfiallos@hotmail.com",
    menu_contact_link: "Contacto",
    title_bio: "Hola, mi nombre es Ron y soy un entusiasta de la tecnología y el aprendizaje constante",
    title_subsection: "Ingeniero en Calidad Ambiental, con pasión por la educación constante, la tecnología, el empresarismo y los deportes de contacto como las mma, el boxeo y el fútbol.",
    title_github: "Github",
    title_linkedin: "Linkedin",
    title_instagram: "Instagram",
    title_resume: "Currículo",
    // Sobre Mí
    about_title: "Sobre mí",
    about_p1: "En 2024, he incursionado en la Industria de Tecnología para ofertar mis servicios profesionales y la creación de empresa.",
    about_p2: 'Me gradué como Ingeniero Ambiental y cuento con 10 años de experiencia laboral en el sector público, privado y cooperación internacional en roles relacionados con gestión medio ambiental, desarrollo sostenible, gestión empresarial y emprendedurismo. En 2022 fundé el emprendimiento "The Party Wagon", el cual fue un bar móvil y tienda de Té de Burbujas (Boba Tea). En 2023, fundé una escuela de Programación para niños "Algorithmics School-Chinandega Branch".',
    // Skills & Hobbies
    skills_title: "Skills",
    hobbies_title: "Hobbies",
    // Formación Académica
    academic_title: "Formación académica",
    academic_course1_title: "Ingeniería en Calidad Ambiental",
    academic_course2_title: "Formación en Front-End Development",
    academic_course3_title: "Nanogrado en Marketing Digital",
    academic_course3_subtitle: "En curso - Udacity",
    // Experiencia Profesional
    experience_title: "Experiencia Profesional",
    experience_project1_title: "Encriptador de texto",
    experience_project1_desc: "Challenge Alura Codificador",
    experience_project2_title: "Juego del Ahorcado",
    experience_project2_desc: "Challenge Oracle",
    experience_repo_btn: "Repositorio",
    experience_demo_btn: "Ver demo",
    // Contacto
    contact_title: "Contacto",
    contact_subtitle1: "¿Quieres contactarme?",
    contact_subtitle2: "Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.",
    contact_placeholder_name: "Tu nombre",
    contact_placeholder_email: "email@dominio.com",
    contact_placeholder_subject: "Asunto",
    contact_placeholder_message: "Escribe tu mensaje",
    contact_send_btn: "Enviar mensaje",
    // Footer
    footer_developed_by: "Desarrollado por Ronald Ramírez F.",
    // Página de Gracias
    thanks_title: "¡Gracias por tu mensaje!",
    thanks_p1: "He recibido tu formulario correctamente y me pondré en contacto contigo tan pronto como sea posible.",
    thanks_back_btn: "Volver a la página principal",
    // Errores de Validación
    validation_error_form: 'Por favor, corrija los errores en el formulario.',
    validation_name_missing: 'El campo nombre no puede estar vacío.',
    validation_name_short: 'Por favor, ingrese un nombre con al menos 3 caracteres.',
    validation_email_missing: 'El campo e-mail no puede estar vacío.',
    validation_email_invalid: 'Por favor, ingrese un correo electrónico válido.',
    validation_subject_missing: 'El campo asunto no puede estar vacío.',
    validation_subject_short: 'El asunto debe tener al menos 5 caracteres.',
    validation_message_missing: 'El campo mensaje no puede estar vacío.',
  },
  en: {
    // Menu & Header
    menu_about: "About me",
    menu_skills: "Skills",
    menu_hobbies: "Hobbies",
    menu_training: "Training",
    menu_projects: "Projects",
    menu_contact_email: "rramirezfiallos@hotmail.com",
    menu_contact_link: "Contact",
    title_bio: "Hello, my name is Ron and I'm very into technology and constant learning",
    title_subsection: "Environmental Quality Engineer, with a passion for constant education, enthusiastic about technology, entrepreneurship, and contact sports.",
    title_github: "Github",
    title_linkedin: "Linkedin",
    title_instagram: "Instagram",
    title_resume: "Resume",
    // About Me
    about_title: "About me",
    about_p1: "In 2024, I have ventured into the Technology Industry to offer my professional services and create a company.",
    about_p2: 'I graduated as an Environmental Engineer and have 10 years of work experience in the public, private, and international cooperation sectors in roles related to environmental management, sustainable development, business management, and entrepreneurship. In 2022 I founded the startup "The Party Wagon" and in 2023 a programming school for children "Algorithmics School-Chinandega Branch".',
    // Skills & Hobbies
    skills_title: "Skills",
    hobbies_title: "Hobbies",
    // Academic Training
    academic_title: "Academic Training",
    academic_course1_title: "Data Analysis",
    academic_course2_title: "UX Design Training",
    academic_course3_title: "Postgraduate in Design",
    academic_course3_subtitle: "In progress - UFRJ",
    // Professional Experience
    experience_title: "Professional Experience",
    experience_project1_title: "Text Encryptor",
    experience_project1_desc: "Alura Encoder Challenge",
    experience_project2_title: "Hangman Game",
    experience_project2_desc: "Oracle Challenge",
    experience_repo_btn: "Repository",
    experience_demo_btn: "View demo",
    // Contact
    contact_title: "Contact",
    contact_subtitle1: "Do you want to contact me?",
    contact_subtitle2: "Fill out the following form and I will get in touch with you as soon as possible.",
    contact_placeholder_name: "Your name",
    contact_placeholder_email: "email@domain.com",
    contact_placeholder_subject: "Subject",
    contact_placeholder_message: "Write your message",
    contact_send_btn: "Send Message",
    // Footer
    footer_developed_by: "Developed by Ronald Ramírez F.",
    // Thank You Page
    thanks_title: "Thank you for your message!",
    thanks_p1: "I have received your form correctly and will get in touch with you as soon as possible.",
    thanks_back_btn: "Back to the main page",
    // Validation Errors
    validation_error_form: 'Please, correct the errors in the form.',
    validation_name_missing: 'The name field cannot be empty.',
    validation_name_short: 'Please, enter a name with at least 3 characters.',
    validation_email_missing: 'The e-mail field cannot be empty.',
    validation_email_invalid: 'Please, enter a valid email address.',
    validation_subject_missing: 'The subject field cannot be empty.',
    validation_subject_short: 'The subject must have at least 5 characters.',
    validation_message_missing: 'The message field cannot be empty.',
  }
};

// Función para obtener una traducción específica
function getTranslation(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || key;
}

// Función para establecer el idioma
const setLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(elem => {
        const key = elem.getAttribute('data-key');
        const translation = translations[lang][key];
        if (translation) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = translation;
            } else {
                elem.innerHTML = translation;
            }
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);

    // Actualiza el estilo de los botones de idioma
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
};

// Función para obtener el idioma actual
const getCurrentLanguage = () => {
    return localStorage.getItem('language') || 'es';
};

// Espera a que el DOM esté cargado para configurar todo
document.addEventListener('DOMContentLoaded', () => {
    const langES = document.getElementById('lang-es');
    const langEN = document.getElementById('lang-en');

    langES.addEventListener('click', () => setLanguage('es'));
    langEN.addEventListener('click', () => setLanguage('en'));

    // Establece el idioma inicial al cargar la página
    setLanguage(getCurrentLanguage());
});