function Avion (name, rows, column, price){     // Objeto avión
    this.name = name;
    this.rows = rows;           // Constructor
    this.column = column;
    this.priceBase = price;
}

// Se crea los objetos con sus respectivos nombres de las aerolineas y constructor.
const binter = new Avion("Binter", 20, 6, 120);
const iberiaExpress = new Avion ("Iberia", 25, 6, 100);
const vueling = new Avion ("Vueling", 15, 4, 140);


function asientos (avion){
    document.write(`<table>`);
    for (let fila = 0; fila < avion.rows; fila ++) {

        let claseFila = '';
        if (fila <= 3){
            claseFila = 'fila-naranja';
        } else if (fila > 3 && fila <= 9){
            claseFila = 'fila-azul';
        }

        document.write(`<tr class="${claseFila}">`);
        console.log ("Filas" + (fila + 1))
        for (let columna = 0; columna < avion.column; columna++) {
            document.write(`
                <td>
                    <div class= "seat">
                        ${fila + 1} - ${columna + 1}
                    </div> 
                </td>
            `);
            console.log ("Columnas" + (columna + 1))
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}


function bienvenida(){
    alert ("Bienvenido/a a nuestra Agencia de aerolíneas");
    alert ("Por favor, elija la compañía con la cual desea viajar");
}

function eleccion(avion){
    var clase = prompt("¿En qué clase le gustaría viajar?");

    while (clase != "Alta" || clase != "Turista" || clase != "Economica"){
        alert ("Esa clase no existe");
        clase = prompt("¿En qué clase le gustaría viajar?");
    } if (clase == "Business"){
        var maleta = prompt ("¿Tiene alguna maleta que quiera abordar?");
        if (maleta == "Si"){
            peso = parseInt (prompt ("¿De cuántos kg es? [5kg, 10kg o 25kg]"));
            if (peso != 5 || peso != 10 || peso != 25){
                alert("prueba")
            }
        }
    }
}