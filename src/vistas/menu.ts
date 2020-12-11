import { leerTeclado } from './entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Alta de nuevo equipo')
    console.log('2.- Añadir nueva programación')
    console.log('3.- Listado consumo de cada equipo')
    console.log('4.- on/off')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('Opción: ') )
    return n
}
