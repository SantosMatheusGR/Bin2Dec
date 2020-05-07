class ConversorController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputBinario = $('#binario');
        this._spanResposta = $('#resposta');
    }

    converter_OnClick(){
        let conversor = new Conversor(this._inputBinario.value)
        let resultado = conversor.converterParaDecimal();

        this._spanResposta.textContent = resultado;
    }
}