// Função para alternar a visibilidade do menu
function toggleMenu() {
    var menu = document.getElementById("menuDropdown");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Esconde o menu se estiver visível
    } else {
        menu.style.display = "block"; // Mostra o menu se estiver oculto
    }
}

// Evento que fecha o menu ao clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) { // Verifica se o elemento clicado não é um botão do menu
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") { // Verifica se o menu está visível
                openDropdown.style.display = "none"; // Esconde o menu
            }
        }
    }
}