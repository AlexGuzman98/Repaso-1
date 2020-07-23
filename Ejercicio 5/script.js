const secret = 15;
let usuario = parseFloat(prompt("Adivine el numero que esta almacenado en el programa"));
while (usuario != secret) {
    if (usuario < secret) {
        console.log('Fallaste el numero es menor al numero adivinado');
     } else if ( usuario > secret) 
         console.log('Fallaste el numero es mayor al numero adivinado');
    usuario = parseFloat(prompt("Adivine el numero que esta almacenado en el programa"));
}
console.log ('El numero secreto es:', secret);
// No entiendo porque el mozilla sirve a la perfeccion y en google chrome hay que poner el numero adivinado de primero para que despues si salga los fallos anteriores. 
// Pruebelo  en mozilla y despues chrome.