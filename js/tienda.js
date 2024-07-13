let itemsJs = document.getElementById("itemsJs");
let carritoJs = document.getElementById("carritoJs");
let contadorElemento = document.querySelector(".contador");
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function formatearPrecio(numero) {
    return numero.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function actualizarContador() {
    contadorElemento.innerHTML = `<p>${carrito.length}</p>`;
}

actualizarContador();

function agregarEventoCompra(boton, product) {
    boton.addEventListener("click", function () {
        carrito.push(product);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContador();
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            offset: {
                x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 400 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
            newWindow: true,
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#363432",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    });
}

async function fetchProducts() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=raqueta%20de%20tenis');
    const data = await response.json();
    displayProducts(data.results);
    console.log(data);
}

function displayProducts(products) {
    const productContainer = document.getElementById('itemsJs');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = "col-12 col-sm-6 col-lg-4";

        productElement.innerHTML = `
            <div class="prod10">
                <img width="150" height="150" src=${product.thumbnail} alt=${product.title}>
                <div class="desc">
                    <p class="fs-5">${product.title}</p>
                </div>
                <p class="precio fs-5">$${formatearPrecio(product.price)}</p>
                <div class="btn">
                    <button type="button" class="boton-compra">Comprar</button>
                </div>  
            </div>
        `;

        productContainer.appendChild(productElement);

        let botonCompra = productElement.querySelector(".boton-compra");
        agregarEventoCompra(botonCompra, product);
    });  
}

document.addEventListener('DOMContentLoaded', fetchProducts);
