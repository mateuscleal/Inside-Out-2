document.addEventListener("DOMContentLoaded", function () {
    // Bloquear botão direito do mouse
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        alert("Site desenvolvido pela Keise Karol e Mateus Leal");
    });
    
    // Bloquear a tecla [F12] e o atalho do DevTools [Ctrl + Shift + I] 
    document.addEventListener('keydown', function(event) {
        if (event.key === "F12" || KeyboardEvent.keyCode === 123) {
            event.preventDefault();
            alert("Site desenvolvido pela Keise Karol e Mateus Leal");
        }
        // Bloquear 
        if ((event.ctrlKey && event.shiftKey && event.key.toLocaleUpperCase() === "I") ||
            (event.ctrlKey && event.shiftKey && event.key.toLocaleUpperCase() === "C") ||
            (event.ctrlKey && event.shiftKey && event.key.toLocaleUpperCase() === "J") || 
            (event.ctrlKey && event.key.toLocaleUpperCase() === "U")) {
            event.preventDefault();
            alert("Site desenvolvido pela Keise Karol e Mateus Leal");
        }
    });


    (function detectDevTools() {
        let devtoolsOpen = false;
    
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                devtoolsOpen = true;
                alert('DevTools detectado! Feche as ferramentas de desenvolvedor para continuar.');
            }
        });
    
        setInterval(function () {
            devtoolsOpen = false;
            console.log(element);
            if (devtoolsOpen) {
                window.location.href = '/warning.html'; // Redireciona o usuário para uma página de aviso
            }
        }, 1000);
    })();

});

