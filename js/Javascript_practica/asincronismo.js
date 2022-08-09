function imprimir(resultado){
    console.log("mensaje", resultado)
}

function suma(a,b,funcion){
    const resultado=a+b;
    return funcion(resultado)
}

suma(3,3,imprimir)