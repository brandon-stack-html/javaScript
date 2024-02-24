/* tipos de datos que podemos guardar en las variables:
// string - cadena de texto
// number - numero
// boolean - booleano (verdadero o falso)
// Object - objeto 
// fuction - funciones

// null - valor nulo 
// undefined - valor sin definir 
*/


// cadena de texto 
const nombre = 'nombre';
const parrafo = 'este es un parrafo';
const parrafo2 = 'este es un parrafo';
// const parrafo3= 'este es un parrafo';


// numero 
const numero = '4';

const numero2 = -4.123;


// boleano
const ususarioconectado = 'false'
const mayorQue = 10 > 2;
console.log (mayorQue);

// arrays - arreglos 
const arreglo = ['texto', 456 , true, {propiedad: 'valor' },  [1, 2, 3]];
console.log(arreglo);

//  objeto
const persona = {
    nombre: 'carlos',
    edad: 27,
    carro: {
        marca: '...',
        color: 'negro',
    },
};
console.log(persona.carro.color);

// funcion 
function hola() {
    console.log('hola');
}
hola();

// null
// normalmente loque queremos es que ese valor sea nulo.
const mivariable = null;

// undefined
// undefined se usa para indicarnos que un  valor no esta definido . 
const mivariable2 = undefined;
