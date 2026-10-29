class coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    toString() {
        return `Coche{marca=${this.marca}, modelo=${this.modelo}, año=${this.año}}`;
    }
}

let coche1 = new coche("Toyota", "Corolla", 2020);
let coche2 = new coche("Honda", "Civic", 2021);
let coche3 = new coche("Ford", "Mustang", 2022);
let coche4 = new coche("Chevrolet", "Camaro", 2023);

let arrayCoches = [coche1, coche2, coche3, coche4];
function mostrarCoches(coches) {
    let mensaje = "Marca — Modelo — Año\n";

    for (let i = 0; i < coches.length; i++) {
        mensaje += coches[i].marca + " — "
            + coches[i].modelo + " — "
            + coches[i].año + "\n";
    }

    alert(mensaje);
}

mostrarCoches(arrayCoches);