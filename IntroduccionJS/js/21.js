//Ternarios

const auth = true

const saldo = 1000
const pagar = 500
const tarjeta = false

// if(auth && saldo >= pagar){
//     console.log('Puedes pagar')
// }else{
//     console.log('No puedes pagar')
// }


///version con TAB
auth ?
    console.log("usuario autenticado")
    : console.log("No autenticado")

//version en una linea
auth && saldo >= pagar ? console.log('Puedes pagar') : console.log('No puedes pagar')


const alumno = {
    nombre: 'Fernando',
    apellido: 'Palacios',
    edad: 21,
    clase: 'Programacion',
    aprobado: true,
    examenes: {
        examen1: 100,
        examen2: 90,
    }
}


///// OPTIONAL CHAINING (?)
console.log(alumno.examenes?.examen3)

// Nullish coalescing operator (??)
const pagina = 10 ?? 1

console.log(pagina);


