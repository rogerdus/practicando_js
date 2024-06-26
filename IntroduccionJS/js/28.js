///selector
const heading = document.querySelector('.heading');

const enlaces = document.querySelectorAll('.navegacion a');

console.log(enlaces);


/// Manipular elementos HTML con js
heading.textContent = 'Hola mundo nuevo heading';


const inputNombre = document.querySelector('#nombre');
enlaces.forEach(enlace => enlace.textContent = 'nuevo enlace')

// Eventos en el DOM Clicks

heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar click'
})
enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        enlace.textContent = ' click en Nuevo enlace'
    })
})