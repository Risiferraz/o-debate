paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "enio"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)