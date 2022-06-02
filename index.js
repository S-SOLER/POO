/* Conceptos básicos de POO

-Clase:
Es una fábrica de objetos, de crear objetos

-objeto:
El objeto es lo que crea la Clase

-Atributos:
Son las particularidades, las propiedades que tiene nuestro objeto

-Metodo:
Es lo que puede hacer el objeto

-Constructor:
Esto es obligatorio cuando creamos una clase, es una función obligatoria. El constructor define las propiedades del objeto */

class animal {
    constructor(especie, edad, color, raza){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.raza = raza;
        this.info = `Hola, soy un pequeño ${this.raza}, tengo muchas ganas de hacer amigos de mi color que es: ${this.color}, tengo solo ${this.edad} años de edad`;
    }
}

let perro = new animal("perro", 5, "marron", "breton"); //Aquí asigname una variable con la clase del objeto para aplicar sus propiedades 

let gato = new animal("vaca", 15, "negro", "Miuau", "Mojon");

let vaca = new animal("vaca", 5, "marron", "breton");

document.write(gato);



//document.write(perro.color); //Este lo que hace es acceder a la propiedad del objeto

//console.log(perro);