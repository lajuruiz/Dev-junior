// que son paradigmas de programacion:

function Car(make, model, year){
    this.make=make;
    this.model=model;
    this.year=year;
}

var cmax =  new Car("ford", "C-max", 2014)

// function constructora
//asignacion 
// const algo="valor"
// const objeto = {hola: "mundo"}

//Expresion
//algo
//objeto.hola


// como buena practica inciial el nombre
function Person(name,age){
    this.name=name;
    this.age=age;

    this.cedula= "ddedede";

    this.algunaPropiedadCostosa = " el valor de X ";
}
// llamar siwempre con el new si es un constructor
const edwin= new Person("edwin")
//imprime el objeto edwin
console.log(edwin)
//NOTA: se le puede agregar nuevas propiedaddes dentro de la funcion 

// ejercicio de herencia

function Programador(name, age, lenguajes){
    Person.call(this, name, age); // un programador es una persona.
    // call llama / ejecuta la funcion Persona
    // this no cuenta como parametro
    this.lenguajes = lenguajes;

}

const edwinProgramador = new Programador("edwin", 28, ["Javascript"]);

console.log(edwinProgramador)


// ecmascript 6 


class Persona{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const Edwin = new Persona("laura ruiz", 28);
console.log(Edwin)


class Programador extends Persona{
    constructor (name,age, lenguajes){
        super(name, age)
    }

}


















