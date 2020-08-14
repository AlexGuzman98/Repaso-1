let num = parseInt(prompt('Ingrese un Numero: '));

let contador = 2;

let primo = true;

while (contador < num) {
    if (num % contador == 0) {
        primo = false;
    }
    contador++;
}

if (primo) {
    console.log('El numero es primo');
} else {
    console.log('El numero no es primo');
}