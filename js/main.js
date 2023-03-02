// OCULTAMOS BARRA DE NAVEGACIÓN 
// almacenamos la primera posición en el eje Y
var prevScrollpos = window.pageYOffset;
// llamamos a la funcion cuando nos desplazamos por la ventana
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset; //actualizamos la posicion para compararla
    if (prevScrollpos > currentScrollPos) {
        //si no nos desplazamos la barra estará en la posición inicial 0   
        document.getElementById("navbar").style.top = "0";
    } else {
        //si nos movemos currentScrollPos será mayor a la pos inicial prevScrollpos
        //ocultamos la barra desplazandola a la posición de su tamaño   
        document.getElementById("navbar").style.top = "-64px";
    }
    //actualizamos las posiciones
    prevScrollpos = currentScrollPos;
}

var date = 'day';

// TRANSICIÓN DE LOS BOTONES
function cambiaColor(event){
    event.preventDefault();
    document.getElementById("botonhoy").classList.add('selected');
    document.getElementById("botonsemana").classList.remove('selected');
    var ancla = document.getElementById("day");
    date = ancla.getAttribute("href");
    tendencias(date);
}


function cambiaColor2(event){
    event.preventDefault();
    document.getElementById("botonhoy").classList.remove('selected');
    document.getElementById("botonsemana").classList.add('selected');
    var ancla = document.getElementById("week");
    date = ancla.getAttribute("href");
    tendencias(date);
}
 


const tendencias = async () => {

    let url = `https://api.themoviedb.org/3/trending/all/${date}?api_key=10311be6279b14b1d25a5d7f76295bb3`;
    const api = await fetch(url); //url + valor pagina
    const data = await api.json(); //de cada una obtendremos una respuesta en json
    // console.log(data);
    divPintar = document.querySelector("#card-container"); // 
    divPintar.innerHTML = "";

    data.results.map(item => {
        //console.log(item);

        divItem = document.createElement('div') //creamos div x cada element
        divItem.setAttribute("class", "card card-tendencia") //aplicamos clase
        divItem.innerHTML = `
            <div class="image">
                <div class="wrapper">
                <a href="#" class="image" title="" id="btn-selected">
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}" alt="" class="poster">
                </a>
                </div>
                <div class="options">
                <a href="#" class="no-click">
                    <span class="glyphicons_v2 circle-more white"></span>
                </a>
                </div>
            </div>
            <div class="content">
                <div class="concenso tight">
                <div class="anillo">
                    <div class="user-score" data-percent="6">
                    <div class="porcentaje">
                        <span class="icon"></span>
                    </div>
                    <canvas></canvas>
                    </div>
                </div>
                </div>
                <h2>
                <a href="" title="${item.title}">${item.title}</a>
                </h2>
                <p>${item.release_date}</p>
            </div>
            `
        divPintar.appendChild(divItem);

    });

}
tendencias();

const popular = async () => {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=10311be6279b14b1d25a5d7f76295bb3&with_watch_monetization_types=flatrate&watch_region=US";
    const api = await fetch(url); //url + valor pagina
    const data = await api.json(); //de cada una obtendremos una respuesta en json
    // console.log(data);
    divPintar = document.querySelector("#card-popular"); // 
    divPintar.innerHTML = "";

    data.results.map(item => {
        //console.log(item);

        divItem = document.createElement('div') //creamos div x cada element
        divItem.setAttribute("class", "card card-tendencia") //aplicamos clase
        divItem.innerHTML = `
            <div class="image">
                <div class="wrapper">
                <a href="#" class="image" title="">
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}" alt="" class="poster">
                </a>
                </div>
                <div class="options">
                <a href="#" class="no-click">
                    <span class="glyphicons_v2 circle-more white"></span>
                </a>
                </div>
            </div>
            <div class="content">
                <div class="concenso tight">
                <div class="anillo">
                    <div class="user-score" data-percent="6">
                    <div class="porcentaje">
                        <span class="icon"></span>
                    </div>
                    <canvas></canvas>
                    </div>
                </div>
                </div>
                <h2>
                <a href="" title="${item.title}">${item.title}</a>
                </h2>
                <p>${item.release_date}</p>
            </div>
            `
        divPintar.appendChild(divItem);

    });

}
popular();


const gratuitas = async () => {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=10311be6279b14b1d25a5d7f76295bb3&watch_region=US&with_watch_monetization_types=free";

    const api = await fetch(url); //url + valor pagina
    const data = await api.json(); //de cada una obtendremos una respuesta en json
    // console.log(data);
    divPintar = document.querySelector("#card-gratis"); // 
    divPintar.innerHTML = "";

    data.results.map(item => {
        //console.log(item);

        divItem = document.createElement('div') //creamos div x cada element
        divItem.setAttribute("class", "card card-tendencia") //aplicamos clase
        divItem.innerHTML = `
            <div class="image">
                <div class="wrapper">
                <a href="#" class="image" title="">
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}" alt="" class="poster">
                </a>
                </div>
                <div class="options">
                <a href="#" class="no-click">
                    <span class="glyphicons_v2 circle-more white"></span>
                </a>
                </div>
            </div>
            <div class="content">
                <div class="concenso tight">
                <div class="anillo">
                    <div class="user-score" data-percent="6">
                    <div class="porcentaje">
                        <span class="icon"></span>
                    </div>
                    <canvas></canvas>
                    </div>
                </div>
                </div>
                <h2>
                <a href="" title="${item.title}">${item.title}</a>
                </h2>
                <p>${item.release_date}</p>
            </div>
            `
        divPintar.appendChild(divItem);

    });

}
gratuitas();

// const trailers = async () => {
//     let url = "https://www.themoviedb.org/leaderboard";
//     const api = await fetch(url); //url + valor pagina
//     const data = await api.json(); //de cada una obtendremos una respuesta en json
//     console.log(data);

//     divPintar = document.querySelector("#tabla-clasificacion"); // 
//     divPintar.innerHTML = "";

//     data.results.map(item => {
//         console.log(item);

//         divItem = document.createElement('div') //creamos div x cada element
//         divItem.setAttribute("class", "card card-tendencia") //aplicamos clase
//         divItem.innerHTML = `
//             <div class="image">
//                 <div class="wrapper">
//                 <a href="#" class="image" title="">
//                     <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}" alt="" class="poster">
//                 </a>
//                 </div>
//                 <div class="options">
//                 <a href="#" class="no-click">
//                     <span class="glyphicons_v2 circle-more white"></span>
//                 </a>
//                 </div>
//             </div>
//             <div class="content">
//                 <div class="concenso tight">
//                 <div class="anillo">
//                     <div class="user-score" data-percent="6">
//                     <div class="porcentaje">
//                         <span class="icon"></span>
//                     </div>
//                     <canvas></canvas>
//                     </div>
//                 </div>
//                 </div>
//                 <h2>
//                 <a href="" title="${item.title}">${item.title}</a>
//                 </h2>
//                 <p>${item.release_date}</p>
//             </div>
//             `
//         divPintar.appendChild(divItem);

//     });

// }
// trailers();

