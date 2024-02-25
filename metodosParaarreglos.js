const colores = ['rojo', 'verde', 'azul'];


/*
.length
(propiedad) - nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colores.length);

/** 
 .toString()
 nos permite transformar a una cadena de texto.
 por ejemplo para poder mostrarlo en el navegador.
**/

// document.body.innerHTML = colores .toString();


/*
.join( )
nos permite transformar un arrglo a una cadena de tecto y separar como elemento .
*/
console.log(colores.join('- -'));

// .sort()
// nos permite ordenar un arreglo de cadenas, de taxto, de forma alfabetica. 

const letras = ['c', 'b','a', 'd'];
console.log(letras.sort());


const numeros = [2,3,4,1]
console.log(numeros.sort());

// .reverse(
    // nos permite ordenar un arreglo de forma descendente. 
    console.log(letras.reverse());
    console.log(numeros.reverse());

// .concat()
// nos permite juntar arreglos en una foto . 


const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);


// .push()
colores.push('amarillo');
console.log(colores);

// .pop(
    // nos permite eliminar el ultimo elemento de un arreglo.
    colores.pop();
    console.log(colores);

    // .shift()
    // elimina el primer elemento de un arreglo y recorre los elementos

    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
    console.log(dias[0]);

    // .unshift()

    dias.unshift('carlos');
    console.log(dias);

    // .splice()
    // nos permite insertar elemntos a un arreglo donde le especificamos. 
    // - 1er parametro - pocision donde queremos comenzar a insertar los Elementos. 
    // 2do parametro - si queremos eliminar elmentos del arrglo desde la posicion indicada. 
    const amigos = ['alejandro', 'cesar', 'manuel'];
    amigos.splice(1, 2, 'rafael', 'roberto');
    console.log(amigos);
    






























