function saludar(nombre = "Nombre"){
  return`¡ Hola ${nombre} !`
}

saludar('pedro')

saludar()

//funciones
function Inventario(nombre)
{
  this.nombre = nombre;
  this.articulos = [];
}

///agregando funcion
Inventario.prototype.getNombre = function() { 
    return this.nombre;
}

Inventario.prototype.add = function(articulo, cantidad)
{
    this.articulos[articulo] = cantidad;
}
Inventario.prototype.cantidad = function(articulo){
  return  this.articulos[articulo];
}

let libros = new Inventario('libros');

libros.getNombre()
libros.add("Aprendiendo Javascript", 5)
libros.cantidad("Aprendiendo Javascript")


class Inventario{
  constructor( ){
    return this.nombre;
    this.articulos = [];
  }
  
  getNombre(){
    return this.nombre;
  }
  add(articulo,cantidad){
    this.articulos[articulo] = cantidad;
  }
  cantidad(articulo){
    return  this.articulos[articulo];
  }
}


let libros = new Inventario('libros');
libros.getNombre()
libros.add("Aprendiendo Javascript", 5)
libros.cantidad("Aprendiendo Javascript")
