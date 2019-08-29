class viagem
{
    //  TempoGasto: number
    // velocidadeMedia: number
    // rendimentoVeiculo :  number

    constructor(public tempoGasto:number, public velocidadeMedia:number, public redimentoVeiculo:number){}

    Distancia()
    {
        return this.tempoGasto * this.velocidadeMedia
      
    }

    Consumo()
    {
        return this.Distancia() / this.redimentoVeiculo
    }
    


    
}