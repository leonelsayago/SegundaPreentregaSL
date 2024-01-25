let prueba = document.getElementById("prueba");
prueba.innerHTML = `<h1> FerTec </h1><p>Brindamos Servicio Técnico en Telefonía de Celulares, con más de 11 años de experiencia en dicho rubro.  
También, contamos con todo tipo de protección para tu celu, accesorios para tu pc/notebook o tablet y muchisimos tipo de accesorios más... </p>`;

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
};
/*
// Suma del IVA
sumaIva (){ 
this.precio = this.precio * 1.21;
};
for (const interar of productos){
productos.sumaIva();
};*/


// Array vacio
const productos = [];

// Declaración de los objetos e pusheado al array de objetos

productos.push(new Productos ("mouse", 4000, 10));
productos.push(new Productos ("teclado", 8000, 10));
productos.push(new Productos ("auriculares", 12000, 10)); 

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

const divProductos = document.getElementById("productos"); 

let productosDisponibles = JSON.parse(localStorage.getItem("productos"));
document.addEventListener("DOMContentLoaded", () => {
  generarCardsProductos(productosDisponibles)
});



const generarCardsProductos = (productos) =>{

    productos.forEach(item => {
      let card = document.createElement("div");
      
      card.innerHTML = `<div class=""card>
                          <h2>ID: ${item.id} </h2>
                          <p>Producto: ${item.nombre}</p>
                          <b>$ ${item.precio}</b>
                          <button id="comprar${item.id}">Comprar</button>
                          </div>
                          `;
      divProductos.appendChild(card);

const btncomprar = document.getElementById(`comprar${item.id}`)
btncomprar.addEventListener("click", () => comprarProducto(`comprar${item.id}`))
  
});
};

/*
// CARRITO EN LOCALSTORAGE 

JSON.parse(sessionStorage.getElementById("carrito")) == null && sessionStorage.setItem("carrito", JSON.stringify([]));

let carrito = JSON.parse(sessionStorage.getItem("carrito"));

const comprarProducto = (idproducto) =>{
  const producto = productosDisponibles.find((producto) => producto.id == idproducto)
  const productoCarrito = carrito.find((producto) => producto.id == idproducto)

  if(productoCarrito == undefined){
    const nuevoProductoCarrito = {
      id: id,
      nombre: nombre,
      precio: precio
      cantidad: 1
    }

      carrito.push(nuevoProductoCarrito)
      sessionStorage.setItem("carrito", JSON.stringify(carrito))
  } else{

  }
};

//let carrito = [];


  





/*
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
*/

/*
//  Pedido de cantidad 
let pedidoProducto = prompt("¿Que cantidad quieres de "+ JSON.stringify(nombres)  +" quieres?");

if (pedidoProducto) {
    
} else {
    
}
*/

//////////////////////////               ---------                   //////////////////////////////////


