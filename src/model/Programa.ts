import {Schema, model} from 'mongoose'

export class Programa{

    private _fechaI : Date
    private _nivelF : number
    private _fechaF : Date
    
    constructor(fechaI:Date, nivelF:number, fechaF:Date){
        this._fechaI = fechaI
        this._nivelF = nivelF
        this._fechaF = fechaF
    }

    get fechaI(){
        return this._fechaI
    }

    get nivelF(){
        return this._nivelF
    }

    get fechaF(){
        return this._fechaF
    }
}
export const programaSchema = new Schema({
    _fechaI : {type : Date},
    _nivelUso : {type : Number},
    _fechaF : {type : Date},
    
})
