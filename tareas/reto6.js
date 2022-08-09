/* RETOOO 6  */

/* Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones:
● Suma.
● Resta.
● Multiplicación.
● División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por
cero y el resultado será cero).
● Potenciación.
También debe ser capaz de dar soluciones a ecuaciones diferenciales (es broma )...
La función debe recibir los parámetros y entregarnos el valor de la operación aritmética.
Para probar vamos a hacer 5 operaciones por cada función.
Y como plus, debemos validar que los parámetros si cumplan con que sean números. Si pasa algo
diferente como un texto u otro objeto, entonces debemos imprimir el error y devolver cero en ese
caso */


function toAdd(a,b){
    if(typeof a !== 'number'  || typeof b !== 'number'){
        console.log("es un objeto o texto")
        return 0
    }else{
        return a + b 
    }
}

function toSubtract(a,b){
    if(typeof a !== 'number'  || typeof b !== 'number'){
        console.log("es un objeto o texto")
        return 0
    }else{
        return a - b 
    }
}

function toMultiply(a,b) {
    if(typeof a !== 'number'  || typeof b !== 'number'){
        console.log("es un objeto o texto")
        return 0
    }else{
        return a * b 
    }
}

function toDivide(a,b) {
    if(typeof a !== 'number'  || typeof b !== 'number'){
        console.log("es un objeto o texto")
        return 0
    }
    else if(b===0){
        console.log("No se puede dividir por 0")
        return 0
    }else{
        return a/b 
    }
}

console.log(toAdd(1500,25000))
console.log(toAdd(1520,250))
console.log(toAdd(15560,25300))
console.log(toAdd("msms",2545))
console.log(toAdd({},255))



console.log(toSubtract(235,50))
console.log(toSubtract("235",50))
console.log(toSubtract(1025,2890))
console.log(toSubtract(202588,0.2))
console.log(toSubtract(220,50))


console.log(toMultiply(20,52))
console.log(toMultiply(12,52))
console.log(toMultiply({names:"laura"},52))
console.log(toMultiply(85962,520))
console.log(toMultiply(12,1))


console.log(toDivide(23,"b"))
console.log(toDivide(0,28))
console.log(toDivide(23,{}))
console.log(toDivide(12323,true))
console.log(toDivide(2344255,0))


/* Vamos a crear una arrow function para pasarla como callback a un .map() que se le aplicará a una lista de strings, está
función tendrá la capacidad de encriptar nuestro lenguaje, y lo que hará es:
1. Primero convertir todo el mensaje a mayúscula. */
/* 2. Convertir los siguientes carácteres:
● A -> 4
● S -> 5
● E -> 3
● O -> 0
● G -> 6
● I -> 1
● T -> 7
3. Imprimir en pantalla cada frase encriptada.
Frases que estarán en el array:
“Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.”
“Este es un mensaje super encriptado y solo los mejores podrán leerlo.”
Nota: Tengan en cuenta las tildes.
Pista: Existe un método de String para reemplazar letras. */ 
// First we create the object
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */

let textArray=["Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.",
    "Este es un mensaje super encriptado y solo los mejores podrán leerlo."]
let encriptar1=textArray.map(textString => textString.toUpperCase())
console.log(encriptar1);


let mensaje1=encriptar1.map(textString => textString.replace(/[A]/g, 4));
let mensaje2=mensaje1.map(textString => textString.replace(/[S]/g, 5));
let mensaje3=mensaje2.map(textString => textString.replace(/[E]/g, 3));
let mensaje4=mensaje3.map(textString => textString.replace(/[O]/g, 0));
let mensaje5=mensaje4.map(textString => textString.replace(/[G]/g, 6));
let mensaje6=mensaje5.map(textString => textString.replace(/[I]/g, 1));
let mensajeFinal=mensaje6.map(textString => textString.replace(/[Í]/g, 1));

console.log(mensajeFinal[0]);
console.log(mensajeFinal[1]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//new form 

const frases = ["Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo." ,
"Este es un mensaje super encriptado y solo los mejores podrán leerlo."
];

const encriptar=(frase)=> {
let mensaje=frase.toUpperCase().replace(/[A]/g, 4).replace(/[S]/g, 5).replace(/[E]/g, 3).replace(/[O]/g, 0).replace(/[G]/, 6).replace(/[I]/g, 1).replace(/[T]/g, 7);
    return mensaje
}
const frasesEncriptadas = frases.map(encriptar);
   for (encritada of frasesEncriptadas) {
        console.log(frasesEncriptadas)
   }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// First solution using regex + replace
/* let objectEncriptar1 = {"A": 4, "S": 5, "E": 3, "O": 0, "G": 6, "I": 1, "T": 7 }
let testText2 = "LOS NÚMEROS PUEDEN UTILIZARSE COMO LETRAS, Y LA FRASE RESULTANTE PUEDE SER LEÍDA SIN MUCHO ESFUERZO."

    for (let [key, value] of Object.entries(objectEncriptar1)) {
    testText2 = testText2.replace(new RegExp(key, 'g'), value)
    }
    console.log(testText2);
 */

////////////////////////////////////////////////////////////////////////////////////////////////

let objectEncriptar = {"A": 4, "S": 5, "E": 3, "O": 0, "G": 6, "I": 1, "T": 7 }
    let testText = ["LOS NÚMEROS PUEDEN UTILIZARSE COMO LETRAS, Y LA FRASE RESULTANTE PUEDE SER LEÍDA SIN MUCHO ESFUERZO.","ESTE ES UN MENSAJE SUPER ENCRIPTADO Y SOLO LOS MEJORES PODRÁN LEERLO."] 
    
    // first solution looping through the string an generating a new one with the values
    for (const test of testText){
        let newTest = ""
        for (const letra of test) {
            newTest += objectEncriptar[letra] || letra
        }
        console.log(newTest)
    }
    

const phrases = ["LOS NÚMEROS PUEDEN UTILIZARSE COMO LETRAS, Y LA FRASE RESULTANTE PUEDE SER LEÍDA SIN MUCHO ESFUERZO.","ESTE ES UN MENSAJE SUPER ENCRIPTADO Y SOLO LOS MEJORES PODRÁN LEERLO."];

const replaceLetter = (phrase, key, value) => phrase.replaceAll(key, value);

const encriptarSecondOption = (phrase) => {
    const objectEncriptar = {"A": 4, "S": 5, "E": 3, "O": 0, "G": 6, "I": 1, "T": 7 }
    phrase = phrase.toUpperCase();
    for (const [key, value] of Object.entries(objectEncriptar))
        phrase = replaceLetter(phrase,key,value);
    return phrase;
}

const encriptedPhrases = phrases.map(encriptarSecondOption);
console.log(encriptedPhrases);