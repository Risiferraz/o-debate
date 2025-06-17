// alert ("OK! TÁ ACESSANDO O SCRIPT")
paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "andre"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)