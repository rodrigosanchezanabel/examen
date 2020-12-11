import {Schema, model} from 'mongoose'

export class Consumo{

    private _nivelUso : number
    private _kw : number
       
    constructor(nivelUso:number, kw:number){
        this._nivelUso = nivelUso
        this._kw = kw
    }

    get nivelUso(){
        return this._nivelUso
    }

    get kw(){
        return this._kw
    }

    listaConsumo(){
        
            return `El equipo tiene un nivel de uso de  ${this._nivelUso} y un consumo de  ${this._kw} kw/h`
        
    }

}

export const consumoSchema = new Schema({
    _nivelUso : {type : Number},
    _kw : {type : Number},
})
