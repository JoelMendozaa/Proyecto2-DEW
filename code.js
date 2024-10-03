function Avion(name, rows, column, price) { // Objeto avión
    this.name = name;
    this.rows = rows;           // Constructor
    this.column = column;
    this.priceBase = price;
    this.color = [];           // Array para almacenar el color de los asientos
}

// Se crean los objetos con sus respectivos nombres de las aerolíneas y constructor.
const binter = new Avion("Binter", 20, 6, 120);
const iberiaExpress = new Avion("Iberia", 25, 6, 100);
const vueling = new Avion("Vueling", 15, 4, 140);

function asientos(avion) {
    document.write(`<table>`);
    for (let fila = 0; fila < avion.rows; fila++) { // Generación asientos
        let claseFila = '';
        if (fila <= 3) {
            claseFila = 'fila-naranja'; // Color a los asientos de primera clase
        } else if (fila > 3 && fila <= 9) {
            claseFila = 'fila-azul'; // Color a los asientos de clase turista
        }

        document.write(`<tr class="${claseFila}">`); // Creación de tabla para cada asiento generado
        console.log("Filas " + (fila + 1));
        for (let columna = 0; columna < avion.column; columna++) {
            let asientoId = `asiento-${fila + 1}-${columna + 1}`; // Crear el ID para cada asiento en función de su fila y columna

            // Generamos aleatoriamente el color del asiento (verde o rojo)
            let colorAsiento = Math.random() < 0.5 ? 'green' : 'red'; // Verde = disponible, Rojo = ocupado
            avion.color.push({ id: asientoId, color: colorAsiento }); // Guardamos el color en un array para verificar más tarde

            document.write(`
                <td>
                    <div id="${asientoId}" class="seat" style="background-color: ${colorAsiento};">  
                        ${fila + 1} - ${columna + 1}
                    </div> 
                </td>
            `);
            console.log("Columnas " + (columna + 1));
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}

function eleccion() {
    var avion = binter; // Seleccionamos un avión (puedes cambiarlo a iberiaExpress o vueling)
    var precioTotal = avion.priceBase; // Precio base del avión
    var cantidadTicket = parseInt(prompt("¿Cuántos billetes desea comprar?"));

    while (isNaN(cantidadTicket) || cantidadTicket <= 0) {
        alert("Adiós");
        return;
    }

    var clase = prompt("¿En qué clase le gustaría viajar? Clase Business, Turista o Económica");

    while (clase != "Business" && clase != "Turista" && clase != "Economica" && clase != "business" && clase != "turista" && clase != "economica") {
        alert("Esa clase no existe");
        clase = prompt("¿En qué clase le gustaría viajar?");
    }

    if (clase != "Business" && clase != "business") {
        precioTotal += 5 * cantidadTicket; // Cargo adicional de 5€ por cada billete en clase Turista o Económica
    }

    // Proceso de maletas, comidas y otros
    for (var i = 0; i < cantidadTicket; i++) {
        var maleta = prompt("¿Tiene alguna maleta que quiera abordar?");
        while (maleta != "Si" && maleta != "No" && maleta != "si" && maleta != "no") {
            alert("Lo lamento, debes responder con un Si o con un No");
            maleta = prompt("¿Tiene alguna maleta que quiera abordar?");
        }

        if (maleta == "Si" || maleta == "si") {
            var peso = parseInt(prompt("¿De cuántos kg es? [10kg = 30€ o 25kg = 45€]"));
            while (peso != 10 && peso != 25) {
                alert("Peso incorrecto");
                peso = parseInt(prompt("¿De cuántos kg es? [10kg = 30€ o 25kg = 45€]"));
            }
            if (peso == 10) {
                precioTotal += 30;
            } else if (peso == 25) {
                precioTotal += 45;
            }
            console.log("Maleta abordada");
        } else {
            console.log("Sin maleta");
        }
    }

    precioTotal = prioritario(precioTotal); // Pregunta si el usuario quiere prioridad

    var comida = prompt("¿Desea comer algo?");
    while (comida != "Si" && comida != "No" && comida != "si" && comida != "no") {
        alert("Eso no es una respuesta, por favor, introduzca si o no");
        comida = prompt("¿Desea comer algo?");
    }
    if (comida == "Si" || comida == "si") {
        var menu = prompt("¿Prefiere menú normal o sin alergenos?");
        while (menu != "Normal" && menu != "Sin" && menu != "normal" && menu != "sin") {
            alert("La respuesta debe ser Normal o Sin");
            menu = prompt("¿Prefiere menú normal o sin alergenos?");
        }
        precioTotal += 20; // Precio fijo de comida
        console.log("Comida seleccionada");
    } else {
        console.log("Sin comida");
    }

    // Preguntamos si el usuario es residente y aplicamos el descuento
    var esResidente = prompt("¿Eres residente?");
    while (esResidente != "Si" && esResidente != "No" && esResidente != "si" && esResidente != "no") {
        alert("Debe responder con un Si o con un No");
        esResidente = prompt("¿Eres residente?");
    }

    if (esResidente == "Si" || esResidente == "si") {
        precioTotal *= 0.25; // Aplicamos el 75% de descuento
        alert("Descuento de residente aplicado: 75%");
        console.log("Es residente, descuento aplicado");
    } else {
        console.log("No es residente, sin descuento");
    }

    alert(`El precio total de su compra es: ${precioTotal.toFixed(2)}€`); // Redondea los decimales
    console.log(`El precio total de su compra es: ${precioTotal.toFixed(2)}€`);

    eleccionAsientos(avion, cantidadTicket); // Permite al usuario seleccionar sus asientos
    confirmarCompra(precioTotal);
}

function bienvenida() {
    alert("Bienvenido/a a nuestra Agencia de aerolíneas");
    alert("Por favor, elija la compañía con la cual desea viajar");
}

function prioritario(precioTotal) {
    var prioritario = prompt("¿Desea ser prioritario? [+10€]");
    if (prioritario == "Si" || prioritario == "si") {
        alert("Prioridad seleccionada");
        precioTotal += 10; // Sumamos el costo de prioridad
    } else if (prioritario == "No" || prioritario == "no") {
        alert("No ha seleccionado prioridad");
    } else {
        alert("Eso no es una respuesta válida");
    }
    return precioTotal;
}

function eleccionAsientos(avion, cantidadTicket) {
    var asientosSeleccionados = []; // Array para almacenar los asientos seleccionados

    for (let i = 0; i < cantidadTicket; i++) {
        let asientoDisponible = false;
        while (!asientoDisponible) {
            var asientoFila = parseInt(prompt(`Billete ${i + 1}: ¿En qué fila desea sentarse?`));
            var asientoColumna = parseInt(prompt(`Billete ${i + 1}: ¿En qué columna desea sentarse?`));

            // Construimos el ID del asiento en función de la fila y la columna
            var asientoId = `asiento-${asientoFila}-${asientoColumna}`;
            let asiento = avion.color.find(asiento => asiento.id === asientoId);

            if (asiento) {
                if (asiento.color === 'green') {
                    // Si el asiento está en verde, lo ocupamos y cambiamos su color a rojo
                    asiento.color = 'red';
                    document.getElementById(asientoId).style.backgroundColor = 'red';
                    alert(`Billete ${i + 1}: Has seleccionado el asiento en la fila ${asientoFila} y la columna ${asientoColumna}`);
                    console.log(`Billete ${i + 1}: Has seleccionado el asiento en la fila ${asientoFila} y la columna ${asientoColumna}`);
                    asientoDisponible = true; // Salimos del bucle porque el asiento ha sido seleccionado correctamente
                    asientosSeleccionados.push(asientoId); // Agregar asiento seleccionado al array
                } else {
                    // Si el asiento está ocupado (rojo), lanzamos una alerta
                    alert("El asiento seleccionado ya está ocupado. Por favor, elija otro asiento.");
                }
            } else {
                alert("El asiento seleccionado no existe. Por favor, elija un asiento válido.");
            }
        }
    }

    // Mostrar todos los asientos seleccionados
    alert(`Has seleccionado los siguientes asientos: ${asientosSeleccionados.join(', ')}`);
}

function confirmarCompra(precioTotal) {
    var confirmacion = confirm(`El precio total es ${precioTotal.toFixed(2)}€. ¿Deseas confirmar la compra?`);
    if (confirmacion) {
        alert("Compra confirmada. Gracias por su compra.");
        console.log("Compra confirmada");
    } else {
        alert("Compra cancelada. Volvamos a comenzar.");
        eleccion(); // Reinicio de preguntas
        console.log("Compra cancelada");
    }
}