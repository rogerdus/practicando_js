"use strict"
let mensaje: string = "Hola mundo"

mensaje = "prueba de cambio"

console.log(mensaje)
/*TIPOS DE DATOS JS
/**
 * number
 *  string
 * boolean 
 * null
 * undefined
 * object
 * function
 * TIPOS DE TS
 * any
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * TIPOS INFERIDOS
 */

console.log(typeof [])


let extincionDinosaurios = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extincion: boolean = true

function chanchitoFeliz(config: any) {
    return config
}


/*COMO INICIALIZAR LOS DATOS*/
let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2]
let checks: boolean[] = []
let nums2: Array<number> = []

//animales.map(x => x.) ////sugiere autocompletado de acuerdo al tipo de dato definido


let tupla: [number, string[]] = [1, ['chanchito feliz', 'chancho felipe']]
tupla = [2, ['chanchito']]

/**ENUMS  */
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'
///enums van en PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', Extragrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

//IFE -> INMEDIATED INVOKED FUNCTION EXPRESSION
// var Talla;
// (function (Talla) {
//     Talla["Chica"] = "s";
//     Talla["Mediana"] = "m";
//     Talla["Grande"] = "l";
//     Talla["Extragrande"] = "xl";
// })(Talla || (Talla = {}));

////si lo declaras asi reduce y optimiza el codigo
const enum LoadingState { Idle, Loading, Success, Error }
const estado = LoadingState.Success


////declarar tipados
type Direction = {
    number: number,
    street: string,
    country?: string
}
////reuzar tipados ya declarados
type Persona = {
    readonly id: number,
    name?: string,
    talla: Talla,
    address: Direction
}

const object: Persona  = { 
    id: 1,
    name: '',
    talla: Talla.Grande,
    address: { number: 1, street: 'Siempre viva', country: 'Chanchitolandia' } 
    }

const arr: Persona[] = []

const fn: (a: number) => string = (edad: number) => {
    if(edad > 17){
        return 'puedes ingresar'
    }
    return 'no puedes ingresar'
}

function validaEdad(edad:number): string
{
    if(edad > 17){
            return 'puedes ingresar&
        }
    return 'no puedes ingresar'
}


validaEdad(18)

/** NEVER  */
/// se usa cuando no se retorna nada pero se lanzan excepciones
function ErrorUsuario(): never
{
    throw new Error('error de usuario')
}



