//funciones que manipulan los datos de arreglos
// shift, push, map , filter

/// modificar arreglos
const tecnologias = ['HTML', 'CSS','Javascript','Reac.js']

tecnologias.push('Node.js') //Agrega al final del arreglo

/// crear un arreglo a partir dele el actual
const nuevoArreglo = [...tecnologias, 'Vue.js']

console.table(tecnologias);

//eliminar el primer elemento de un arreglo

tecnologias.shift()

console.table(tecnologias);

/// eliminar sin mutar el arreglo

const tecnologias2 = tecnologias.filter(function(tech){
    return tech !== 'HTML'
})

console.table(tecnologias2);

/// ahora con map modificar el arreglo

const tecnologias3 = tecnologias.map(function(tech){
    if(tech === 'Node.js'){
        return 'Nest.js'
    }else{
        return tech
    }
})