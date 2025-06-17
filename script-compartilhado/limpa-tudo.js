class LimpaTudo {
    constructor() {
        this.htmlBotao = document.getElementById("limpa-tudo")
        this.htmlBotao.addEventListener("click", ()=> this.limpandoTudo())
    }
    limpandoTudo() {
        try {
            window.localStorage.clear();
            console.log("LocalStorage limpo com sucesso.");
            alert("LocalStorage limpo com sucesso")
          } catch (error) {
            console.error("Erro ao limpar o LocalStorage:", error);
          }
    }
}

new LimpaTudo()