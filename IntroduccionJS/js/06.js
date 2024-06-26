const producto = {
    nombre: 'tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Rogelio',
    premium: true,
    direccion: {
        calle: 'calle 1',
        numero: 1
    }
}

const { nombre } = producto
const { nombre: nombreCliente , direccion : { calle }} = cliente

console.log(nombre);
console.log(nombreCliente,calle);

