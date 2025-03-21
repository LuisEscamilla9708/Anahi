onload = () => {
        // 1. Elimina la clase "container" para activar animaciones
        document.body.classList.remove("container");

document.addEventListener("DOMContentLoaded", function() {
    let nameContainer = document.querySelector(".name");
    let text = ["A", "N", "A", "H", "I"];

    nameContainer.innerHTML = ""; // Borra cualquier traducción previa

    text.forEach(letter => {
      let span = document.createElement("span");
      span.classList.add("letter");
      span.textContent = letter;
      nameContainer.appendChild(span);

        
        // 2. Activa la música en caso de que el autoplay sea bloqueado
        const audio = document.getElementById('bg-music');
        window.addEventListener('click', () => {
            if (audio && audio.paused) {
                audio.play();
            }
        });
    };
    
