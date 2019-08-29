var viagem = /** @class */ (function () {
    //  TempoGasto: number
    // velocidadeMedia: number
    // rendimentoVeiculo :  number
    function viagem(tempoGasto, velocidadeMedia, redimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.redimentoVeiculo = redimentoVeiculo;
    }
    viagem.prototype.Distancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    viagem.prototype.Consumo = function () {
        return this.Distancia() / this.redimentoVeiculo;
    };
    return viagem;
}());
