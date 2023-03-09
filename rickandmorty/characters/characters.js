document.getElementById("szuroGomb").addEventListener("click", function(){
    var szuroNev = document.getElementById("szuro").value;
    window.location.href = "http://127.0.0.1:5500/rickandmorty/characters/charcters.html?name=" + szuroNev;
}, false);

//https://rickandmortyapi.com/api/character
var urlParams = new URLSearchParams(window.location.search);
var page = Number(urlParams.get('page'));
var name = urlParams.get("name");

var apiUrl;

if(page != 0 && name != "null"){
    apiUrl = "https://rickandmortyapi.com/api/character?page=" + page + "&name=" + name;
}
else if(name != "null" && page == 0){
    apiUrl = "https://rickandmortyapi.com/api/character?name=" + name;
}
else if(name == "null" && page != 0){
    apiUrl = "https://rickandmortyapi.com/api/character?page=" + page;
}
else{
    apiUrl = "https://rickandmortyapi.com/api/character";
}

//Ha a page = 0 IGAZ akkor legyen 1, amugy page
page = ((page == 0) ? 1 : page);

var xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);

        var ul = document.getElementById("ul");

        //Elso oldal gomb
        var elsoA = document.createElement("a");
        elsoA.setAttribute("class", "page-link");

        var elsoUrl = "http://127.0.0.1:5500/rickandmorty/characters/charcters.html?page=1";
        if(name != "null"){
            elsoUrl += "&name=" + name;
        }
        elsoA.setAttribute("href", elsoUrl);
        elsoA.appendChild(document.createTextNode("First"));

        var elsoLi = document.createElement("li");
        elsoLi.setAttribute("class", "page-item");

        elsoLi.appendChild(elsoA);

        ul.appendChild(elsoLi);

        //Szamos gombok
        for(var i = (page - 1); i <= (page + 1); i++){
            var aktA = document.createElement("a");
            aktA.setAttribute("class", "page-link");
            

            var aktUrl = "http://127.0.0.1:5500/rickandmorty/characters/charcters.html?page=" + i;
            if(name != "null"){
                aktUrl += "&name=" + name;
            }
            aktA.setAttribute("href", aktUrl);
            aktA.appendChild(document.createTextNode(i));

            var aktLi = document.createElement("li");

            if(i == 0 || i == Number(json.info.pages) + 1){
                aktLi.setAttribute("class", "d-none");
            }
            else{
                aktLi.setAttribute("class", "page-item");
            }

            aktLi.appendChild(aktA);

            ul.appendChild(aktLi);
        }

        //Utolso oldal gomb
        var utolsoA = document.createElement("a");
        utolsoA.setAttribute("class", "page-link");

        var utolsoUrl = "http://127.0.0.1:5500/rickandmorty/characters/charcters.html?page=" + json.info.pages;
        if(name != "null"){
            utolsoUrl += "&name=" + name;
        }
        utolsoA.setAttribute("href", utolsoUrl);
        utolsoA.appendChild(document.createTextNode("Last"));

        var utolsoLi = document.createElement("li");
        utolsoLi.setAttribute("class", "page-item");

        utolsoLi.appendChild(utolsoA);

        ul.appendChild(utolsoLi);

        /*
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                
                <h6>Status</h6>
                <p>alive</p>

                Species
                Location
                Episodes
            </div>
        </div>
        */

        for(var i = 0; i < json.results.length; i++){
            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.appendChild(document.createTextNode(json.results[i].name));

            var h6Status = document.createElement("h6");
            var h6Species = document.createElement("h6");
            var h6Location = document.createElement("h6");
            var h6Episodes = document.createElement("h6");

            h6Status.appendChild(document.createTextNode("Status"));
            h6Species.appendChild(document.createTextNode("Species"));
            h6Location.appendChild(document.createTextNode("Location"));
            h6Episodes.appendChild(document.createTextNode("Episodes"));

            var pStatus = document.createElement("p");
            var pSpecies = document.createElement("p");
            var pLocation = document.createElement("p");
            var pEpisodes = document.createElement("p");

            pStatus.appendChild(document.createTextNode(json.results[i].status));
            pSpecies.appendChild(document.createTextNode(json.results[i].species));
            pLocation.appendChild(document.createTextNode(json.results[i].location.name));
            pEpisodes.appendChild(document.createTextNode(json.results[i].episode.length));

            var gomb = document.createElement("a");
            gomb.setAttribute("class", "btn w-100");
            gomb.setAttribute("id", "gomb");
            gomb.setAttribute("href", "http://127.0.0.1:5500/rickandmorty/characters/charcters.html?id=" + json.results[i].id + "&current=" + page);
            gomb.appendChild(document.createTextNode("Data sheet"));

            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            cardBody.appendChild(h5);
            cardBody.appendChild(h6Status);
            cardBody.appendChild(pStatus);
            cardBody.appendChild(h6Species);
            cardBody.appendChild(pSpecies);
            cardBody.appendChild(h6Location);
            cardBody.appendChild(pLocation);
            cardBody.appendChild(h6Episodes);
            cardBody.appendChild(pEpisodes);
            cardBody.appendChild(gomb);

            var img = document.createElement("img");
            img.setAttribute("class", "card-img-top");
            img.setAttribute("src", json.results[i].image);
            img.setAttribute("alt", json.results[i].name);
            img.setAttribute("title", json.results[i].name);

            var card = document.createElement("div");
            card.setAttribute("class", "card w-100 h-100");
            card.setAttribute("style", "width: 18rem;");

            card.appendChild(img);
            card.appendChild(cardBody);

            var cella = document.createElement("div");
            cella.setAttribute("class", "col-12 col-md-4 col-lg-3 my-3");

            cella.appendChild(card);

            document.getElementById("racs").appendChild(cella);
        }
    }
};

xhr.send(null);