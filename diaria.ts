export class Diaria
{
    constructor(public qtdeHora:number, public valorHora:number, public horaAdicional:number){}

    total()
    {
        return this.valorHora + this.horaAdicional * (this.qtdeHora - 1)
    }


}