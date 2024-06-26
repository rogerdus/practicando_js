///ECMAScript Modules

import   { sumar, restar as functionLess, multiplicar, dividir } from './functiones.js';


const resultado1 = sumar(20, 30);
const resultado2 = functionLess(20, 30);
const resultado3 = multiplicar(20, 30);
const resultado4 = dividir(20, 30);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
