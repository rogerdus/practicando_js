/// Function Declaration

function sumar(numero1,numero2){
    console.log(numero1+numero2);
}

sumar(10,20)


///function expression

const sumar2 = function (num1, num2){
    console.log(num1+num2);
}

sumar2(5, 10)


///arrow function
/// caracteristica 1 se puede hacer en una sola linea
const sumar3 = (num1, num2) => console.log(num1+num2);

//caracteristica 2 retorna sin return en una sola linea
const sumar4 = (num1, num2) => num1+num2;

console.log(sumar4);