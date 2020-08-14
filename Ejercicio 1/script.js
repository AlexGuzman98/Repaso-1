let fecha = parseInt(prompt('Digite un año: '));

if (fecha % 4 == 0 && fecha % 100 != 0 || fecha % 400 == 0){
    console.log('Año bisiesto');
}else{
    console.log('Año no bisiesto');
}