function init() {

    var display = document.getElementById('display');
    var arr_valor = [];
    var expr = new RegExp("[\+\-\/\*]");

    var target;

    var Number = {
        cero: 0,
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7,
        ocho: 8,
        nueve: 9
    };

    var Operator = {
        mas: '+',
        menos: '-',
        por: '*',
        dividido: '/',
        signo: '-'
    };

    document.body.onclick = function (e) {

        target = e.target;
        var value;
        var pos = arr_valor.length - 1;
        var valor = arr_valor[pos];

        sign.onclick = function(e){
        display.textContent =  "-" + display.textContent;
    }

        if (target.getAttribute('class') == 'tecla') {

            value = target.getAttribute('id');

            if (value == 'on') {
                display.textContent = 0;
                arr_valor.length = 0;
            } else if (value == 'punto') {

                if (display.textContent.length >= '0') {
                    if (display.textContent.match(/\.$/) == null || display.textContent.match(expr) == null) {
                        display.textContent = display.textContent + '.';
                        if (arr_valor.length = "") {
                            arr_valor.splice(pos, 1, valor.toString() + '.');
                        } else {
                            arr_valor.push(display.textContent);
                        }

                    }
                }

              }  else if (value == 'igual') {
                if (arr_valor.length >= 3) {
                    //Recorro el arreglo para calcular las operaciones

                    var resultado = parseFloat(arr_valor[0]);
                    for (var i = 1; i < arr_valor.length; i += 2) {

                        console.log(arr_valor[i]);
                        console.log(arr_valor[i + 1]);
                        if (arr_valor[i] == '+') {
                            resultado = resultado + (parseFloat(arr_valor[i + 1]));

                        }
                        if (arr_valor[i] == '-') {
                            resultado = resultado - (parseFloat(arr_valor[i + 1]));

                        }
                        if (arr_valor[i] == '*') {
                            resultado = resultado * (parseFloat(arr_valor[i + 1]));

                        }
                        if (arr_valor[i] == '/') {
                            resultado = resultado / (parseFloat(arr_valor[i + 1]));

                        }
                    }
                    display.textContent = resultado;
                    arr_valor.length = 0;
                    arr_valor.push(resultado);

                }
            } else {

                if (display.textContent.length >= '1') {
                    let number = Number[value];

                    if (display.textContent.length == '1' && display.textContent == '0') {
                        display.textContent = number;
                        if (number != 0) {
                            arr_valor.push(number);
                        }
                    } else {

                        if (arr_valor.length == 0 && number != 0) {
                            arr_valor.push(number);

                        } else {
                            if (valor.toString().match(/\.$/) == null) {
                                if (valor.toString().match(expr) == null) {
                                    arr_valor.splice(pos, 1, valor.toString() + number);

                                } else {
                                    arr_valor.push(number);
                                }
                            } else {
                                arr_valor.splice(pos, 1, valor.toString() + number);
                            }
                        }
                        display.textContent = display.textContent + number;

                    }
                }
            }

        }

        if (target.getAttribute('class') == 'tecla suma') {

            value = target.getAttribute('id');
            let operator = Operator[value];

            arr_valor.push(operator);

            display.textContent = display.textContent + operator;
        }

        if (target.getAttribute('class') == 'tecla resta') {

            value = target.getAttribute('id');
            let operator = Operator[value];

            arr_valor.push(operator);

            display.textContent = display.textContent + operator;

        }

        if (target.getAttribute('class') == 'tecla multiplica') {

            value = target.getAttribute('id');
            let operator = Operator[value];

            arr_valor.push(operator);

            display.textContent = display.textContent + operator;

        }

        if (target.getAttribute('class') == 'tecla divide') {

            value = target.getAttribute('id');
            let operator = Operator[value];

            arr_valor.push(operator);

            display.textContent = display.textContent + operator;

        }

        console.log(arr_valor);

    };




    document.body.addEventListener('mousedown', function (e) {
        var id = e.target.getAttribute('id');
        var elem = document.getElementById(id);
        elem.style.padding = '1px';
    });

    document.body.addEventListener('mouseup', function (e) {
        var id = e.target.getAttribute('id');
        var elem = document.getElementById(id);
        elem.style.padding = '0px';
    });

}
