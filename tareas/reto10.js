/* 
NOTA: Se le llama instanciar una clase, crear un objeto o crear una instancia a la acción de crear un nuevo objeto basado en una clase particular. 
Esta acción la realizamos a través de la palabra clave new, seguida del nombre de la clase, la cuál puede tener parámetros, en cuyo caso se 
controlarían desde un constructor */
//Crea una clase llamada Punto con sus dos coordenadas X e Y

/* class Punto {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
const coordenada= new Punto(2,8);
const planos = new Punto (3,5);
console.log(coordenada)
console.log(planos)

///////////////////////////////////////////////////////////////////

/* Añade un método constructor para crear puntos fácilmente. Si no se recibe una coordenada,
su valor será cero. */

/* class Punto {
    constructor(x,y){

        if(x){
           this.x = x; 
        }
        else{
            this.x=0;
        }
        if(y){
           this.y = y; 
        }
        else{
            this.y=0;
        }
    }
}
const coordenada= new Punto(20,28);
console.log(coordenada)
const x = new Punto (0)
console.log(x)
const y = new Punto (2)
console.log(y)
const m = new Punto ()
console.log(m)
 */

/* Crea un método llamado ver para que al imprimir por pantalla un punto aparezca en formato (X,Y) */

/* class Punto {
    constructor(x,y){

        if(x){
           this.x = x; 
        }
        else{
            this.x=0;
        }
        if(y){
           this.y = y; 
        }
        else{
            this.y=0;
        }
    }
    ver(){
        console.log(`(${this.x},${this.y})`)
    }
}
const coordenada= new Punto(20,28);
console.log(coordenada.x, coordenada.y);
coordenada.ver();*/


/* Añade un método llamado vector, que toma otro punto y calcula el vector resultante entre los dos puntos (en el nuevo punto X es la suma de las coordenadas en X y Y es la suma de las dos coordenadas en Y) */

class Punto {
    constructor(x,y){
        this.x = x;
        this.y = y;


        if(x){
            this.x = x; 
         }
         else{
             this.x=0;
         }
         if(y){
            this.y = y; 
         }
         else{
             this.y=0;
         }
    }

    ver(){
        console.log(`(${this.x},${this.y})`)
    }

    vector(punto){
        let nuevoVectorX = this.x + punto.x;
        let nuevoVectorY = this.y + punto.y;
        return new Punto( nuevoVectorX, nuevoVectorY);
    }
}
const coordenada= new Punto(2,8);
console.log(coordenada.x, coordenada.y);
coordenada.ver();


const puntos = new Punto(12,2)
console.log(coordenada.vector(puntos));

//Añade un método llamado distancia, que tome otro punto y calcule la distancia entre los dos 
//puntos y la muestre por pantalla. La fórmula es la siguiente:


