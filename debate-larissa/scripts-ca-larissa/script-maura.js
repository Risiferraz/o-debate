// alert ("OK! TÁ ACESSANDO O SCRIPT")
let paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
desativarOpcaoJaSelecionada()
function desativarOpcaoJaSelecionada() {
  if (paginasJaVisitadas == null) {
    paginasJaVisitadas = ""
  } else {
    const lista = paginasJaVisitadas.split(",")
    if (!!lista && lista.length > 0) {
      lista
        .filter(pagina => pagina != "null")
        .filter(pagina => pagina != "")
        .forEach(pagina => {
          // document.getElementById(pagina).style.display = "none"
          document.getElementById(pagina).style.opacity = "0.1"
          console.log("pagina", pagina)
        });
    }
  }
}
//Abaixo função que faz a página abrir no começo (no top da página)
document.addEventListener("DOMContentLoaded", function () {
  const html = document.querySelector('html');
  html.scrollTop = '0px';
});
// Abaixo link FINAL que leva de volta a escolha dos "DEBATES"
document.getElementById("link").addEventListener("click", () => {
  window.location.href = "../index-debate.html";
})
const listaDeOpcoes = document.getElementsByClassName("opcao-link")
for (const opcao of listaDeOpcoes) {
  opcao.addEventListener("click", event => {
    const lista = paginasJaVisitadas.split(",")
    if (!!lista && lista.includes(opcao.id)) {
      event.preventDefault()
    }
  })
}
const lista = paginasJaVisitadas.split(",")
if (lista.includes("bia")
  && lista.includes("andre")
  && lista.includes("enio")
  && lista.includes("fred")
  && lista.includes("maura")) {
  document.getElementById("quadro10").style.display = "none";
  document.getElementById("fonte").style.display = "none";
  document.getElementById("tela-final").style.display = "block";
}