//getElementById
/* let header=document.getElementById("header")
console.log(header); */
//trae la etiqueta
/* console.log(header.textContent); */

//getElementsByClassName
/* let parrafos=document.getElementsByClassName("parrafo")
console.log(parrafos)
let arrayParrafos= [...parrafos];
console.log(arrayParrafos) */
// colecccion de html y el array que se paso con el spread operator

//getElementByTagNAme
/* let p= document.getElementsByTagName("p");
console.log(p); */
// colecccion de html

//document.querySelector
let clase=document.querySelector(".parrafo")
console.log(clase)
////etiqueta

//document.querySelectorAll
let clases=document.querySelectorAll(".parrafo")
console.log(clases)
// genera unNodeList(5) que es una coleccion de datos de c

/* Un NodeList tiene elementos
almacenados en índices numéricos y una
length propiedad como Array, pero no
tiene ninguno de los otros métodos (slice,
push, some, filter, reduce, etc). */

//los nodos son etiquetas html

let sectionInfo= document.querySelector("section")


// remover elementos

let h2= document.querySelector("h2") //hijo
let main=document.querySelector("main") //padre
main.removeChild(h2)
//<h2>​Industrial Chemestry and Dev Student​</h2>​ esto es lo eliminado 

//diferencia entre una propieedda html y 