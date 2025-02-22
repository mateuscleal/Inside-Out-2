// const contactForm = document.getElementById('contact-form');

// document.addEventListener('DOMContentLoaded', () => {
//     contactForm.addEventListener('submit', (event) => {
//         event.preventDefault(); 
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         alert(`Obrigado por sua mensagem, ${name}! Responderemos em breve no e-mail: ${email}`);
//         contactForm.reset();
//     });
// });

const contactForm = document.getElementById('contact-form');

document.addEventListener('DOMContentLoaded', () => {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Configuração do EmailJS
        emailjs.init({
            publicKey: 'seu ID',
        }); // Substitua com seu ID de usuário

        const templateParams = {
            name: name,
            notes: message,
          };

        // Enviar o e-mail
        emailjs.send('ID_EMAIL', 'ID_template', templateParams)
        .then(function (response) {
            alert(`Obrigado por sua mensagem, ${name}! Responderemos em breve no e-mail: ${email}`);
            contactForm.reset();
        }, function (error) {
            console.error('Erro ao enviar e-mail:', error);
        });
    });
});
