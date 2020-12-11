import { leerTeclado } from './vistas/entradaTeclado'
import { Equipo, Equipos} from './model/equipo'
import { Programa } from './model/Programa'
import { Consumo } from './model/Consumo'
import { db } from './database/database'
import { menu } from './vistas/menu'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){

            case 1:
                let Eq1 : Equipo
                try {
                    let identificador= await leerTeclado('Introduce el nombre de identificación del nuevo equipo')
                    let tipo =  await leerTeclado('Introducir de que tipo de equipo se trata')
                    let marcha = JSON.parse (await leerTeclado('Indica si está o no apagado'))
                }
                
          
            case 0:
                console.log('\n Se acabó')
                break

                           
        }
    } while (n!=0);



}
main()