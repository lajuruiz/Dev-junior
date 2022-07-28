let arrayNumeros=[1,2,3,5,6,8];
console.log(arrayNumeros);

let arrayString=["hola","david","como","estas","?"];
console.log(arrayString);

//array de objetos
let arrayDatos=[{
    edad:12,
    nombre: " laura",
    apellido: "ruiz"
},{
    edad:28,
    nombre:"daniela",
    apellido: "estrada"
}]

console.log(arrayDatos)


//array de array
let arrayVariado=[[1,2,3,"hola"],[2,3,"chao"]]
console.log(arrayVariado)

//aceeder al array 1 y a la posicion 0

console.log(arrayVariado[1][2])

console.log(arrayVariado[1][2], arrayVariado[0][1])
// tambien acceder a la primera letra llegado el caso que sea un string
console.log(arrayVariado[1][2][2])
//h


//OBJETOS:

let informacionEstudiante={
    name:"Laura",
    lastName:"Ruiz",
    age:12,
    saludo:function saludar(){
        console.log("hola clase")
    }
}

let autos={
    modelo:2023,
    marca:"mazda",
    encender:function(){
        console.log("el carro encendio")
    },
    Apagar:function(){
        console.log("El carro se apago")
    }
}

autos.modelo;

// metodos de arrays

const array= new Array(4);
const myArray=[0,1,2,3,4,5,6];
const arrayVacio=[];

console.log(miArray[0])//.metodos de la posicion(numeros, string etc))


//map
const women=["laura","susan","leydi","django"];

const comunidad=women.map(function(woman){
    return woman + " " + "pertenece a WWCODE";
})
console.log(comunidad)

const numeros=[1,2,3,4,5,6,7,8,9];

const resultados=numeros.map(function(numero){
    const resultado= numero ** 2;
    return resultado;
})

console.log(resultados)


//filter

const numeross=[1,2,3,4,5,6,7,8,9,10,11,12,13];
const impares= numeross.filter(function(numero){
    if(numero % 2 !== 0){
        return numero
    }
})
console.log(impares)

//forEach

const number=[1,2,3,4,5,6,7,8,9,10,11,12,13];

const par=[];
const impar=[];

number.forEach(function(numero){
    if(numero % 2 === 0){
        par.push(numero)
    } else{
        impar.push(numero)
    }
})

console.log("par", par)
console.log("impar", impar)
