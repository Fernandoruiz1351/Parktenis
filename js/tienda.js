{/* <div class="col-12 col-sm-6 col-lg-4">
                    <div class="prod10">
                        <img src="../resources/grip2.webp" alt="">
                        <div class="desc">
                            <p class="fs-5">Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional</p>
                        </div>
                        <p  class="precio fs-5">$10.000</p>
                        <div class="btn">
                            <button type="submit">Comprar</button>
                        </div>  
                    </div>
                </div> */}

function item(id, img, descrip, precio) {
    this.id = id;
    this.img = img;
    this.descrip = descrip;
    this.precio = precio;
}

let item1 = new item(1, "../resources/grip2.webp", "Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional", 10000);
let item2 = new item(2, "../resources/grip2.webp", "Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional", 10000);
let item3 = new item(3, "../resources/grip2.webp", "Grip Wilson - Ca Classic Sponge Color Negro- Apto Tenis / Paddle Profesional", 10000);

let itemsJs = document.getElementById("itemsJs");
let items = [item1, item2, item3];

let contador = 0; 

function agregarEventoCompra(boton) {
    boton.addEventListener("click", function () {
        contador++; 
        actualizarContador(); 
    });
}


function actualizarContador() {
    let contadorElemento = document.querySelector(".cart .contador p");
    contadorElemento.textContent = contador; 
}

for (let item of items) {
    let contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.classList.add("col-12", "col-sm-6", "col-lg-4");

    let divInterno = document.createElement("div");
    divInterno.classList.add("prod10");

    let imagen = document.createElement("img");
    imagen.src = item.img;
    imagen.alt = "";

    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("desc");

    let parrafoDescripcion = document.createElement("p");
    parrafoDescripcion.classList.add("fs-5");
    parrafoDescripcion.textContent = item.descrip;

    let parrafoPrecio = document.createElement("p");
    parrafoPrecio.classList.add("precio", "fs-5");
    parrafoPrecio.textContent = `$${item.precio}`;

    let boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Comprar";

    agregarEventoCompra(boton);

    divInterno.appendChild(imagen);
    divDescripcion.appendChild(parrafoDescripcion);
    divInterno.appendChild(divDescripcion);
    divInterno.appendChild(parrafoPrecio);

    let divBoton = document.createElement("div");
    divBoton.classList.add("btn");
    divBoton.appendChild(boton);

    divInterno.appendChild(divBoton);
    contenedorPrincipal.appendChild(divInterno);
    itemsJs.appendChild(contenedorPrincipal);
}

