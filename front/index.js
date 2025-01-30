function loadComponent(nameComponent, idToLoad)
{
    var xmlContent = new XMLHttpRequest();

    xmlContent.onload = function() {
        document.getElementById(idToLoad).innerHTML = xmlContent.responseText;
        console.log(xmlContent.responseText);
    }

    xmlContent.open("GET", nameComponent);

    xmlContent.send();
}

//FUNCOES DA NAVBAR

function expandMenu()
{
    let list = document.querySelector(".list-nav")
    list.classList.toggle('active')
    
}

