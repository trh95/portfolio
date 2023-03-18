var urlParams = new URLSearchParams(window.location.search);
var page = Number(urlParams.get('page'));

page = ((page == 0) ? 1 : page);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://rickandmortyapi.com/api/location?page=" + page);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
        var ul = document.getElementById("ul");

        // First page button
        var firstA = document.createElement("a");
        firstA.setAttribute("class", "page-link");
        firstA.setAttribute("href", "http://127.0.0.1:5500/rickandmorty/locations/locations.html?page=1");
        firstA.appendChild(document.createTextNode("First"));

        var firstLi = document.createElement("li");
        firstLi.setAttribute("class", "page-item");

        firstLi.appendChild(firstA);

        ul.appendChild(firstLi);

        // Number button
        for (var i = (page - 1); i <= (page + 1); i++) {
            var aktA = document.createElement("a");
            aktA.setAttribute("class", "page-link");
            aktA.setAttribute("href", "http://127.0.0.1:5500/rickandmorty/locations/locations.html?page=" + i);
            aktA.appendChild(document.createTextNode(i));

            var aktLi = document.createElement("li");

            if (i == 0 || i == Number(json.info.pages) + 1) {
                aktLi.setAttribute("class", "d-none");
            }
            else {
                aktLi.setAttribute("class", "page-item");
            }

            aktLi.appendChild(aktA);

            ul.appendChild(aktLi);
        }

        // Last page button
        var lastA = document.createElement("a");
        lastA.setAttribute("class", "page-link");
        lastA.setAttribute("href", "http://127.0.0.1:5500/rickandmorty/locations/locations.html?page=" + json.info.pages);
        lastA.appendChild(document.createTextNode("Last"));

        var lastLi = document.createElement("li");
        lastLi.setAttribute("class", "page-item");

        lastLi.appendChild(lastA);

        ul.appendChild(lastLi);

        for (var i = 0; i < json.results.length; i++) {

            var tdId = document.createElement("td");
            var tdName = document.createElement("td");
            var tdType = document.createElement("td");
            var tdDimension = document.createElement("td");
            var tdResidents = document.createElement("td");
            var tdUrl = document.createElement("td");
            var tdCreated = document.createElement("td");

            tdId.appendChild(document.createTextNode(json.results[i].id));
            tdName.appendChild(document.createTextNode(json.results[i].name));
            tdType.appendChild(document.createTextNode(json.results[i].type));
            tdDimension.appendChild(document.createTextNode(json.results[i].dimension));
            tdResidents.appendChild(document.createTextNode(json.results[i].residents.length));
            tdUrl.appendChild(document.createTextNode(json.results[i].url));
            tdCreated.appendChild(document.createTextNode(json.results[i].created));

            var tr = document.createElement("tr");
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdType);
            tr.appendChild(tdDimension);
            tr.appendChild(tdResidents);
            tr.appendChild(tdUrl);
            tr.appendChild(tdCreated);

            document.getElementById("body").appendChild(tr);

        }
    }
};

xhr.send(null);