paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "fred"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)