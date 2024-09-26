/* Objetivo: Utilizar el patrón Observer para notificar al departamento de mantenimiento cuando
un equipo alcanza un cierto tiempo de uso.
● Crear una clase DepartamentoMantenimiento que actúe como observador y reciba
notificaciones cuando un equipo necesite mantenimiento preventivo.
● Implementar la clase Equipo que permita agregar observadores y notifique a los
observadores cuando su tiempo de uso alcance un umbral definido.
● Definir propiedades como nombre, tipo, estado y tiempoUso en la clase Equipo. */

// interfaz para los observadores
interface Observador {
    actualizar(equipo: Equipo): void;
}

// actua como observador
class DepartamentoMantenimiento implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`Notificacion: El equipo ${equipo.nombre} ha alcanzado el tiempo de uso maximo y requiere mantenimiento preventivo.`);
    }
}

class Equipo {
    public nombre: string;
    public tipo: string;
    public estado: string;
    public tiempoUso: number;

    private observadores: Observador[] = [];
    private umbralMantenimiento: number;

    constructor(nombre: string, tipo: string, estado: string, tiempoUso: number, umbralMantenimiento: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
        this.tiempoUso = tiempoUso;
        this.umbralMantenimiento = umbralMantenimiento;
    }

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        const index = this.observadores.indexOf(observador);
        if (index !== -1) {
            this.observadores.splice(index, 1);
        }
    }

    notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.actualizar(this);
        }
    }

    incrementarTiempoUso(horas: number): void {
        this.tiempoUso += horas;
        console.log(`El equipo ${this.nombre} ha sido utilizado por ${this.tiempoUso} horas.`);

        if (this.tiempoUso >= this.umbralMantenimiento) {
            this.notificarObservadores(); 
        }
    }
}

const equipo1 = new Equipo('Servidor Principal', 'Servidor', 'En operacion', 90, 100);
const departamentoMantenimiento = new DepartamentoMantenimiento();

equipo1.agregarObservador(departamentoMantenimiento);

// Simulacion uso del equipo
equipo1.incrementarTiempoUso(15); // no se alcanza el umbral, no hay notificacion
equipo1.incrementarTiempoUso(10); // Se supera el umbral de 100 horas, se notifica al observador
