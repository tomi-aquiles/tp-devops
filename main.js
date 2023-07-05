// Datos de categorías y productos - estos podrían provenir de una base de datos o una API
const categorias = ["Todos", "Pods", "Vapers Electrónicos", "Mods de inicio", "Rta", "Rda", "Rdta", "Accesorios"];
const productos = [
  { nombre: "Vaper Modelo 1", imagen: "vaper1.jpg", precio: "$49.99" },
  { nombre: "Vaper Modelo 2", imagen: "vaper1.jpg", precio: "$59.99" },
  { nombre: "Vaper Modelo 3", imagen: "vaper1.jpg", precio: "$69.99" },
  // ... añade más productos aquí
];

// Generar categorías dinámicamente
const menuCategorias = document.querySelector(".category-menu");
categorias.forEach(categoria => {
  const nuevoElemento = document.createElement("a");
  nuevoElemento.classList.add("category-menu-item");
  nuevoElemento.href = `productos${categoria.replace(/\s/g, '')}.html`; // esto generará el enlace a la página de la categoría
  nuevoElemento.textContent = categoria;
  menuCategorias.appendChild(nuevoElemento);
});

// Generar productos dinámicamente
const productGrid = document.querySelector(".product-grid");
productos.forEach(producto => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.src = producto.imagen;
  productImg.alt = producto.nombre;

  const productTitle = document.createElement("h3");
  productTitle.textContent = producto.nombre;

  const productPrice = document.createElement("p");
  productPrice.textContent = producto.precio;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("button", "is-primary", "add-to-cart-button");

  const buttonIcon = document.createElement("span");
  buttonIcon.classList.add("icon");

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-plus");
  buttonIcon.appendChild(icon);

  addToCartButton.appendChild(buttonIcon);

  // Añade los elementos al tarjeta del producto
  productCard.appendChild(productImg);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);
  productCard.appendChild(addToCartButton);

  // Añade la tarjeta del producto a la cuadrícula de productos
  productGrid.appendChild(productCard);
});

// Funcionalidad del carrito de compras
const cartButton = document.getElementById('cartButton');
const cartItemCount = document.getElementById('cartItemCount');
let itemCount = 0;
cartButton.addEventListener('click', () => {
  itemCount++;
  cartItemCount.textContent = itemCount;
});
