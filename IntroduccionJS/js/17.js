const numeros = [10,20,30]
const tecnologias  = ['HTML','CSS','JavaScript','React.js']

///Filter con arrow function 

const newArray = tecnologias.filter((tech) => tech !== 'HTML')

console.log(newArray);

/// Includes

const resultado = tecnologias.includes('CSS')

console.log(resultado);


///Some -Devuelve su almenos 1 cumple con la condicion
const result = numeros.some(numero => numero > 15)

console.log(result);

// Find - Devuelve el primer elemento que cumple la condicion
const res = numeros.find(numero => numero > 15)

console.log(res);

//Every - Retorna true si todos cumple la condicion

const every = numeros.every(numero => numero > 15)

console.log(every);

//Reduce - Retorna un acumulado del total

const resultadoReduce = numeros.reduce((total, numero) => total + numero,0)

console.log(resultadoReduce);