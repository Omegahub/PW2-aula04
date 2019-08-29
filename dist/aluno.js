"use strict";
exports.__esModule = true;
var Aluno //classe
 = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome : " + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
/*
    nome: string
    constructor(nome: string)
        {
            this.nome = nome
        }
*/
