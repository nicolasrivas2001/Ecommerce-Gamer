let Televisores="Televisores";
let Teclados="Teclados";
let Notebooks="Notebooks";
let Mouses="Mouses";
let Ofertas="Ofertas";
let arrCarrito=[];


function init(){
    mostrarLogo();
    listarOfertas("Ofertas");
    listarCategorias();
    crearFooter();
}


function listarOfertas(idCategoria){
    window.scroll({
        top: 0,
        left: 0,
        behavior:"smooth"
    });
    let nodoProductos=document.getElementById("productos");
    nodoProductos.innerHTML="";
    let lista=document.createElement("div");
    const prodCat=productos.filter(element=> element.categoria===idCategoria);
    let i=0;
    let carrito=document.getElementById("carrito-dropdown");
    carrito.innerHTML=`
                        <div class="contenedor-total">
                        <div>Total: </div>
                        <div id=total> $0</div>
                        </div>
                        <a href="formulario.html" id="finalizarCompra"><p>Finalizar compra</p></a>
                        `;
    let totalCarrito=0; 
    /*botonFinalizarCompra=document.getElementById("finalizarCompra");
    botonFinalizarCompra.addEventListener("click",()=>{
        let nodoNumeroCarrito=parseInt(document.getElementById("numero-carrito").innerHTML);

        if(nodoNumeroCarrito!==0){
            nodoNumeroCarrito.innerHTML=0;
        let carritoCheck=document.getElementById("carrito-dropdown");
        carritoCheck.checked=false;
        let total=document.getElementById("total")
        let carrito=document.getElementById("carrito-dropdown")
        carrito.innerHTML=`
        <div class="contenedor-total">
            <div>Total: </div>
            <div id=total> $0</div>
            </div>
        <a href="/formulario.js" id="finalizarCompra"><p>Finalizar compra</p></a>
        `;
        total.innerHTML=0
        alert("Su compra se ha realizado con exito. Muchas gracias!");
        }else{
            alert("No ha seleccionado ningun producto. Porfavor, eliga al menos uno para realizar la compra")
        }
    });*/
    while(i<prodCat.length){
            let item=document.createElement("div");
            item.innerHTML=`<div>
            <div><img src="${prodCat[i].imagen}"></div>
            <div><h3>${prodCat[i].nombre}</h3></div>
            <div>${prodCat[i].marca}</div>
            <div>$${prodCat[i].precio}</div>
            <div id="agregarAlCarrito"><div>Agregar al Carrito</div></div>
            </div>`;
            let prod=prodCat[i].nombre;
            let precio=prodCat[i].precio;
            let img=prodCat[i].imagen;
            item.addEventListener("click",()=>{
                let nodoNumeroCarrito=document.getElementById("numero-carrito");
                let numeroCarrito=document.getElementById("numero-carrito").innerHTML;
                numeroCarrito++;
                nodoNumeroCarrito.innerHTML=`${numeroCarrito}`;
                totalCarrito=totalCarrito+precio; 
                let carrito=document.getElementById("carrito-dropdown");
                let elem=document.createElement("div");
                let elem2=document.createElement("div");
                let elem3=document.createElement("div");
                let contenedorEliminar=document.createElement("div");
                let eliminar=document.createElement("button");
                let hr=document.createElement("hr")
                eliminar.innerHTML="Eliminar";
                contenedorEliminar.appendChild(eliminar);
                elem.innerHTML=prod;
                elem2.innerHTML="$"+precio;
                elem3.innerHTML=`<img class="img-dropdown" src=${img}>`
                carrito.prepend(hr);
                carrito.prepend(contenedorEliminar);
                carrito.prepend(elem2);
                carrito.prepend(elem);
                carrito.prepend(elem3);
                let total=document.getElementById("total");
                total.innerHTML=`$${totalCarrito}`;
                eliminar.addEventListener("click",()=>{
                    let nodoNumeroCarrito=document.getElementById("numero-carrito");
                    let numeroCarrito=document.getElementById("numero-carrito").innerHTML;
                    numeroCarrito--;
                    nodoNumeroCarrito.innerHTML=`${numeroCarrito}`;
                    carrito.removeChild(contenedorEliminar)
                    carrito.removeChild(elem)
                    carrito.removeChild(elem2)
                    carrito.removeChild(elem3)
                    carrito.removeChild(hr)
                    let total=document.getElementById("total");
                    total.innerHTML=`${totalCarrito=totalCarrito-precio}`;
                });
             })
                   
            lista.append(item);
            i++;
    }
    
    nodoProductos.appendChild(lista);
}


function mostrarLogo(){
    const contLogo=$("#contenedorLogo");
    const logo=$("<img onclick=`listarProductos(`ofertas`)`></img>");
    logo.attr("src","logo.jpg");
    logo.attr("id","logo");
    contLogo.append(logo);
}

const posicionarPantalla=()=>{
    window.scroll({
        top: 0,
        left: 0});
}
function listarCategorias(){
    let nodoCategorias=document.getElementById("categorias");
    let contenido="<ul>";
    let i=0;
    while (i<categorias.length){
        contenido+=`<li onclick="listarProductos(${categorias[i].nombre})">${categorias[i].nombre}</li>`;
        i++;
    }
    contenido+="</ul>"
    nodoCategorias.innerHTML=contenido;
    
    let carrito=document.getElementById("carrito");
    carrito.innerHTML=`<input type="checkbox" name="boton" id="btn-carrito">
    <label id="imgCarrito" for="btn-carrito"><img src="carrito.png" alt=""></label>`;
    let checkCarrito=document.getElementById("btn-carrito");
    checkCarrito.addEventListener('click', ()=> {
        if(checkCarrito.checked) {
            let nodoCarrito=$("#carrito-dropdown");
            nodoCarrito.css({
                "top":"10%"
            })
        } else {
            let nodoCarrito=$("#carrito-dropdown");
            nodoCarrito.css({
            "top":"900%"
        })
        }
      });
}


function listarProductos(idCategoria){
    window.scroll({
        top: 0,
        left: 0});
    let nodoProductos=document.getElementById("productos");
    nodoProductos.innerHTML="";
    let lista=document.createElement("div");
    const prodCat=productos.filter(element=> element.categoria===idCategoria);
    let i=0;
    let carrito=document.getElementById("carrito-dropdown");
    let totalCarrito=0; 
    while(i<prodCat.length){
            let item=document.createElement("div");
            item.innerHTML=`<div>
            <div><img src=${prodCat[i].imagen}></div>
            <div><h3>${prodCat[i].nombre}</h3></div>
            <div>${prodCat[i].marca}</div>
            <div>$${prodCat[i].precio}</div>
            <div id="agregarAlCarrito"><div>Agregar al Carrito</div></div>
            </div>`;
            let prod=prodCat[i].nombre;
            let precio=prodCat[i].precio;
            let img=prodCat[i].imagen;
            item.addEventListener("click",()=>{
                let nodoNumeroCarrito=document.getElementById("numero-carrito");
                let numeroCarrito=document.getElementById("numero-carrito").innerHTML;
                numeroCarrito++;
                nodoNumeroCarrito.innerHTML=`${numeroCarrito}`;
                totalCarrito=totalCarrito+precio; 
                let carrito=document.getElementById("carrito-dropdown");
                let elem=document.createElement("div");
                let elem2=document.createElement("div");
                let elem3=document.createElement("div");
                let contenedorEliminar=document.createElement("div");
                let eliminar=document.createElement("button");
                let hr=document.createElement("hr")
                eliminar.innerHTML="Eliminar";
                contenedorEliminar.appendChild(eliminar);
                elem.innerHTML=prod;
                elem2.innerHTML="$"+precio;
                elem3.innerHTML=`<img class="img-dropdown" src=${img}>`
                carrito.prepend(hr);
                carrito.prepend(contenedorEliminar);
                carrito.prepend(elem2);
                carrito.prepend(elem);
                carrito.prepend(elem3);
                let total=document.getElementById("total");
                total.innerHTML=`$${totalCarrito}`;
                eliminar.addEventListener("click",()=>{
                    let nodoNumeroCarrito=document.getElementById("numero-carrito");
                    let numeroCarrito=document.getElementById("numero-carrito").innerHTML;
                    numeroCarrito--;
                    nodoNumeroCarrito.innerHTML=`${numeroCarrito}`;
                    elem.innerHTML="";
                    elem2.innerHTML="";
                    carrito.removeChild(contenedorEliminar)
                    carrito.removeChild(elem3)
                    carrito.removeChild(hr)
                    let total=document.getElementById("total");
                    total.innerHTML="$"+`${totalCarrito=totalCarrito-precio}`;
                });
             }) 
            lista.append(item);
            i++;
    }
    nodoProductos.appendChild(lista);
}


function actualizarCarrito(producto){
    let nodoCarrito=document.getElementById("carrito-dropdown");
    let nuevoProd=document.createElement("div");
    nuevoProd.innerHTML=producto;
    nodoCarrito.appendChild(nuevoProd);
}

function crearFooter(){
    let nodoFooter=document.getElementById("footer");
    nodoFooter.innerHTML=`<div
                    <div id="titulo-footer"><h2>Mansión <br>Electrodomesticos</h2></div>
                    <div>
                        <h3>Menú</h3>
                        <p>Ofertas</p>
                        <p>Televisores</p>
                        <p>Notebooks</p>
                        <p>Mouses</p>
                        <p>Teclados</p>
                    </div>
                    <div>
                        <h3>Contacto</h3>
                        <p>Buenos Aires, Argentina</p>
                        <p>+54 1125637483</p>
                        <p>boomer@contacto.com</p>
                    </div>
                    </div>
    `;
}