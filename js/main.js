const productos = [
  {id: 1, producto: "Abrochadora", precio: 10000},
  {id: 2, producto: "Block de hojas A4", precio: 12000},
  {id: 3, producto: "Cuaderno", precio: 6000},
  {id: 4, producto: "Folio A4", precio: 300},
];

function mostrarProductos() {
  console.log("Productos disponibles:");
  for (let i = 0; i < 4; i++) {
    console.log(productos[i].id + " - " + productos[i].producto + ": $" + productos[i].precio);
  }
}

function simulacionLibreria() {
  console.log("Librería Online");

  mostrarProductos();

  let total = 0;
  let seguir = true;
  let carrito = [];

  while (seguir) {
    let productoElegido = null;

    while (productoElegido === null) {
      let input = prompt("Ingresá el número del producto que querés comprar:");

      if (input === null) {
        console.log("Selección cancelada. Saliendo del simulador.");
        return;
      }

      let seleccion = parseInt(input);

      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === seleccion) {
          productoElegido = productos[i];
          break;
        }
      }

      if (productoElegido === null) {
        console.log("Número inválido. Por favor, intentá de nuevo.");
      }
    }

    carrito.push(productoElegido);
    total += productoElegido.precio;

    console.log("Agregaste: " + productoElegido.producto + " - Precio: $" + productoElegido.precio);
    console.log("Total acumulado: $" + total);

    seguir = confirm("¿Querés agregar otro producto?");
  }

  console.log("Productos en tu carrito:");
  for (let i = 0; i < carrito.length; i++) {
    console.log("- " + carrito[i].producto + ": $" + carrito[i].precio);
  }

  console.log("Total a pagar: $" + total);
}

simulacionLibreria();
