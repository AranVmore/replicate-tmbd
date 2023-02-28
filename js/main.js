




    const tendencias = async () => {
        var url = "https://api.themoviedb.org/3/trending/all/day?api_key=10311be6279b14b1d25a5d7f76295bb3";
        const api = await fetch(url); //url + valor pagina
        const data = await api.json(); //de cada una obtendremos una respuesta en json
        // console.log(data);
        divPintar = document.querySelector("#card-container"); // 
        divPintar.innerHTML="";    
    
        data.results.map(item => { 
            //console.log(item);

            divItem = document.createElement('div') //creamos div x cada element
            divItem.setAttribute("class","card card-tendencia") //aplicamos clase
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
    tendencias();

    const popular = async () => {
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=10311be6279b14b1d25a5d7f76295bb3&with_watch_monetization_types=flatrate&watch_region=US";
        const api = await fetch(url); //url + valor pagina
        const data = await api.json(); //de cada una obtendremos una respuesta en json
        // console.log(data);
        divPintar = document.querySelector("#card-popular"); // 
        divPintar.innerHTML="";    
    
        data.results.map(item => { 
            //console.log(item);

            divItem = document.createElement('div') //creamos div x cada element
            divItem.setAttribute("class","card card-tendencia") //aplicamos clase
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
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=10311be6279b14b1d25a5d7f76295bb3&watch_region=US&with_watch_monetization_types=free";
        
        const api = await fetch(url); //url + valor pagina
        const data = await api.json(); //de cada una obtendremos una respuesta en json
        // console.log(data);
        divPintar = document.querySelector("#card-gratis"); // 
        divPintar.innerHTML="";    
    
        data.results.map(item => { 
            //console.log(item);

            divItem = document.createElement('div') //creamos div x cada element
            divItem.setAttribute("class","card card-tendencia") //aplicamos clase
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

    const trailers = async () => {
        var url = "https://www.themoviedb.org/leaderboard";
        const api = await fetch(url); //url + valor pagina
        const data = await api.json(); //de cada una obtendremos una respuesta en json
        console.log(data);

        divPintar = document.querySelector("#tabla-clasificacion"); // 
        divPintar.innerHTML="";    
    
        data.results.map(item => { 
            console.log(item);

            divItem = document.createElement('div') //creamos div x cada element
            divItem.setAttribute("class","card card-tendencia") //aplicamos clase
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
    trailers();
