//eventos del DOM

const inputNombre = document.querySelector('#nombre')
const inputPassword = document.querySelector('#password')

inputNombre.addEventListener('input', (e) => {
    console.log('escribiendo en el input...')
    console.log(e.target.value);
})

inputPassword.addEventListener('input', functionPassword)

function functionPassword() {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 300);
}