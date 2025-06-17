// alert ("OK! TÁ ACESSANDO O SCRIPT")
// document.getElementById("sair-salvar-ja").addEventListener("click", ()=>{
//     const paginasJaVisitadas = localStorage.getItem("paginasJaVisitadas")
//     localStorage.setItem("paginasJaVisitadas", paginasJaVisitadas)
//     alert ("OS DADOS FORAM SALVOS")
//     window.open('', '_self'); 
//     window.close();
// })

class BotaoSair {
    constructor (){
        this.html = document.getElementById("sair-salvar-final")
        this.gerenciadorDeSave = new GerenciadorDeSave()
        this.html.addEventListener("click",() => this.salvaESai())
    }
    salvaESai() {
        const dadosSalvosJson = this.gerenciadorDeSave.atualizaDadosDoSave()
        window.localStorage.setItem("dadosSalvos", dadosSalvosJson)
        window.location.href = "home.html";
    }
    pegaDadosSalvos() {
        const dadosSalvosJson=(!!window.localStorage.getItem("dadosSalvos"))?window.localStorage.getItem("dadosSalvos"):0
        const dadosSalvos = JSON.parse(dadosSalvosJson)
        if(!dadosSalvos) {
            console.log("sem dados salvos")
            return this.pegaDadosZerados()
        }
        return dadosSalvos
    }
    pegaDadosZerados() {
        return{
            numerosAleatoriosJaSorteados: []
        }
    }
}