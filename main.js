onload = () => {
        // 1. Elimina la clase "container" para activar animaciones
        document.body.classList.remove("container");
    
        // 2. Activa la música en caso de que el autoplay sea bloqueado
        const audio = document.getElementById('bg-music');
        window.addEventListener('click', () => {
            if (audio && audio.paused) {
                audio.play();
            }
        });
    };
    