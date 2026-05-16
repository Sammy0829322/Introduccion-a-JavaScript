// arreglo de frutas usando for 
let frutas = ["manzana", "pera", "manzana", "platano", "pera", "manzana", "kiwi","sandia","melon","platano","platano","melon"];

let conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];
  if (conteoFrutas[fruta]) {
    conteoFrutas[fruta]++;
  } 
  else {
    conteoFrutas[fruta] = 1;
  }
}
console.log("Conteo de frutas:");
console.log(conteoFrutas);

// arreglo de frutas usando un while


let frutas = ["manzana", "pera", "manzana", "platano", "pera", "manzana", "kiwi","sandia","melon","platano","platano","melon"];

let conteoFrutas = {};
let cont=0
let total_frutas = frutas.length
while (cont < total_frutas) {
    let fruta = frutas[cont];
  if (conteoFrutas[fruta]) {
    conteoFrutas[fruta]++;
  } 
  else {
    conteoFrutas[fruta] = 1;
  }
    cont++
}
console.log("Conteo de frutas:");
console.log(conteoFrutas);

