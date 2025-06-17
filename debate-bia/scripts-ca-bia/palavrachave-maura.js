paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "maura"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)