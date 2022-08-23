/* Crea 3 funciones.
● Una función que no reciba parámetros y muestre siempre 3 mensajes con salto de línea cada mensaje.
● Una función que reciba un nombre como parámetro y que siempre se presente en pantalla. Ej: Hola a todos, soy David.
● Una función que reciba dos números y que devuelva el valor del producto entre ellos. */


function anonima(){
    console.log("HOla");
    console.log("LAura");
    console.log("tuuuuu")
}
anonima();

function saludo(nombre){
    console.log("Hola a todos soy " + nombre)
}

saludo("Laura");

function saludo(saludoo, nombre){
    console.log(saludoo + " eu soi " + nombre)
}

saludo("Oi","Laura");


function number(a,b){
    return a * b
}

const result=number(50,10);
console.log(result);



//arrow fuction

let suma= (a,b) => {
     return a + b;
}

let resta=(a,b) => a - b;


const numeros=[1,2,3,4];
const resultado=numeros.map((numero) =>{
    return prod +2
});


// callback

// suma modo 1  2 y 3
let sumaModo1=(a) => {
    return a + 5;
}

let sumaModo2= function (a){
    return a + 20;
}

function sumaModo3(a){
    return a +20 ;
}


const numeross=[1,2,3,4];

//hacer una funcion por una vocal me va a dar verdadero si empieza por consonante falso 
function empiezaPorVocal(palabra){
    if (palabra[0] === "A" ||  palabra[0] === "E"  || palabra[0] === "I" || palabra[0] === "O" || palabra[0] === "U"){
        return true;
    }else{
        return false

    }
}

const miPalabra= "HOLAAAA";
const segundoIntento="Destornillador";
const tercerIntento="iglesia";

const valor=  empiezaPorVocal(miPalabra);
const no=" no empieza por vocal"
const si= "si empieza por vocal"

if (valor){
    console.log("la palabra" + miPalabra + si)
}else{
    console.log("la palabra" + miPalabra + no)
}



// otra forma 
function empiezaPorVocales(palabra){
    const vocales=["a","b","c","d"];

    for(const vocal of vocales){
        if(vocal === palabra[0]){
            return  true
        }
    }
    return false
}


function empiezaPorVocales(palabra){
    const vocales=["a","b","c","d"];
    
    for(const vocal of vocales){
        if(vocal === palabra[0].toLowerCase){
            return  true
        }
    }
    return false
}

/* toLowerCase
toUpperCase */


//otra forma

function empiezaPorVocall(palabra){
    const vocales=["a","b","c","d"];
    return vocales.includes(palabra[0].toLowerCase());
}



