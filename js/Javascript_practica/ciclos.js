//for of

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}



//for in

let iterables = [10, 20, 30];

for (let value in iterables) {
  console.log(value);
}

console.log(iterables[value],value)


let iterabless = [10, 20, 30];

for (let value in iterabless) {
  console.log(iterables[value],value)
}

//for

let carros=["mazda", "BMW","Chevrolet","Kia"]
for(let i=0; i<carros.length; i++){    
    if(carros==="BMW"){
        console.log("Si hay BMW")
    }
    console.log("No hay")
}