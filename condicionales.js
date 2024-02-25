// estructura de una condicional
// if(true) {
    // codigo a ejecutar
// }

// ejemplo 1
//  const usuario = {
//     edad: 17,
//     pais: ' mexico',
//     ticket: true,

// };

// if (usuario.edad > 17) {
//     console.log('el usuario es mayor de edad, puede entrar al concierto');
// } else {
//     console.log('el susuario es menor de edad ,no puede entra al concierto')
// }

// ejemplo 2

// const usuario = {
//     edad: 17,
//     pais: ' mexico',
//     ticket: true,

// };

// if (usuario.edad >= 18 && usuario.ticket) {

//     console.log('el usuario es mayor de edad y tiene un ticket' );

// } else {
//     console.log('el usuario es menor de edad y no tiene ticket');
// }

// ejemplo 3 - anidando condicionales
// const usuario = {
//     edad: 17,
//     pais: ' mexico',
//     ticket: true,

// };

// if (usuario.edad >= 18) {
//     if (usuario.ticket) {
//         console.log('el ususario es mayor de edad y tiene ticket.');
//     } else {
//         console.log('el usuario es mayor de edad, pero no tiene ticket.')
//     }
// } else {
//     console.log('el usuario es menor de edad.')
// }

// ejemplo 4 - elseif
const usuario = {
    edad: 17,
    pais: 'argentina',
    ticket: false,
};

if (usuario.pais === 'mexico') {
    console.log('El usuario es mexicano');
} else if (usuario.pais === 'colombia') {
    console.log('El usuario es colombiano');
} else if (usuario.pais === 'españa') {
    console.log('El usuario es español');
} else {
    console.log('el usuatio es de otro pais');
}

