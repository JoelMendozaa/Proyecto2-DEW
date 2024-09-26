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
    for (let i = 0; i < avion.rows; i++) {
        console.log ("Filas" + (i + 1))
        for (let x = 0; x < avion.column; x++) {
            console.log ("Columnas" + (x + 1))
        }
    }
}






/*function Cliente (){
    var clase = prompt("¿En qué tipo de clase quieres viajar?");
    var asiento = prompt("Elige el asiento");
    var asientoRandom = Math.random();

    while (clase != "Business" || clase != "Turista" || clase != "LowCost"){
        alert("Esa clase no existe. Por favor, elija su clase")

        if (clase == "Busines"){
            asiento
        } else if (clase == "Turista"){
            asientoRandom
        }else{
            asientoRandom
        }
    }
}*/