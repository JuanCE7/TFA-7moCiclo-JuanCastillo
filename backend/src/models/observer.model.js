// En algún archivo observer.js
class Observador {
  actualizar(mensaje) {
    throw new Error('Método actualizar debe ser implementado por las subclases');
  }
}

class Sujeto {
  constructor() {
    this.observadores = [];
  }

  agregarObservador(observador) {
    this.observadores.push(observador);
  }

  eliminarObservador(observador) {
    this.observadores = this.observadores.filter(o => o !== observador);
  }

  notificarObservadores(mensaje) {
    this.observadores.forEach(observador => observador.actualizar(mensaje));
  }
}

// En algún archivo asignacionAyudante.js
class AsignacionAyudante extends Sujeto {
  asignarAyudante(curso, ayudante) {
    // Lógica de asignación de ayudante

    const mensaje = `Se ha asignado a ${ayudante.nombre} como ayudante al curso ${curso.nombre}`;
    this.notificarObservadores(mensaje);
  }
}

// En algún archivo observadores.js
class NotificadorCorreo extends Observador {
  actualizar(mensaje) {
    console.log(`Enviando correo: ${mensaje}`);
    // Lógica para enviar correo electrónico
  }
}

class RegistroBitacora extends Observador {
  actualizar(mensaje) {
    console.log(`Registrando en bitácora: ${mensaje}`);
    // Lógica para registrar en bitácora
  }
}


// En tu aplicación
const asignacionAyudante = new AsignacionAyudante();
const notificadorCorreo = new NotificadorCorreo();
const registroBitacora = new RegistroBitacora();

asignacionAyudante.agregarObservador(notificadorCorreo);
asignacionAyudante.agregarObservador(registroBitacora);

// Simular asignación de ayudante
const curso = { nombre: 'Matemáticas' };
const ayudante = { nombre: 'Juan Pérez' };

asignacionAyudante.asignarAyudante(curso, ayudante);

