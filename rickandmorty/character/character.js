var search = new URLSearchParams(window.location.search);
var id = search.get("id");
var current = search.get("current");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://rickandmortyapi.com/api/character/" + id);

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);
        console.log(json);

        var img = document.getElementById("pic");
        img.setAttribute("src", json.image);
        img.setAttribute("alt", json.name);
        img.setAttribute("title", json.name);
        img.setAttribute("class", "w-100");

        document.getElementById("name").innerHTML = json.name;
        document.getElementById("status").innerHTML = json.status;
        document.getElementById("species").innerHTML = json.species;
        document.getElementById("gender").innerHTML = json.gender;
        document.getElementById("location").innerHTML = json.location.name;
        
        var ul = document.getElementById("episodes");

        var xhr2 = new XMLHttpRequest();

        for(var i = 0; i < json.episode.length; i++){
            xhr2.open("GET", json.episode[i], false);

            xhr2.onreadystatechange = function(){
                if(xhr2.readyState == 4 && xhr2.status == 200){
                    var episodeJson = JSON.parse(xhr2.responseText);

                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(episodeJson.name));
                    ul.appendChild(li);
                }
            };

            xhr2.send(null);
        }
        document.getElementById("back").setAttribute("href", "https://trh95.github.io/portfolio/rickandmorty/characters/characters.html?page=" + current);
       
       
    }
};

xhr.send(null);