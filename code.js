function Avion (name, rows, column, price){     // Objeto avión
    this.name = name;
    this.rows = rows;           // Constructor
    this.column = column;
    this.priceBase = price;
}

// Se crea los objetos con sus respectivos nombres de las aerolineas y constructor.
const binter = new Avion("Binter", 30, 6, 120);
const iberiaExpress = new Avion ("Iberia", 40, 6, 100);
const vueling = new Avion ("Vueling", 15, 4, 140);


function asientos (avion){
    document.write(`<table>`);
    for (let fila = 0; fila < avion.rows; fila ++) {
        document.write(`<tr>`);
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
