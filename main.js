onload = () => {
    // 1. Elimina la clase "container" para activar animaciones
    document.body.classList.remove("container");

    // 2. Evita la traducción automática creando dinámicamente el texto "Anahi"
    let nameContainer = document.querySelector(".name");
    let text = ["A", "N", "A", "H", "I"];

    if (nameContainer) {
        nameContainer.innerHTML = ""; // Borra cualquier traducción previa

        text.forEach(letter => {
            let span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = letter;
            nameContainer.appendChild(span);
        });
    }

    // 3. Activa la música en caso de que el autoplay sea bloqueado
    const audio = document.getElementById('bg-music');
    if (audio) {
        window.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            }
        });
    }
};

