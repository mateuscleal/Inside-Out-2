const contactForm = document.getElementById('contact-form');

document.addEventListener('DOMContentLoaded', () => {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.init({
            publicKey: 'DdilfkIvz8U1LWpT8',
        });

        const templateParams = {
            name: name,
            notes: message,
          };

        emailjs.send('service_qdx5hpd', 'template_47xb1xy', templateParams)
        .then(function (response) {
            alert(`Obrigado por sua mensagem, ${name}! Responderemos em breve no e-mail: ${email}`);
            contactForm.reset();
        }, function (error) {
            console.error('Erro ao enviar e-mail:', error);
        });
    });
});
