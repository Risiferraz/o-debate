paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
const palavraChave = "larissa"
if (paginasJaVisitadas== "") {
    paginasJaVisitadas += palavraChave
} else {
    paginasJaVisitadas += "," + palavraChave    
}
localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)