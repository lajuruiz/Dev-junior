//1.spread operator

const dogs=["boxer", "golden", "pastor","criollo"];
const cats=["boxer", "golden", "pastor","criollo"];

const animales=[...dogs,...cats]

console.log(animales)

const person1={
    nombre:"laura",
    direccion:"belen",
    trabajo:{
        direccion:"valhala",
    }
}

const person2={
    apellido:"ruiz",
    cedula:"108801147722",
}

const personas={...person1, ...person2}

const person={...person1,cedula:person2.cedula}
console.log(person)


//destrucuturin

const countries=["colombia", "peru", "venezuela","chile", "argentina",["a", "b", "c"]];
const [colombia ,peru,venezuela, _ , argentina,[firsletter]]=countries

console.log(countries)
console.log(firsletter)

//con objetos
const persons={
    nombre:"laura",
    direccion:"belen",
    trabajo:{
        direccion:"valhala",
    }
}


let{nombre,direccion,trabajo: {direccion:direccionTrabajo}}=persons
console.log(nombre)
console.log(persons)
console.log(direccionTrabajo)