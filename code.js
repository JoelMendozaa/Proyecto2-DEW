function Avion (name, rows, column, price){     // Objeto avión
    this.name = name;
    this.rows = rows;           // Constructor
    this.column = column;
    this.priceBase = price;
    this.color = [];
}

// Se crea los objetos con sus respectivos nombres de las aerolineas y constructor.
const binter = new Avion("Binter", 20, 6, 120);
const iberiaExpress = new Avion ("Iberia", 25, 6, 100);
const vueling = new Avion ("Vueling", 15, 4, 140);


function asientos(avion){

    boton();

    document.write(`<table>`);
    for (let fila = 0; fila < avion.rows; fila ++) {        // Generación asientos
        
        let claseFila = '';
        if (fila <= 3){
            claseFila = 'fila-naranja';     // Color a los asientos de primera Clase
            
        } else if (fila > 3 && fila <= 9){
            claseFila = 'fila-azul';        // Color a los asientos de clase Turista
        }

        document.write(`<tr class="${claseFila}">`);        // Creación de tabla para cada asiento generado
        console.log ("Filas" + (fila + 1))
        for (let columna = 0; columna < avion.column; columna++) {
            let asientoId = `asiento-${fila + 1}-${columna + 1}`;         // Crear el ID para cada asiento en función de su fila y columna
            document.write(`
                <td>
                    <div id="${asientoId}" class= "seat">  
                        ${fila + 1} - ${columna + 1}
                    </div> 
                </td>
            `); // ID creado para poder cambiar luego el asiento seleccionado a color verde
            console.log ("Columnas" + (columna + 1))
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);

}

// Bienvenida
function bienvenida(){
    alert ("Bienvenido/a a nuestra Agencia de aerolíneas");
    alert ("Por favor, elija la compañía con la cual desea viajar");
}

function boton(){
    document.write(`<button type="button" onclick = "eleccion()" class="botonReserva">Reserva</button>`);
}

function eleccion(){

    var cantidadTicket = parseInt (prompt("¿Cuántos billetes desea comprar?"));
    while (cantidadTicket <= 0){
        alert ("Adiós");
        return;
    }

    var clase = prompt("¿En qué clase le gustaría viajar? Clase Business, Turista o Económica");

    while (clase != "Business" && clase != "Turista" && clase != "Economica" && clase != "business" && clase != "turista" && clase != "economica"){
        alert ("Esa clase no existe");          // Bucle While para que siempre que no se escriba una de las opciones salte un error
        clase = prompt("¿En qué clase le gustaría viajar?");
    } 

    if (cantidadTicket > 0){
        for (var i = 0; i < cantidadTicket; i++){

            
            if (clase == "Business"){
                var maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
                while (maleta != "Si" && maleta != "No" && maleta != "si" && maleta != "no"){
                    alert ("Lo lamento, debes responder con un Si o con un No");
                    maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
                }
                if (maleta == "Si"){
                    var peso = parseInt (prompt ("¿De cuántos kg es? [10kg o 25kg]"));
                    while(peso != 5 && peso != 10 && peso != 25){
                        alert("Peso incorrecto");
                        peso = parseInt (prompt ("¿De cuántos kg es? [10kg o 25kg]"));
                    }
                    console.log ("Maleta abordada");
                } else if (maleta == "No"){
                    console.log ("Sin maleta");
                }            
            } else if (clase == "Turista"){
                var maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
                while (maleta != "Si" && maleta != "No" && maleta != "si" && maleta != "no"){
                    alert ("Lo lamento, debes responder con un Si o con un No");
                    maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
                }
                if (maleta == "Si"){
                    var peso = parseInt (prompt ("¿De cuántos kg es? [10kg = 30€ o 25kg = 45€]"));
                    while(peso != 5 && peso != 10 && peso != 25){
                        alert("Peso incorrecto");
                        peso = parseInt (prompt ("¿De cuántos kg es? [10kg o 25kg]"));
                    }
                    console.log ("Maleta abordada");
                } else if (maleta == "No"){
                    console.log ("Sin maleta");
                }            
            } else if(clase == "Economica"){
                var maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
                while (maleta != "Si" && maleta != "No" && maleta != "si" && maleta != "no"){
                    alert ("Lo lamento, debes responder con un Si o con un No");
                    maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
                }
                if (maleta == "Si"){
                    var peso = parseInt (prompt ("¿De cuántos kg es? [10kg = 30€ o 25kg = 45€]"));
                    while(peso != 5 && peso != 10 && peso != 25){
                        alert("Peso incorrecto");
                        peso = parseInt (prompt ("¿De cuántos kg es? [10kg o 25kg]"));
                    }
                    console.log ("Maleta abordada");
                } else if (maleta == "No"){
                    console.log ("Sin maleta");
                }            
            }
        }
    }

    eleccionAsientos();

     var comida = prompt("¿Desea comer algo?");
    while (comida != "Si" && comida != "No" && comida != "si" && comida != "no"){
        alert("Eso no es una respuesta, por favor, introduzca si o no");
        comida = prompt ("¿Desea comer algo?");
    }
    if (comida == "Si" || comida == "si"){
        var menu = prompt ("¿Prefiere menú normal o sin alergenos?");
        while (menu != "Normal" && menu != "Sin" && menu != "normal" && menu != "sin"){
            alert ("La respuesta debe ser Normal o Sin");
            menu = prompt ("¿Prefiere menú normal o sin alergenos?")
        }
        if (menu == "Normal"){
            console.log("Menu normal");
        } else {
            console.log ("Menu sin alergenos");
        }
        
    } else if (comida == "No" && comida == "no"){
        alert ("De acuerdo");
    }

}

function eleccionAsientos(){

    var eleccion = prompt("¿Desea seleccionar su asiento?");

    while(eleccion != "Si" && eleccion != "No"){
        alert("Debes indicar con Si o No");
        eleccion = prompt("¿Desea seleccionar su asiento?");
    }

    if (eleccion == "Si"){
        var asientoFila = parseInt(prompt ("¿En qué fila desea sentarse?"));
        while (asientoFila != 1 && asientoFila != 2 && asientoFila != 3 && asientoFila != 4){
            alert ("Lo lamento, al ser de clase Alta solo puede escoger entre la fila 1 y 4");      // Bucle While para que siempre que no se escriba una de las opciones salte un error
            asientoFila = parseInt(prompt ("¿En qué fila desea sentarse?"));
        }

        var asientoColumna = parseInt(prompt("¿En qué columna desea sentarse?"));
        while (asientoColumna != 1 && asientoColumna != 2 && asientoColumna != 3 && asientoColumna != 4 && asientoColumna != 5 && asientoColumna !=6){
            alert ("Lo lamento, al ser de clase Alta solo puede escoger entre la fila 1 y 6");
            asientoFila = parseInt(prompt ("¿En qué columna desea sentarse?"));
        }   
        alert (`Has seleccionado la fila ${asientoFila} y la columna ${asientoColumna}. Correctamente`);
        console.log(`Has seleccionado la fila ${asientoFila} y la columna ${asientoColumna}.`);
    } else if (eleccion == "No"){
        var asientoFilaAleatorio = Math.floor(Math.random() * 4) + 1; // Fila entre 1 y 4
        var asientoColumnaAleatorio = Math.floor(Math.random() * 6) + 1; // Columna entre 1 y 6
        alert(`Se te ha asignado aleatoriamente la fila ${asientoFilaAleatorio} y la columna ${asientoColumnaAleatorio}.`);
        console.log(`Se te ha asignado aleatoriamente la fila ${asientoFilaAleatorio} y la columna ${asientoColumnaAleatorio}.`);
    }

    colorearAsiento(asientoFila, asientoColumna);
}

function colorearAsiento(fila, columna) {
    // Seleccionamos la tabla de asientos
    const tabla = document.querySelector('table');

    // Comprobamos si la fila y la columna existen dentro de la tabla
    if (tabla && tabla.rows[fila - 1] && tabla.rows[fila - 1].cells[columna - 1]) {
        // Seleccionamos la celda específica en la tabla usando fila y columna
        const asientoSeleccionado = tabla.rows[fila - 1].cells[columna - 1].querySelector('.seat');

        // Si existe, cambiamos el color de fondo a rojo
        if (asientoSeleccionado) {
            asientoSeleccionado.style.backgroundColor = 'red';
            alert(`Has seleccionado el asiento en la fila ${fila}, columna ${columna}.`);
        } else {
            console.log(`No se pudo seleccionar el asiento en la fila ${fila}, columna ${columna}.`);
        }
    } else {
        alert("El asiento que intentas seleccionar no existe.");
    }
}


function residente(){   // añadir
    var residente = prompt ("¿Eres residente?");
    if (residente == "Si" || residente == "si"){
        alert("Aplicando el 75%");
    } else if (residente == "No" || residente == "no") {
        alert("No se le aplicará el descuento")
    } else {
        alert("Esa respuesta no es válida");
    }
}

function prioritario(){     // añadir
    var prioritario = prompt ("¿Desea ser prioritario? [+10€]");
    if (prioritario == "Si" || prioritario == "si"){
        alert("Excelente");
    } else if (prioritario == "No" || prioritario == "no"){
        alert ("Excelente");
    } else {
        ("Eso no es una respuesta valida");
    }
}


