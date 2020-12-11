import {Schema, model } from 'mongoose'
import {Programa, programaSchema } from './Programa'
import { Consumo, consumoSchema } from './Consumo'

export class Equipo{
    private _identificador: string
    private _tipo: string
    private _marcha: boolean
    private _programac: Array<Programa>
    private _consumos: Array<Consumo>
    
    constructor(identificador: string, tipo: string,marcha : boolean, programac: Array<Programa>, consumos: Array<Consumo>){
        this._identificador = identificador
        this._tipo = tipo
        this._marcha = marcha
        this._programac = programac
        this._consumos = consumos
        
    }
    get identificador(){
        return this._identificador
    }

    get tipo(){
        return this._tipo
    }

    get marcha(){
        return this._marcha
    }

    get programac(){
        return this._programac

    }

}   
// La colección de la BD se pone siempre en Plural
export const Equipos = model('equipo')