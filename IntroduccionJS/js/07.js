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

const carrito = {
    cantidad: 1,
    ...producto
}

console.log(carrito);

const nuevoObjeto = {
    producto,
    cliente
}

console.log(nuevoObjeto);

///crea un nuevo objeto a partir de otros
nuevoObjeto2 = Object.assign( producto, cliente);
