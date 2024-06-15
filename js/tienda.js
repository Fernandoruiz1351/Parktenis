function item(id, img, descrip, precio) {
    this.id = id;
    this.img = img;
    this.descrip = descrip;
    this.precio = precio;
}

let item1 = new item(1, "../resources/grip2.webp", "Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional", 10000);
let item2 = new item(2, "../resources/grip1.webp", "Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional", 10000);
let item3 = new item(3, "../resources/pelotas2.webp", "Tubo Penn 3 Pelotitas Tenis Championship Sello Negro Paddle Tennis Profesional", 11500);
let item4 = new item(4, "../resources/pelotas1.webp", "Pelotas De Tenis Wilson Performance X 3", 11000);
let item5 = new item(5, "../resources/remera5.webp", "Musculosa Wilson Deportiva Mujer (97514) - S+w", 18500);
let item6 = new item(6, "../resources/remera3.webp", "Polo Chomba Wilson Deportiva Tenis Padel Squash Golf Hombre", 31500);
let item7 = new item(7, "../resources/remera2.webp", "Remera Wilson Training Drifit Tenis Padel", 28500);
let item8 = new item(8, "../resources/remera1.webp", "Remera Camiseta Deportiva Hombre Gdo Fit Tenis Padel", 23000);
let item9 = new item(9, "../resources/raqueta5.webp", "Raqueta Tenis Dunlop 21 Cx200 Tennis Competicion Profesional", 170000);
let item10 = new item(10, "../resources/raqueta4.webp", "Raqueta De Tenis Babolat Niños Pure Drive Jr 26 Grip 4 1/8 Color Azul", 195000);
let item11 = new item(11, "../resources/raqueta3.webp", "Raqueta Tenis Head Novak 21 Junior Niños Encordada Funda Color Verde", 250000);
let item12 = new item(12, "../resources/grip2.webp", "Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional", 10000);

let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

let itemsJs = document.getElementById("itemsJs");
let carritoJs = document.getElementById("carritoJs");
let contadorElemento = document.querySelector(".contador");
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function actualizarContador() {
    contadorElemento.innerHTML = `<p>${carrito.length}</p>`;
}


actualizarContador();

function agregarEventoCompra(boton, item) {
    boton.addEventListener("click", function () {
        carrito.push(item);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContador();
        console.log(carrito);
    });
}

for (let item of items) {
    let contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.className = "col-12 col-sm-6 col-lg-4";
    contenedorPrincipal.innerHTML = `
        <div class="prod10">
            <img src=${item.img} alt="">
            <div class="desc">
                <p class="fs-5">${item.descrip}</p>
            </div>
            <p class="precio fs-5">$${item.precio}</p>
            <div class="btn">
                <button type="button" class="boton-compra">Comprar</button>
            </div>  
        </div>
    `;
    itemsJs.appendChild(contenedorPrincipal);

    let botonCompra = contenedorPrincipal.querySelector(".boton-compra");
    agregarEventoCompra(botonCompra, item);
}
