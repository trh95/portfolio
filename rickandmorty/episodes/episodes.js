//https://rickandmortyapi.com/api/episode
var urlParams = new URLSearchParams(window.location.search);
var page = Number(urlParams.get('page'));

//Ha a page = 0 IGAZ akkor legyen 1, amugy page
page = ((page == 0) ? 1 : page);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://rickandmortyapi.com/api/episode?page=" + page);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);
        //console.log(json);

        var ul = document.getElementById("ul");

        //Elso oldal gomb
        var elsoA = document.createElement("a");
        elsoA.setAttribute("class", "page-link");
        elsoA.setAttribute("href", "http://127.0.0.1:5500/portfolio/rickandmorty/episodes/episodes.html?page=1");
        elsoA.appendChild(document.createTextNode("First"));

        var elsoLi = document.createElement("li");
        elsoLi.setAttribute("class", "page-item");

        elsoLi.appendChild(elsoA);

        ul.appendChild(elsoLi);

        //Szamos gombok
        for(var i = (page - 1); i <= (page + 1); i++){
            var aktA = document.createElement("a");
            aktA.setAttribute("class", "page-link");
            aktA.setAttribute("href", "http://127.0.0.1:5500/portfolio/rickandmorty/episodes/episodes.html?page=" + i);
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
        utolsoA.setAttribute("href", "http://127.0.0.1:5500/portfolio/rickandmorty/episodes/episodes.html?page=" + json.info.pages);
        utolsoA.appendChild(document.createTextNode("Last"));

        var utolsoLi = document.createElement("li");
        utolsoLi.setAttribute("class", "page-item");

        utolsoLi.appendChild(utolsoA);

        ul.appendChild(utolsoLi);




        for(var i = 0; i < json.results.length; i++){
            //console.log(json.results[i]);

            var tdId = document.createElement("td");
            var tdName = document.createElement("td");
            var tdAirDate = document.createElement("td");
            var tdEpisode = document.createElement("td");
            var tdCharacters = document.createElement("td");

            tdId.appendChild(document.createTextNode(json.results[i].id));
            tdName.appendChild(document.createTextNode(json.results[i].name));
            tdAirDate.appendChild(document.createTextNode(json.results[i].air_date));
            tdEpisode.appendChild(document.createTextNode(json.results[i].episode));
            tdCharacters.appendChild(document.createTextNode(json.results[i].characters.length));

            var tr = document.createElement("tr");
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdAirDate);
            tr.appendChild(tdEpisode);
            tr.appendChild(tdCharacters);

            document.getElementById("torzs").appendChild(tr);
        }
    }
};

xhr.send(null);