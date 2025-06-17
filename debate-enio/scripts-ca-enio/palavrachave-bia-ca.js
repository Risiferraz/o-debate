paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "bia"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)