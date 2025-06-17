class GerenciadorDeLinks {
    constructor() {
        this.htmlBotao = document.getElementById("sair-salvar-ja")
        this.htmlBotao.addEventListener("click", ()=> this.salva())
    }
    salva() {
        const link = document.URL;
        window.localStorage.setItem("linkParaVoltar", link)
        window.location.href = "../home.html";
    }
    navegaParaTelaCertaSeNecessario() {
        const link = window.localStorage.getItem("linkParaVoltar")
        if(!!link) {
            window.location.href = link; 
        }
    }
}
