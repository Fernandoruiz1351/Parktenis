let carritoJs = document.getElementById("carritoJs");
let resumen = document.getElementById("resumen");
let total = document.getElementById("total");
let totalPagos = document.getElementById("totalPagos");

function formatearPrecio(numero) {
    return numero.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function cuota(cuota, interes) {
    this.cuota = cuota;
    this.interes = interes;
}

let cuota1 = new cuota(1, 0);
let cuota3 = new cuota(3, 10);
let cuota6 = new cuota(6, 16);
let cuota12 = new cuota(12, 21);

let cuotas = [cuota1, cuota3, cuota6, cuota12];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let totalCompra = 0;

let pagoCuotas = document.createElement("div");

function pago() {
    totalPagos.innerHTML = "";
    for (let c of cuotas) {
        let formasPago = document.createElement("div");
        formasPago.className = "pagos";
        formasPago.innerHTML = `
            <div class="btn" id="btn">
                <button type="button" class="cuotas">${c.cuota} cuota/s</button> (Interes ${c.interes}%)
            </div>
        `;
        totalPagos.appendChild(formasPago);

        let botonCuotas = formasPago.querySelector(".cuotas");
        botonCuotas.addEventListener("click", function () {
            pagoCuotas.innerHTML="";
            pagoCuotas.innerHTML=`
                                <p>Cantidad de productos(${carrito.length})-----$${formatearPrecio(totalCompra)}</p>
                                <p>Interes(${c.interes}%)-----$${formatearPrecio(totalCompra*(c.interes/100))}</p>
                                <p>Precio final-----$${formatearPrecio(totalCompra + totalCompra*(c.interes/100))}</p>
                                <div class="btn">
                                    <button type="button" class="boton-finalizar">Finalizar</button>
                                </div>  
            `;
            formasPago.appendChild(pagoCuotas)

            let botonFinalizar = pagoCuotas.querySelector(".boton-finalizar");
            botonFinalizar.addEventListener("click", function () {
                window.location.href = "finalizar.html"; 
                carrito=[]
                localStorage.setItem('carrito', JSON.stringify(carrito));
            });
        });
    }
}

function actualizarResumen() {
    resumen.innerHTML = ''; 
    total.innerHTML = '';
    totalCompra = 0;

    for (let i = 0; i < carrito.length; i++) {
        let product = carrito[i];
        totalCompra += product.price;
        let resumenCompra = document.createElement("div");
        resumenCompra.className = "resumenProd";
        resumenCompra.innerHTML = `
            <b><p>Producto ${i + 1}</p></b>
            <div>
                <p>${product.title}</p>
                <p id="precio">$${formatearPrecio(product.price)}</p>
            </div>
        `;
        resumen.appendChild(resumenCompra);
    }
    
    let totCompra = document.createElement("div");
    totCompra.innerHTML = `
        <b><h4>Total:</b><span>$${formatearPrecio(totalCompra)}</span></h4>
        <div class="btn">
            <button type="button" class="boton-finalizar">Comprar</button>
        </div>                 
    `;
    total.appendChild(totCompra);

    let botonFinalizar = totCompra.querySelector(".boton-finalizar");
    botonFinalizar.addEventListener("click", pago);
}

function actualizarCarrito() {
    carritoJs.innerHTML = ''; 

    for (let i = 0; i < carrito.length; i++) {
        let product = carrito[i];
        let contenedor = document.createElement("div");
        contenedor.className = "cart10";
        contenedor.innerHTML = `
            <div class="imagen">
                <img src=${product.thumbnail} alt="">
            </div>
            <div class="descCart">
                <p class="fs-5">${product.title}</p>
            </div>
            <p class="precio fs-5">$${formatearPrecio(product.price)}</p>
            <div class="btn">
                <button type="button" class="boton-eliminar">Eliminar</button>
            </div>  
        `;
        carritoJs.appendChild(contenedor);

        let botonEliminar = contenedor.querySelector(".boton-eliminar");
        botonEliminar.addEventListener("click", function () {
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

actualizarCarrito();