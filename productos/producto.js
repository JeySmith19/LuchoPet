const productos = [
  {
    id: 1,
    nombre: "Canbo cachorro/Puppy",
    categoria: "Comida",
    etiquetas: ["comida", "canbo", "perrito", "mascota", "cachorro", "verde", "saco", "alimento", "bolsa"],
    imagen: "img/canbo-puppy.png",
    precio: 110.00,
    descripcion: "Canbo cachorro/Puppy 7kg"
  },
  {
    id: 2,
    nombre: "Saco Ricocat adulto",
    categoria: "Comida",
    etiquetas: ["comida", "gato", "mascota", "animal", "michi", "gatito", "adulto", "bolsa"],
    imagen: "img/ricocat-adulto.png",
    precio: 88.00,
    descripcion: "Croquetas Ricocat 9kg"
  },
  {
    id: 3,
    nombre: "Saco Ricocat gatito",
    categoria: "Comida",
    etiquetas: ["gatito", "cria", "gato", "comida", "saco", "comida", "bolsa"],
    imagen: "img/ricocat.png",
    precio: 88.00,
    descripcion: "Saco Ricocat gatitos 9kg"
  },
  {
    id: 4,
    nombre: "Saco Thor cachorro",
    categoria: "Comida",
    etiquetas: ["comida", "perro", "thor", "alimento", "saco", "mascota", "bolsa"],
    imagen: "img/thor-cachorro.png",
    precio: 127.00,
    descripcion: "Saco Thor cachorro 25kg"
  },
  {
    id: 5,
    nombre: "Saco Ricocan multisabor",
    categoria: "Comida",
    etiquetas: ["ricocan", "perro", "mascota", "can", "saco", "adulto", "raza", "bolsa"],
    imagen: "img/toda-raza.png",
    precio: 110.00,
    descripcion: "saco ricocan todas las razas 15kg"
  },
  {
    id: 6,
    nombre: "Saco Ricocan raza pequeña",
    categoria: "Comida",
    etiquetas: ["comida", "raza", "pequeña", "perro", "mascota", "ricocan", "alimento", "bolsa"],
    imagen: "img/cachorro.png",
    precio: 115.00,
    descripcion: "Saco Ricocan cachorro raza pequeña 25kg"
  },
  {
    id: 7,
    nombre: "Saco Michicat",
    categoria: "Comida",
    etiquetas: ["gato", "comida", "saco", "alimento", "nutritivo", "mascota", "bolsa"],
    imagen: "img/michicat.png",
    precio: 115.00,
    descripcion: "Saco Michicat 15kg"
  },
  {
    id: 8,
    nombre: "Saco Supercan cachorro",
    categoria: "Comida",
    etiquetas: ["comida", "alimento", "cachorro", "perrito", "supercan", "bolsa"],
    imagen: "img/supercancachorro.png",
    precio: 108.00,
    descripcion: "Saco Supercan cachorro 15kg"
  },
  {
    id: 9,
    nombre: "Saco Supercan Adulto",
    categoria: "Comida",
    etiquetas: ["perro", "mascota", "adulto", "supercan", "bolsa"],
    imagen: "img/supercanadulto.png",
    precio: 108.00,
    descripcion: "Saco Supercan adulto 15kg"
  },
  {
    id: 10,
    nombre: "Canbo adulto todas las razas",
    categoria: "Comida",
    etiquetas: ["comida", "canbo", "perro", "mascota", "bolsa"],
    imagen: "img/canbo-cordero.png",
    precio: 195.00,
    descripcion: "Canbo Adulto Cordero razas medianas y grandes 15kg"
  },
  {
    id: 11,
    nombre: "Ricocan cordero y cereales",
    categoria: "Comida",
    etiquetas: ["adulto", "perro", "mascota", "cordero", "bolsa"],
    imagen: "img/multisabores.png",
    precio: 115.00,
    descripcion: "Ricocan cordero y cereales adultos 15kg"
  },
  {
    id: 12,
    nombre: "Lata pate babycan",
    categoria: "Comida",
    etiquetas: ["lata", "pate", "trocitos", "perrito", "mascota", "cachorro", "baby", "ricocan"],
    imagen: "img/pate-perro.png",
    precio: 6.80,
    descripcion: "Ricocan pate babycan"
  },
  {
    id: 13,
    nombre: "Lata trocito Ricocan",
    categoria: "Comida",
    etiquetas: ["lata", "trocitos", "pate", "alimento", "cachorro", "perro", "mascota"],
    imagen: "img/trocitos.png",
    precio: 5.80,
    descripcion: "Ricocan trocitos en salsa sabor cordero"
  },
  {
    id: 14,
    nombre: "Purina Proplan",
    categoria: "Comida",
    etiquetas: ["purina", "perro", "comida", "medicina", "alimento", "bolsa"],
    imagen: "img/proplan-perro.png",
    precio: 96.00,
    descripcion: "Purina Proplan adulto 3kg"
  },
  {
    id: 15,
    nombre: "Canbo Cat Food",
    categoria: "Comida",
    etiquetas: ["comida", "gato", "proplan", "alimento", "cat", "canbo", "bolsa"],
    imagen: "img/canbo-gato.png",
    precio: 33.00,
    descripcion: "Canbo Cat Food adulto esterilizado"
  },
  {
    id: 16,
    nombre: "Equilibrio Pelos longos",
    categoria: "Comida",
    etiquetas: ["gato", "comida", "equilibrio", "medicina", "alimento", "gato", "mascota"],
    imagen: "img/equilibrio-gato.png",
    precio: 89.00,
    descripcion: "Equilibrio Pelos longos gato adulto 1,5kg"
  },
  {
    id: 17,
    nombre: "Equilibrio Veterinary ",
    categoria: "Comida",
    etiquetas: ["perro", "mascota", "alimento", "cuidado", "rico", "adulto", "equilibrio"],
    imagen: "img/equilibrio-perro.png",
    precio: 89.00,
    descripcion: "Equilibrio Veterinary para perros 2kg"
  },
  {
    id: 18,
    nombre: "Suplemento lacteo",
    categoria: "Comida",
    etiquetas: ["leche", "comida", "mascota", "gato", "perro", "polvillo", "bolsa"],
    imagen: "img/leche.png",
    precio: 10.00,
    descripcion: "Suplemento lacteo 1kg"
  },
  {
    id: 19,
    nombre: "Crecimiento",
    categoria: "Comida",
    etiquetas: ["pollo", "polvo", "alimento", "ave", "crecimiento"],
    imagen: "img/crecimiento.png",
    precio: 3.50,
    descripcion: "Crecimiento aves y cerdos 1kg"
  },
  {
    id: 20,
    nombre: "Inicio",
    categoria: "Comida",
    etiquetas: ["inicio", "crecimiento", "comida", "pollo", "chancho", "cerdo", "alimento"],
    imagen: "img/inciio.png",
    precio: 4.50,
    descripcion: "Alimento inicio para aves y cerdos 1kg"
  },
  {
    id: 21,
    nombre: "Engorde",
    categoria: "Comida",
    etiquetas: ["engorde", "pollo", "cerdo", "ave", "mascota", "polvo"],
    imagen: "img/engorde.png",
    precio: 3.00,
    descripcion: "Alimento engorde para aves y cerdos 1kg"
  },
  {
    id: 22,
    nombre: "Alimento para peces",
    categoria: "Comida",
    etiquetas: ["pescado", "peces", "comida", "saco", "piscigranja"],
    imagen: "img/alimento-pez.png",
    precio: 147.00,
    descripcion: "Alimento para peces 40kg"
  },
  {
    id: 23,
    nombre: "Alimento cuy Corimix",
    categoria: "Comida",
    etiquetas: ["cuy", "comida", "saco", "alimento", "fuerte"],
    imagen: "img/alimento-cuy.png",
    precio: 110.00,
    descripcion: "Alimento cuy Corimix crecimiento 40kg"
  },
  {
    id: 24,
    nombre: "Saco maiz entero",
    categoria: "Comida",
    etiquetas: ["maiz", "choclo", "pollo", "comida", "ave", "gallina", "chancho"],
    imagen: "img/maiz.png",
    precio: 80.00,
    descripcion: "Saco de maíz entero"
  },
  {
    id: 25,
    nombre: "Polvillo de arroz",
    categoria: "Comida",
    etiquetas: ["polvillo", "arroz", "avez", "pollo", "chancho", "comida", "saco"],
    imagen: "img/polvillo.png",
    precio: 38.50,
    descripcion: "Saco de polvillo de arroz avez y cerdos"
  },
  {
    id: 26,
    nombre: "Torta de soya",
    categoria: "Comida",
    etiquetas: ["168.00"],
    imagen: "img/soya.png",
    precio: 168.00,
    descripcion: "Saco de torta de soya para aves"
  },
  {
    id: 27,
    nombre: "Afrecho de trigo",
    categoria: "Comida",
    etiquetas: ["afrecho", "trigo", "maiz", "pollo", "gallina", "pollo", "ave", "saco", "comida"],
    imagen: "img/afrecho.png",
    precio: 68.00,
    descripcion: "Saco de afrecho de trigo 40kg"
  },
  {
    id: 28,
    nombre: "Cama para mascotas",
    categoria: "Accesorios",
    etiquetas: ["cama", "perro", "colchon", "gato", "animal", "camita", "colchon"],
    imagen: "img/cama.png",
    precio: 35.00,
    descripcion: "Camas de diferentes tamaños y variedades"
  },
  {
    id: 29,
    nombre: "Platos para mascotas",
    categoria: "Accesorios",
    etiquetas: ["plato", "metal", "comida", "perro", "gato", "mascota", "plastico"],
    imagen: "img/platos.png",
    precio: 8.00,
    descripcion: "Platos de plástico y de aluminio de diferentes variedades"
  },
  {
    id: 30,
    nombre: "Bebedores y dispensadores",
    categoria: "Accesorios",
    etiquetas: ["plato", "dispensador", "agua", "comida", "croquetas", "rosa", "celeste"],
    imagen: "img/dispensadores.png",
    precio: 45.00,
    descripcion: "Dispensadores y bebedores en diferentes modelos"
  },
  {
    id: 31,
    nombre: "Pecheras",
    categoria: "Accesorios",
    etiquetas: ["pecheras", "perro", "pitbull", "perro", "mascotas", "collar"],
    imagen: "img/pecheras.png",
    precio: 20.00,
    descripcion: "Pecheras en diferentes modelos y marcas importadas"
  },
  {
    id: 32,
    nombre: "Collares",
    categoria: "Accesorios",
    etiquetas: ["pecheras", "collares", "perro", "gato", "mascota", "animal"],
    imagen: "img/collar.png",
    precio: 25.00,
    descripcion: "Collares en diferentes modelos, diseños y tamaños"
  },
  {
    id: 33,
    nombre: "Cadenas",
    categoria: "Accesorios",
    etiquetas: ["collar", "pechera", "cadenitas", "cadena", "perro", "gato", "mascota"],
    imagen: "img/cadena.png",
    precio: 12.00,
    descripcion: "Cadenas de diferentes tamaños"
  },
  {
    id: 34,
    nombre: "Huesitos",
    categoria: "Juguetes",
    etiquetas: ["Juguetes", "accesorios", "perro", "mascota", "mordedor"],
    imagen: "img/hueso.png",
    precio: 25.00,
    descripcion: "Huesitos masticables para perros"
  },
  {
    id: 35,
    nombre: "Juguetes",
    categoria: "Juguetes",
    etiquetas: ["Juguetes", "accesorios", "perro", "mascota", "pelota", "pollo", "mordedor"],
    imagen: "img/juguetes.png",
    precio: 12.00,
    descripcion: "Juguetes en diferentes presentaciones para tus engreídos"
  },
  {
    id: 36,
    nombre: "Bósales",
    categoria: "Accesorios",
    etiquetas: ["bosales", "perros", "mascotas", "cuidado"],
    imagen: "img/bosal.png",
    precio: 35.00,
    descripcion: "Bósales en diferentes presentaciones y calidades"
  },
  {
    id: 37,
    nombre: "Ropita",
    categoria: "Accesorios",
    etiquetas: ["ropa. vestido", "polo", "perro", "gato", "animal", "accesorios"],
    imagen: "img/ropa.png",
    precio: 25.00,
    descripcion: "Diferentes modelitos, colores y tamaños"
  },
  {
    id: 38,
    nombre: "Shampoo Amigo Maximo",
    categoria: "Higiene",
    etiquetas: ["shampo", "shampoo", "baño", "perro", "gato", "mascota", "pulga", "garrapata", "acaros", "sarna"],
    imagen: "img/shampoo-amigo.png",
    precio: 15.00,
    descripcion: "Shampoo Amigo Maximo contra garrapatas, acaros y la sarna"
    },
    {
    id: 39,
    nombre: "Shampoo K-nino",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/k-nino.png",
    precio: 15.00,
    descripcion: "Shampoo acción inmediata contra pulgas piojos y garrapatas"
    },
    {
    id: 40,
    nombre: "Shampoo Doky´s",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/rosa-dokys.png",
    precio: 28.00,
    descripcion: "Shampoo medicado con chlorhexidina y miconazol"
    },
    {
    id: 41,
    nombre: "Shampoo Doky´s",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/azul-dokys.png",
    precio: 15.00,
    descripcion: "Shampoo antipulgas para control de pulgas y garrapatas"
    },
    {
    id: 42,
    nombre: "Shampoo Golfin",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/golfin.png",
    precio: 12.00,
    descripcion: "Shampoo para la eliminación de ácaros, pulgas, garrapatas, etc."
    },
    {
    id: 43,
    nombre: "Shampoo Hipoalergénico sachet",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna", "medicado"],
    imagen: "img/avena.png",
    precio: 4.00,
    descripcion: "Shampoo con avena y glicerina para piel delicada"
    },
    {
    id: 44,
    nombre: "Shampoo Amigo sachet",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/amigo-sachet.png",
    precio: 2.00,
    descripcion: "Sachet de shampoo contra garrapatas ácaros de la sarna"
    },
    {
    id: 45,
    nombre: "Shampoo Doky´s Sachet",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/azul-sachet-doky.png",
    precio: 3.00,
    descripcion: "Ideal para el control de pulgas, piojos, etc."
    },
    {
    id: 46,
    nombre: "Shampoo Golfin sachet",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/golfin-sachet.png",
    precio: 2.50,
    descripcion: "Para la eliminación y el control de pulgas, ácaros, etc."
    },
    {
    id: 47,
    nombre: "Shampoo Sarna",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/shampo-sarna.png",
    precio: 4.00,
    descripcion: "Anti sárnico, garrapatas y piojioida."
    },
    {
    id: 48,
    nombre: "Spray K-nino + Shampoo",
    categoria: "Higiene",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna"],
    imagen: "img/kanino-spray.png",
    precio: 35.00,
    descripcion: "Spray AntiPulgas para Perros y Gatos 400Ml Garrapatas K-nino + Shampoo"
    },
    {
    id: 49,
    nombre: "Bolfo plus polvo",
    categoria: "Parasitos",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna", "polvo"],
    imagen: "img/bolfo-plus.png",
    precio: 7.00,
    descripcion: "Polvo para control de pulgas y piojos"
    },
    {
    id: 50,
    nombre: "Fiproler Spray",
    categoria: "Parasitos",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna", "polvo"],
    imagen: "img/fiproler.png",
    precio: 30.00,
    descripcion: "Spray Antipulgas y Garrapatas VETLINEX Frasco Transparente 500ml"
    },
    {
    id: 51,
    nombre: "Efectivon",
    categoria: "Parasitos",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna", "polvo", "spray"],
    imagen: "img/efectivon.png",
    precio: 30.00,
    descripcion: "Efectivon- Spray Antipulgas 300 ml. (Hipoalergénico)"
    },
    {
    id: 52,
    nombre: "Ampollas y pastillas",
    categoria: "Ampollas y pastillas",
    etiquetas: ["shampoo", "shampo", "perro", "garrapata", "acaro", "pulga", "piojo", "mascota", "canino", "gato", "sarna", "polvo", "parasitos", "ampolla", "esterilizante", "pastilla", "control"],
    imagen: "img/ampollas.png",
    precio: 20.00,
    descripcion: "Ampollas y pastillas para el cuidado de mascotas domesticas"
    }
  
];
  
// Función para crear el botón de compra en la tarjeta de producto
function crearBotonCompra(numeroWhatsApp) {
  const botonCompra = document.createElement("button");
  botonCompra.textContent = "Comprar";
  botonCompra.addEventListener("click", () => {
    window.open(`https://wa.me/${numeroWhatsApp}`, "_blank");
  });
  return botonCompra;
}

// Función para renderizar todos los productos en la página
function mostrarTodosLosProductos() {
  renderProductos(productos);
}

// Llamar a la función para mostrar todos los productos al cargar la página
mostrarTodosLosProductos();

// Función para renderizar los productos en la página
function renderProductos(productos) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  productos.forEach(producto => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = producto.imagen;
    productImage.alt = producto.nombre;
    productCard.appendChild(productImage);

    const productName = document.createElement("p");
    productName.textContent = producto.nombre;
    productCard.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `S/.${producto.precio.toFixed(2)}`;
    productCard.appendChild(productPrice);

    const productDescription = document.createElement("p");
    productDescription.textContent = producto.descripcion;
    productCard.appendChild(productDescription);

    const botonCompra = crearBotonCompra("931533177"); // Número de WhatsApp para compra
    productCard.appendChild(botonCompra);

    productContainer.appendChild(productCard);
  });
}

// Función para filtrar los productos por búsqueda
function filtrarProductos(busqueda) {
  const resultado = productos.filter(producto => {
    return (
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.etiquetas.some(etiqueta =>
        etiqueta.toLowerCase().includes(busqueda.toLowerCase())
      ) ||
      producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  renderProductos(resultado);
}

// Evento para búsqueda en tiempo real en modo escritorio
document.getElementById("searchInput").addEventListener("input", event => {
  const busqueda = event.target.value.trim();
  filtrarProductos(busqueda);
});

// Evento para búsqueda en tiempo real en modo responsive
document.getElementById("searchInputResponsive").addEventListener("input", event => {
  const busqueda = event.target.value.trim();
  filtrarProductos(busqueda);
});


// Obtener categorías únicas de los productos
const categoriasUnicas = [...new Set(productos.map(producto => producto.categoria))];

// Renderizar las categorías en la barra lateral
const categoriasList = document.getElementById("categorias");
categoriasUnicas.forEach(categoria => {
  const li = document.createElement("li");
  li.textContent = categoria;
  li.addEventListener("click", () => filtrarProductos(categoria));
  categoriasList.appendChild(li);
});

// Función para crear y renderizar los números de páginas en el paginador
function renderizarPaginas(totalProductos, productosPorPagina, paginaActual) {
  const paginasTotales = Math.ceil(totalProductos / productosPorPagina);
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";

  // Función para agregar un botón de página al paginador
  function agregarBotonPagina(numeroPagina) {
    const paginaSpan = document.createElement("span");
    paginaSpan.textContent = numeroPagina;
    paginaSpan.addEventListener("click", () => cambiarPagina(numeroPagina, productosPorPagina));
    paginationContainer.appendChild(paginaSpan);
  }

  // Mostrar botones para las primeras páginas
  for (let i = 1; i <= Math.min(2, paginasTotales); i++) {
    agregarBotonPagina(i);
  }

  // Mostrar puntos suspensivos si hay más páginas antes de la página actual
  if (paginaActual > 3) {
    const puntosSuspensivosAntes = document.createElement("span");
    puntosSuspensivosAntes.textContent = "...";
    paginationContainer.appendChild(puntosSuspensivosAntes);
  }

  // Mostrar botones para las páginas cercanas a la página actual
  for (let i = Math.max(3, paginaActual - 1); i <= Math.min(paginaActual + 1, paginasTotales - 2); i++) {
    agregarBotonPagina(i);
  }

  // Mostrar puntos suspensivos si hay más páginas después de la página actual
  if (paginaActual < paginasTotales - 2) {
    const puntosSuspensivosDespues = document.createElement("span");
    puntosSuspensivosDespues.textContent = "...";
    paginationContainer.appendChild(puntosSuspensivosDespues);
  }

  // Mostrar botones para las últimas páginas
  for (let i = Math.max(paginasTotales - 1, 3); i <= paginasTotales; i++) {
    agregarBotonPagina(i);
  }
}

// Función para cambiar la página actual y mostrar los productos correspondientes
function cambiarPagina(pagina, productosPorPagina) {
  const startIndex = (pagina - 1) * productosPorPagina;
  const endIndex = startIndex + productosPorPagina;
  const productosMostrados = productos.slice(startIndex, endIndex);
  renderProductos(productosMostrados);

  // Establecer la página activa en el paginador
  const paginationContainer = document.querySelector(".pagination");
  const paginas = paginationContainer.querySelectorAll("span");
  paginas.forEach(paginaSpan => {
    if (Number(paginaSpan.textContent) === pagina) {
      paginaSpan.classList.add("active");
    } else {
      paginaSpan.classList.remove("active");
    }
  });
}

// Número de productos a mostrar por página
let productosPorPagina = 6;

// Página actual, se inicializa en 1
let paginaActual = 1;

// Función para actualizar la cantidad de productos por página según el tamaño de pantalla
function actualizarProductosPorPagina() {
  if (window.innerWidth <= 768) {
    productosPorPagina = 3;
  } else {
    productosPorPagina = 6;
  }
}

// Evento para ajustar la cantidad de productos por página al cambiar el tamaño de pantalla
window.addEventListener("resize", actualizarProductosPorPagina);

// Ejecutar la función inicialmente para configurar la cantidad de productos por página
actualizarProductosPorPagina();

// Evento para mostrar todos los productos al hacer clic en el botón "Ver todo"
document.getElementById("verTodasCategorias").addEventListener("click", () => {
  mostrarTodosLosProductos();
});