// Tenemos un li de productos

const productos = [
  //Corregí las rutas de las imagenes
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg"}
]
//Corregí el método, renombre las variables y agregué const botonFiltro
const listaProductos = document.getElementById("lista-de-productos")
const input = document.getElementById("input")
const btn = document.getElementById("btn")

//Agregué una función
function mostrarProductos(productosMostrar) {
  listaProductos.innerHTML = "";

  productosMostrar.forEach(producto =>{
  //Cambié variable var por const
  const d = document.createElement("div");
  d.classList.add("producto");

  //Cambié variable var por const
  const ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = producto.nombre;

  //Cambié variable var por const
  const imagen = document.createElement("img");
  //reacomodo
  imagen.src = producto.img;
  imagen.alt = producto.nombre;

  d.appendChild(ti)
  d.appendChild(imagen)
  listaProductos.appendChild(d)
    
  })
}
  
//displayProductos(productos) - No esta definido

//Acomode función filtrado
function filtrado(productos, texto){
  return productos.filter(item =>
    item.tipo.includes(texto) ||
    item.color.includes(texto)
  );
}

btn.onclick = function() {
  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  mostrarProductos(productosFiltrados);
}

//Se visualizaran todos los productos
mostrarProductos(productos);

