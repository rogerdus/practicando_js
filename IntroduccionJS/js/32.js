/// eventos don

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    ///Prevenir nuevas alertas
    const alertasPrevias = document.querySelector('.alerta')
    alertasPrevias?.remove()

    const alerta = document.createElement('DIV')
    alerta.textContent = 'Datos enviados'
    alerta.classList.add('alerta', 'text-white','text-sm','text-center','p-2','font-black')

    if(nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('bg-red-500')
    }else{
        alerta.textContent = 'Todo ok :Ð'
        alerta.classList.add('bg-green-500')
    }
    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 3000)
});

