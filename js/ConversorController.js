class ConversorController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputBinario = $('#binario');
        this._spanResposta = $('#resposta');
    }

    converter_OnClick(){
        event.preventDefault();
        if(this.validarInput()){
            let resultado = this.converterParaDecimal();
            this._spanResposta.textContent = 'Decimal: ' + resultado;
        }
    }

    converterParaDecimal(){
        let conversor = new Conversor(this._inputBinario.value)
        return conversor.converterParaDecimal();
    }

    validarInput(){
        if(this._inputBinario.value == ""){
            this._spanResposta.textContent = 'É necessário um número';
            return false;
        }
        let reg = new RegExp('^[0-1]+$');
        if(!reg.test(this._inputBinario.value)){
            this._spanResposta.textContent = 'A entrada precisa ser um número binário';
            return false;
        }
        return true;
    }
}