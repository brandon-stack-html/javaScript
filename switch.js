const usuario = {
    nombre: 'carlos',
    pais: 'argentina',
};

// Bloque switch
switch(usuario.pais) {
    case 'mexico':
        console.log('El usuario es mexicano.');
        break;
    case 'españa':
        console.log('El usuario es español.');
        break;
    case 'argentina':
        console.log('el usuario es argentino.');
        break;
    default:
        console.log('El usuario es de otro pais.');
}