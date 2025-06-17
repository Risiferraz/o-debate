function disableLink(link) {
    link.style.display = 'none';
    var divId = link.id + '-opcao-nula';
    var divElement = document.getElementById(divId);
    divElement.style.display = 'block';
}

// Função para salvar e aplicar estados dos quadros
function applyQuadroState() {
    if (localStorage.getItem("quadro1") === "none") {
        document.getElementById("quadro1").style.display = "none";
    }
    if (localStorage.getItem("quadro2") === "block") {
        document.getElementById("quadro2").style.display = "block";
    }
    if (localStorage.getItem("quadro3") === "none") {
        document.getElementById("quadro3").style.display = "none";
    }
    if (localStorage.getItem("pagina-final") === "block") {
        document.getElementById("pagina-final").style.display = "block";
    }
}

// Função para verificar se todos os links foram clicados
function verificaSeTodosLinksForamClicados() {
    var allClicked = true;
    document.querySelectorAll('.opcao-link').forEach(function (link) {
        if (localStorage.getItem(link.id) !== 'clicked') {
            allClicked = false;
        }
    });

    if (allClicked) {
        document.getElementById("quadro2").style.display = "none";
        document.getElementById("quadro3").style.display = "none";
        document.getElementById("pagina-final").style.display = "block";
        localStorage.setItem("quadro2", "none");
        localStorage.setItem("quadro3", "none");
        localStorage.setItem("pagina-final", "block");
    }
}

document.querySelectorAll('.opcao-link').forEach(function (link) {
    if (localStorage.getItem(link.id) === 'clicked') {
        disableLink(link);
    }

    link.addEventListener('click', function (event) {
        event.preventDefault();

        disableLink(link);

        localStorage.setItem(link.id, 'clicked');

        setTimeout(function () {
            window.location.href = link.href;
        }, 500);

        // Esconder e mostrar os quadros e salvar o estado
        document.getElementById("quadro1").style.display = "none";
        localStorage.setItem("quadro1", "none");
        document.getElementById("quadro2").style.display = "block";
        localStorage.setItem("quadro2", "block");

        // Verifica se todos os links foram clicados
        verificaSeTodosLinksForamClicados();
    });
});

// Aplica o estado salvo dos quadros na inicialização
applyQuadroState();
