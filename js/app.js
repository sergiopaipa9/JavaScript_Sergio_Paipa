var operandoa;
var operandob;
var operandoc;
var operandod;
var operacion;


function init(){
    //variables
    var on = document.getElementById('on');
    var sign = document.getElementById('sign');
    var raiz = document.getElementById('raiz');
    var dividido = document.getElementById('dividido');
    var por = document.getElementById('por');
    var menos = document.getElementById('menos');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var mas = document.getElementById('mas');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    
    
    //Eventos
    
    cero.onclick = function(e){
        display.textContent = display.textContent + "0";
    }

    uno.onclick = function(e){
        display.textContent = display.textContent + "1";
    }
    dos.onclick = function(e){
        display.textContent = display.textContent + "2";
    }
    tres.onclick = function(e){
        display.textContent = display.textContent + "3";
    }
    cuatro.onclick = function(e){
        display.textContent = display.textContent + "4";
    }
    cinco.onclick = function(e){
        display.textContent = display.textContent + "5";
    }
    seis.onclick = function(e){
        display.textContent = display.textContent + "6";
    }
    siete.onclick = function(e){
        display.textContent = display.textContent + "7";
    }
    ocho.onclick = function(e){
        display.textContent = display.textContent + "8";
    }

    nueve.onclick = function(e){
        display.textContent = display.textContent + "9";
    }
    punto.onclick = function(e){
        display.textContent = display.textContent + ".";
    }
    sign.onclick = function(e){
        display.textContent =  "-" + display.textContent;
    }
    
    on.onclick = function(e){
        resetear();
    }
    mas.onclick = function(e){
        operandoa = display.textContent;
        operacion = "+";
        limpiar();
    }
    menos.onclick = function(e){
        operandoa = display.textContent;
        operacion = "-";
        limpiar();
    }
    por.onclick = function(e){
        operandoa = display.textContent;
        operacion = "*";
        limpiar();
    }
    dividido.onclick = function(e){
        operandoa = display.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = display.textContent;
        resolver();
    }
    
    
}

function limpiar(){
    display.textContent = "0";
}

function resetear(){
    display.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = "";
    switch(operacion){
        case "+":
            res = (parseFloat(operandoa) + parseFloat(operandob));
            break;
            
        case "-":
            res = (parseFloat(operandoa) - parseFloat(operandob));
            break;
            
        case "*":
            res = (parseFloat(operandoa) * parseFloat(operandob));
            break;
        
        case "/":
            res = (parseFloat(operandoa) / parseFloat(operandob));
            break;
    }
    resetear();
    display.textContent = res;
}


on.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('on').innerHTML = '0';

    / Cambiar Estilos /
    on.addEventListener('mousedown', function () {
        document.getElementById('on').style = 'padding: 1px';
    });
    on.addEventListener('mouseup', function () {
        document.getElementById('on').style = 'padding: 0px';
    });
});

uno.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('uno').innerHTML = '';

    / Cambiar Estilos /
    uno.addEventListener('mousedown', function () {
        document.getElementById('uno').style = 'padding: 1px';
    });
    uno.addEventListener('mouseup', function () {
        document.getElementById('uno').style = 'padding: 0px';
    });
});

dos.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('dos').innerHTML = '0';

    / Cambiar Estilos /
    dos.addEventListener('mousedown', function () {
        document.getElementById('dos').style = 'padding: 1px';
    });
    dos.addEventListener('mouseup', function () {
        document.getElementById('dos').style = 'padding: 0px';
    });
});

tres.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('tres').innerHTML = '0';

    / Cambiar Estilos /
    tres.addEventListener('mousedown', function () {
        document.getElementById('tres').style = 'padding: 1px';
    });
    on.addEventListener('mouseup', function () {
        document.getElementById('tres').style = 'padding: 0px';
    });
});

cuatro.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('cuatro').innerHTML = '7';

    / Cambiar Estilos /
    cuatro.addEventListener('mousedown', function () {
        document.getElementById('cuatro').style = 'padding: 1px';
    });
    cuatro.addEventListener('mouseup', function () {
        document.getElementById('cuatro').style = 'padding: 0px';
    });
});

cinco.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('cinco').innerHTML = '0';

    / Cambiar Estilos /
    cinco.addEventListener('mousedown', function () {
        document.getElementById('cinco').style = 'padding: 1px';
    });
    cinco.addEventListener('mouseup', function () {
        document.getElementById('cinco').style = 'padding: 0px';
    });
});

seis.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('display').innerHTML = '0';

    / Cambiar Estilos /
    seis.addEventListener('mousedown', function () {
        document.getElementById('seis').style = 'padding: 1px';
    });
    seis.addEventListener('mouseup', function () {
        document.getElementById('seis').style = 'padding: 0px';
    });
});

siete.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('siete').innerHTML = '0';

    / Cambiar Estilos /
    siete.addEventListener('mousedown', function () {
        document.getElementById('siete').style = 'padding: 1px';
    });
    siete.addEventListener('mouseup', function () {
        document.getElementById('siete').style = 'padding: 0px';
    });
});

ocho.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('ocho').innerHTML = '0';

    / Cambiar Estilos /
    ocho.addEventListener('mousedown', function () {
        document.getElementById('ocho').style = 'padding: 1px';
    });
    ocho.addEventListener('mouseup', function () {
        document.getElementById('ocho').style = 'padding: 0px';
    });
});

nueve.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('nueve').innerHTML = '0';

    / Cambiar Estilos /
    nueve.addEventListener('mousedown', function () {
        document.getElementById('nueve').style = 'padding: 1px';
    });
    nueve.addEventListener('mouseup', function () {
        document.getElementById('nueve').style = 'padding: 0px';
    });
});

mas.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('mas').innerHTML = '0';

    / Cambiar Estilos /
    mas.addEventListener('mousedown', function () {
        document.getElementById('mas').style = 'padding: 1px';
    });
    mas.addEventListener('mouseup', function () {
        document.getElementById('mas').style = 'padding: 0px';
    });
});

menos.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('menos').innerHTML = '0';

    / Cambiar Estilos /
    menos.addEventListener('mousedown', function () {
        document.getElementById('menos').style = 'padding: 1px';
    });
    menos.addEventListener('mouseup', function () {
        document.getElementById('menos').style = 'padding: 0px';
    });
});

por.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('por').innerHTML = '0';

    / Cambiar Estilos /
    por.addEventListener('mousedown', function () {
        document.getElementById('por').style = 'padding: 1px';
    });
    por.addEventListener('mouseup', function () {
        document.getElementById('por').style = 'padding: 0px';
    });
});

dividido.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('display').innerHTML = '0';

    / Cambiar Estilos /
    dividido.addEventListener('mousedown', function () {
        document.getElementById('dividido').style = 'padding: 1px';
    });
    dividido.addEventListener('mouseup', function () {
        document.getElementById('dividido').style = 'padding: 0px';
    });
});

punto.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('punto').innerHTML = '0';

    / Cambiar Estilos /
    punto.addEventListener('mousedown', function () {
        document.getElementById('punto').style = 'padding: 1px';
    });
    punto.addEventListener('mouseup', function () {
        document.getElementById('punto').style = 'padding: 0px';
    });
});

igual.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('igual').innerHTML = '0';

    / Cambiar Estilos /
    igual.addEventListener('mousedown', function () {
        document.getElementById('igual').style = 'padding: 1px';
    });
    igual.addEventListener('mouseup', function () {
        document.getElementById('igual').style = 'padding: 0px';
    });
});

sign.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('sign').innerHTML = '0';

    / Cambiar Estilos /
    sign.addEventListener('mousedown', function () {
        document.getElementById('sign').style = 'padding: 1px';
    });
    sign.addEventListener('mouseup', function () {
        document.getElementById('sign').style = 'padding: 0px';
    });
});


raiz.addEventListener('click', function () {

    / Prende la calculadora /
    document.getElementById('raiz').innerHTML = '0';

    / Cambiar Estilos /
    raiz.addEventListener('mousedown', function () {
        document.getElementById('raiz').style = 'padding: 1px';
    });
    raiz.addEventListener('mouseup', function () {
        document.getElementById('raiz').style = 'padding: 0px';
    });
});
