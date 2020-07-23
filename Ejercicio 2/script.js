let arregloNum = [];
let total = 0;
for (let i = 0; i < 3; i++) {
    let numeros  = parseInt(prompt('Ingrese un numero'));
     arregloNum.push(numeros);
     arregloNum.sort((a, b) => a - b);
     for (let y = 0 ; y < arregloNum.length; y++){
        total += arregloNum[y];
    }
}

console.log('Suma de los numero es: ', +total);
console.log ('Arreglo', arregloNum);