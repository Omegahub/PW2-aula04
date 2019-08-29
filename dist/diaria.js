"use strict";
exports.__esModule = true;
var Diaria = /** @class */ (function () {
    function Diaria(qtdeHora, valorHora, horaAdicional) {
        this.qtdeHora = qtdeHora;
        this.valorHora = valorHora;
        this.horaAdicional = horaAdicional;
    }
    Diaria.prototype.total = function () {
        return this.valorHora + this.horaAdicional * (this.qtdeHora - 1);
    };
    return Diaria;
}());
exports.Diaria = Diaria;
