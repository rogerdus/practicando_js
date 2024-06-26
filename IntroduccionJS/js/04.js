const producto = {
    nombre: 'tablet',
    precio: 300,
    disponible: true
}

console.log(producto);
console.table(producto);

// Destructuring
const { nombre, precio, disponible } = producto;
delete producto.precio;
console.log(nombre);

/// Object freeze
// congelar el objeto para que no se pueda modificar

Object.freeze(producto);
producto.disponible = false;

/// Permite modificar las propiedades existentes pero no agregar nuevas propiedades
Object.seal(producto);

producto.imagen = 'imagen.jpg';
