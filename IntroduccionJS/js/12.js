
//iterar arreglos
const tecnologias = ['HTML', 'CSS','Javascript','React.js']

console.table(tecnologias);
console.log("------for----------");
///for
for(let i = 0; i < tecnologias.length; i++){
    console.log(tecnologias[i]);
}

///forEach
console.log("------forEach----------");
tecnologias.forEach(tech => {
    console.log(tech);
});

console.log("------map----------");
///map
///diferencias entre foreach el map genera un arreglo nuevo
tecnologias.map(tech => {
    console.log(tech);
});


/// for ... of
console.log("--------for of-------");

for( let tech of tecnologias){
    console.log(tech);
}

