function Avion (name, rows, column, price){     // Objeto avión
    this.name = name;
    this.rows = rows;
    this.column = column;
    this.priceBase = price;
}

// Se crea los objetos con sus respectivos nombres de las aerolineas.
const binter = new Avion("Binter", 30, 6, 120);
const iberiaExpress = new Avion ("Iberia", 40, 6, 100);
const vueling = new Avion ("Vueling", 15, 4, 140);