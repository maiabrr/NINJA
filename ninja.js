class Ninja{
    constructor(nombre, salud=100, velocidad=3, fuerza=3){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=velocidad;
        this.fuerza=fuerza;
    }
    sayName(){
        console.log("Mi nombre de ninja es: ", this.nombre);
    }
    showStats(){
        console.log("Nombre:", this.nombre);
        console.log("Salud:", this.salud);
        console.log("Velocidad: ", this.velocidad);
        console.log("Fuerza: ", this.fuerza);
    }
    drinkSake(){
        this.salud+=10;
    }
}
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200, 10, 10);
        this.sabiduria =10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("algo sabiondo...");
    }
    drinkSake(){
        super.drinkSake();
        console.log("another wisdom thing...")
    }
}
const sensei1 = new Sensei("Maestro Splinter");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
