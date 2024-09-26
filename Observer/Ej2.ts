/* Actualización de Inventario en Tiempo Real
Objetivo: Implementar el patrón Observer para actualizar en tiempo real la interfaz de usuario
cuando se realicen cambios en el inventario.
● Crear una clase InterfazUsuario que actúe como observador y actualice la
visualización del inventario cuando se agreguen, eliminen o modifiquen equipos.
● Modificar la clase Inventario para que permita agregar observadores y notifique a los
observadores correspondientes cuando ocurra un cambio en la lista de equipos.
● Asegurar que múltiples instancias de InterfazUsuario puedan recibir y manejar las
notificaciones adecuadamente. */

interface ObservadorInventario {
    actualizar(inventario: Inventario): void;
}

class InterfazUsuario implements ObservadorInventario {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    actualizar(inventario: Inventario): void {
        console.log(`Actualizacion en ${this.nombre}: El inventario ha sido modificado.`);
        console.log('Equipos actuales en el inventario:', inventario.getEquipos());
    }
}

class Inventario {
    private equipos: string[] = [];
    private observadores: ObservadorInventario[] = [];

    agregarObservador(observador: ObservadorInventario): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: ObservadorInventario): void {
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

    agregarEquipo(equipo: string): void {
        this.equipos.push(equipo);
        this.notificarObservadores();
    }

    eliminarEquipo(equipo: string): void {
        const index = this.equipos.indexOf(equipo);
        if (index !== -1) {
            this.equipos.splice(index, 1);
            this.notificarObservadores();
        }
    }

    modificarEquipo(equipoAntiguo: string, equipoNuevo: string): void {
        const index = this.equipos.indexOf(equipoAntiguo);
        if (index !== -1) {
            this.equipos[index] = equipoNuevo;
            this.notificarObservadores();
        }
    }

    getEquipos(): string[] {
        return this.equipos;
    }
}

const inventario = new Inventario();
const interfaz1 = new InterfazUsuario('Interfaz Usuario 1');
const interfaz2 = new InterfazUsuario('Interfaz Usuario 2');

inventario.agregarObservador(interfaz1);
inventario.agregarObservador(interfaz2);

inventario.agregarEquipo('Laptop Dell');
inventario.agregarEquipo('Monitor Samsung');
inventario.modificarEquipo('Monitor Samsung', 'Monitor LG');
inventario.eliminarEquipo('Laptop Dell');
