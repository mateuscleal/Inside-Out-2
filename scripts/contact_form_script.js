const contactForm = document.getElementById('contact-form');

document.addEventListener('DOMContentLoaded', () => {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Obrigado por sua mensagem, ${name}! Responderemos em breve no e-mail: ${email}`);
        contactForm.reset();
    });
});