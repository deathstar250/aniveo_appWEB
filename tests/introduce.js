'use strict'



'Eventos del teclado'

//Focus

var input = document.querySelector("#campo_nombre");

input.addEventListener("focus", function() {
    console.log(" focus - Dentro del imput");
});

//Blur

input.addEventListener("blur", function() {
    console.log(" blur - salste del imput");
});

//keydown

input.addEventListener("keydown", function() {
    console.log(" keydown - escribiendo en el imput", String.fromCharCode(event.keyCode));
});


//key press

input.addEventListener("keypress", function() {
    console.log(" keypress - escribiendo en el imput", String.fromCharCode(event.keyCode));
});

//key app
'Eventos del raton'



function Aceptar_btnExample() {
    var cl = boton.style.background;
    if (cl == "grey") {
        boton.style.background = "green";
    } else {
        boton.style.background = "grey"
    }

    return true;
}

var button1 = document.querySelector("#boton2");

button1.addEventListener('click', function() {
    var cl = boton2.style.background;
    if (cl == "grey") {
        boton2.style.background = "green";
    } else {
        boton2.style.background = "grey"
    }

    //Se puede llamar a la funcion tambien o una funcion de callnack 
    //Aceptar_btnExample();


});

//Se pasa por arriva y se cambia el hover de la pagina

button1.addEventListener('mouseover', function() {
    boton2.style.background = "#ccc"
});

button1.addEventListener('mouseout', function() {
    boton.style.background = "black"
});


'Element by ID'

function callBOM() {
    console.log("Alto y ancho de adentro");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log("Alto y acnho de toda la pantalla");
    console.log(screen.innerWidth);
    console.log(screen.innerHeight);
    console.log("url cargada");
    console.log(window.location);
    console.log("tamaño");
    console.log(window.localStorage);
}


'Con este metodo podemos rediccionar a otra pagina o etc'

function redirect(url) {
    window.location.href = url;
}



let allDivs = document.getElementsByTagName('div');
console.log(allDivs);

let textcontent = allDivs[2].textContent;
console.log(textcontent);

let textInnerHTML = allDivs[2].innerHTML;
console.log(textInnerHTML);

var contentElemnt = allDivs[2]


function calltocrisonico() {
    contentElemnt.innerHTML = '2. Crisonico 01';
    contentElemnt.style.color = 'blue';
}

function callAllDivs() {
    for (var i = 0; i < contentElemnt.length; i++) {
        document.createElement('<li>' + i + '</li>');
    }
}

var value;

function allDivsFor() {
    for (value in allDivs) {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(allDivs[value].textContent);
        parrafo.append(texto);
        document.querySelector('mysection').append(parrafo);
    }
}

'Elements by classname'

var divsred = document.getElementsByClassName('red');
var divsyellow = document.getElementsByClassName('yellow');

function divsredx() {
    for (var i = 1; i <= divsred.length; i++) {
        divsred[i].textContent.style.color = "red";
    }
}