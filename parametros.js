/**
- parametros: los vslores especificamos en la definicion
-argumentos: los valores que le pasamos a la funcion cuando la invocamos. 
**/


const saludo = (nombre = 'amigo') => {
    console.log(`hola ${nombre}!`);
};

// saludo('carlos');
// saludo('alex');
// saludo('cesar');
// saludo();

/*
multiples parametros
*/

const operacion = (tipo, numero1, numero2) => {
    if(tipo === 'suma') {
        console.log(numero1 + numero2);
    } else if (tipo === 'resta') {
        console.log(numero1 - numero2);
    } else {
        console.log('Tipo de operación no válido');
    }
};

operacion('suma', 2000, 5000);
operacion('resta', 2000, 500);
operacion('suma', 20, 700);
operacion('resta', 5300, 700);
