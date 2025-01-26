function loadComponent(nameComponent, idToLoad)
{
    var xmlContent = new XMLHttpRequest();

    xmlContent.onload = function() {
        document.getElementById(idToLoad).innerHTML = xmlContent.responseText;
    }

    xmlContent.open("GET", nameComponent);

    xmlContent.send();
}
