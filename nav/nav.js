function toggleMenu() {
  var navToggle = document.querySelector(".nav-toggle");
  navToggle.classList.toggle("active");
}
document.addEventListener("click", function(event) {
  var navMenu = document.querySelector(".nav-links");
  var navToggle = document.querySelector(".nav-toggle");
  var isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInsideNav) {
    navToggle.classList.remove("active");
  }
});


function buscarProductos() {
  // Obtener el texto de búsqueda ingresado por el usuario
  var textoBusqueda = document.querySelector('.input').value.toLowerCase();

  // Obtener todos los elementos de productos
  var productos = document.querySelectorAll('.product-item');

  // Recorrer cada producto y mostrar u ocultar según el texto de búsqueda
  productos.forEach(function (producto) {
    var nombreProducto = producto.querySelector('h3').textContent.toLowerCase();

    if (nombreProducto.includes(textoBusqueda)) {
      producto.style.display = 'block'; // Mostrar producto
    } else {
      producto.style.display = 'none'; // Ocultar producto
    }
  });
}

// Agregar un event listener al input de búsqueda para ejecutar la función buscarProductos en cada cambio de texto
document.querySelector('.input').addEventListener('input', buscarProductos);
