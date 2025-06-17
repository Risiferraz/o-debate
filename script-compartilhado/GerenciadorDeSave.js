class GerenciadorDeSave {
    constructor() {
        this.html=document.getElementById("dados-salvos-json")
    }
    atualizaDadosDoSave() {
        const numerosAleatoriosJaSorteados = document.getElementById('numeros-de-livros-salvos').textContent
        const dadosParaSalvar = {pontuacao, tempoGasto, numerosAleatoriosJaSorteados}
        this.html.textContent=JSON.stringify(dadosParaSalvar)
        return this.html.textContent
    }
}