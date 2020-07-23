let cadena =  prompt('Escriba lo que guste')
let cadenarevertida = "";

for(let i = cadena.length-1; i>=0; i--)
{
  cadenarevertida += cadena[i];
}
console.log(cadenarevertida);