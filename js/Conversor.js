class Conversor{

    constructor(binario){
        this._binario = binario;
    }

    converterParaDecimal(){
        let binario = parseInt(this._binario);
        return parseInt(binario, 2).toString();
    }
}