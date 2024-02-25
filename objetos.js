const persona = {
    nombre: 'carlos',
    edad: 27,
    correo: 'correo@correo.com',
    suscripciones: {
       web: true,
       correo: true
    },
    coloresFavoritos: ['negro', 'rojo'],
    saludo: function() {
        alert('¡Hola! Mi nombre es ' + this.nombre);
    },
};

// Accede a las propiedades 'nombre' y 'edad' de persona
console.log(persona.nombre);
console.log(persona.edad);

const variable = 'suscripciones';
// Accede a la propiedad 'suscripciones' de persona usando una variable
console.log(persona[variable]);

// Accede a una propiedad anidada dentro de 'suscripciones'
console.log(persona.suscripciones.correo);

// Agrega una nueva propiedad 'pais' y la modifica
persona.pais = 'mexico';
persona.pais = 'españa';

// Muestra el objeto persona actualizado
console.log(persona);

// Llama al método 'saludo' de persona
persona.saludo();

