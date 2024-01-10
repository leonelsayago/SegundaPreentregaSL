

    // Array vacio
const productos = [];

// Clase constructora de objetos 
class Productos {
    constructor(nombre, precio, cantidad){
    this.id = productos.length +1 ,
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
 }
vender (){
    if (this.cantidad > 0) {
        this.cantidad -= 1;        
    } else {
        console.log(`No hay más stock de ${this.nombre}`);
    }
 }
}

// Declaración de los objetos e pusheado al array de objetos

const producto1 =  new Productos ("mouse", 4000, 10);
productos.push(producto1);
const producto2 = new Productos ("teclado", 8000, 10);
productos.push(producto2);
const producto3 = new Productos ("auriculares", 12000, 10);
productos.push(producto3);

let nombres = prompt("Bienvenidos a FerTec \ ¿Que accesiorio estás buscando?");
const producto = productos.find((item) => item.nombre === nombres.toLocaleLowerCase());

if(producto){
   alert(`
   Id: ${producto.id}
   Nombre: ${producto.nombre}
   Precio: ${producto.precio}
   `) 
}else{
    alert("No se encontró el producto")
    nombres = prompt("Ingrese el producto que busca")
};
let pedidoProducto = prompt("¿Que cantidad quieres?");



// Bucle "FOR OF" de los productos; impresión de cada producto.
for (const iterator of productos) {
    console.log(`
    ID: ${iterator.id}
    Nombre: ${iterator.nombre} 
    Precio: ${iterator.precio} 
    Cantidad en stock: ${iterator.cantidad}  `);
    
}

