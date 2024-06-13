let carritoJs = document.getElementById("carritoJs");
let resumen = document.getElementById("resumen");

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito);

function actualizarCarrito() {
    carritoJs.innerHTML = ''; 

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let contenedor = document.createElement("div");
        contenedor.className = "cart10";
        contenedor.innerHTML = `
            <div class="imagen">
                <img src=${item.img} alt="">
            </div>
            <div class="descCart">
                <p class="fs-5">${item.descrip}</p>
            </div>
            <p class="precio fs-5">$${item.precio}</p>
            <div class="btn">
                <button type="button" class="boton-eliminar">Eliminar</button>
            </div>  
        `;
        carritoJs.appendChild(contenedor);

        let botonEliminar = contenedor.querySelector(".boton-eliminar");
        botonEliminar.addEventListener("click", function() {
            eliminarItemDelCarrito(i);
        });
    }

    actualizarResumen();
}

function eliminarItemDelCarrito(index) {
    carrito.splice(index, 1); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    actualizarCarrito(); 
}

function actualizarResumen() {
    resumen.innerHTML = ''; 

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let resumenCompra = document.createElement("div");
        resumenCompra.className = "resumenProd";
        resumenCompra.innerHTML = `
            <b><p>Producto${i+1}</p></b>
            <div>
                <p>${item.descrip}</p>
                <p id="precio">$${item.precio}</p>
            </div>
        `;
        resumen.appendChild(resumenCompra);
    }
}

actualizarCarrito();





