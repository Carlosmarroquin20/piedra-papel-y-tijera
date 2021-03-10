
//Inicio de codigo
process.stdin.resume();
process.stdin.setEncoding('utf8');

//Variables
var Calculos0;
var Random0;
var Calculos001;
var Random001;

function aleatorio(min, max) {
    return Math.random()*(max-min)+min; //Eleccion de Numero Random
}

Calculos0 = Math.floor(aleatorio(1, 4)); //Numero random capturado

//If para elecciones jugador 1
if (Calculos0 == 1){
    Random0 = "Piedra";
}
if (Calculos0 == 2) {
    Random0 = "Papel";
}
if (Calculos0 == 3){
    Random0 = "Tijera";
}

Calculos001 = Math.floor(aleatorio(1, 4));

//If para elecciones jugador 2
if (Calculos001 == 1){
    Random001 = "Piedra";
}
if (Calculos001 == 2) {
    Random001 = "Papel";
}
if (Calculos001 == 3){
    Random001 = "Tijera";
}

//BIENVENIDA
console.log("");
console.log("----------------------------------------------------|");
console.log("                                                    |");
console.log("--------------BIENVENIDO!!!-------------------------|");
console.log("                                                    |");
console.log("----------------------------------------------------|");
console.log(" -PIEDRA, PAPEL Y TIJERA- Diversion garantizada!!!  |");
console.log("                                                    |");
console.log("----------------------------------------------------|");
console.log();

console.log("----------------------------------------------------|");
console.log("                                                    |");
console.log("Carlos saco  " + Random0 + "!!!!!");
console.log();
console.log("y Emanuel saco " + Random001 + "!!!!!");
console.log("                                                    |");
console.log("----------------------------------------------------|");
console.log();
     

//If para calcular y respuesta a resultados
if (Random0 == "Piedra" && Random001 == "Piedra"){
    console.log("Empate, Empate, Otra veeez!!!! ")
}
 if (Random0 == "Piedra" && Random001 == "Papel"){
    console.log("Emanuel Ganooooo!!")
}
if (Random0 == "Piedra" && Random001 == "Tijera"){
    console.log("Carlos GANAAAA!!!!!")
}
if (Random0 == "Papel" && Random001 == "Piedra"){
    console.log("Carlos Gana con el PAPEL")
}
if (Random0 == "Papel" && Random001 == "Papel"){
   console.log("OOOOO empate!!!")
}
if (Random0 == "Papel" && Random001 == "Tijera"){
    console.log("Emanuel destroza a carlos")
}
if (Random0 == "Tijera" && Random001 == "Piedra"){
    console.log("Piedra mata tijera, Gana Emanuel!!!!!")
}
if (Random0 == "Tijera" && Random001 == "Papel"){
    console.log(" Tijera corta a papeeel, Gana Carlos")
}
if (Random0 == "Tijera" && Random001 == "Tijera"){
    console.log("Empate, Empate!!!!!! Tijera contra tijera!!!")
}