//Destructuring array


const tecnologias = ['HTML', 'CSS','Javascript','React.js']

console.table(tecnologias)

//forma habitual
const react = tecnologias[3]

const [html, css,js,reactjs] = tecnologias

console.log(react);

// solo Javascript

const [, , variable3 ] = tecnologias

console.log(variable3);