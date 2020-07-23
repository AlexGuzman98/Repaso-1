let fechaAnual= parseInt(prompt('Ingrese la fecha'));

if (fechaAnual % 4 == 0){
    console.log('La fecha SI es bisiesto');
} else if (fechaAnual % 400 == 0){
    console.log('La fecha  SI es bisiesto');
} else if (fechaAnual % 100 != 0) {
    console.log('La fecha  NO es bisiesto');

}
console.log(fechaAnual);
