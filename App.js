/*A continuación, mostraremos un ejemplo práctico: creamos una clase `tigre` 
tiene un constructor que inicializa  propiedades como `nombre`, `tipo` y `tamaño` 
al crear una instancia de la clase. Además, tiene métodos tales como: `correr()`, `cazar()`, 
y `describir()` que pueden utilizarse como instancias de la clase para ejecutar acciones 
especificas o devolver información sobre el objeto.*/

// Definición de la clase Owl en JavaScript

class tigre {
  constructor(nombre, tipo, tamaño) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.tamaño = tamaño;
  }

  correr() {
    return `${this.nombre} está corriendo silenciosamente.`;
  }

  cazar(presa) {
    return `${this.nombre}, el tigre ${this.tipo}, ha capturado una presa: ${presa}.`;
  }

  describir() {
    return `${this.nombre} es un tigre de tipo ${this.tipo} y tamaño ${this.tamaño}.`;
  }
}

// Crear instancias de la clase Owl
const tigre_1 = new tigre("felino", "tigrillo", "Mediano");
const tigre_2 = new tigre("tigre", "jaguar", "Grande");

// Acceder a los métodos y propiedades de las instancias
console.log(tigre_1.describir());
console.log(tigre_2.cazar("venado"));
console.log(tigre_1.correr());
