/* Ejercicio 1: Crear Dispositivos de Entrada
Objetivo: Utilizar el patrón Factory Method para crear diferentes tipos de dispositivos de
entrada.
● Crear una clase DispositivoEntradaFactory con un método crearDispositivo que,
basado en el tipo de dispositivo ("Teclado", "Ratón", "Scanner"), devuelva una
instancia de la clase adecuada.
● Crear clases específicas para cada tipo de dispositivo (Teclado, Ratón, Scanner), cada
una con sus propias propiedades (Ej.: tipoConexion, marca).
● Integrar la creación de estos dispositivos en el sistema de inventario. */

// interfaz general para todos los dispositivos de entrada
interface Dispositivo {
    tipo: string;
    obtenerDetalles(): void;
}

class Teclado implements Dispositivo {
    tipo: string;
    tipoConexion: string;
    marca: string;

    constructor(tipoConexion: string, marca: string) {
        this.tipo = 'Teclado';
        this.tipoConexion = tipoConexion;
        this.marca = marca;
    }

    obtenerDetalles(): void {
        console.log(`Dispositivo: ${this.tipo}, Marca: ${this.marca}, Conexión: ${this.tipoConexion}`);
    }
}

class Raton implements Dispositivo {
    tipo: string;
    tipoConexion: string;
    marca: string;

    constructor(tipoConexion: string, marca: string) {
        this.tipo = 'Raton';
        this.tipoConexion = tipoConexion;
        this.marca = marca;
    }

    obtenerDetalles(): void {
        console.log(`Dispositivo: ${this.tipo}, Marca: ${this.marca}, Conexión: ${this.tipoConexion}`);
    }
}

class Scanner implements Dispositivo {
    tipo: string;
    tipoConexion: string;
    marca: string;

    constructor(tipoConexion: string, marca: string) {
        this.tipo = 'Scanner';
        this.tipoConexion = tipoConexion;
        this.marca = marca;
    }

    obtenerDetalles(): void {
        console.log(`Dispositivo: ${this.tipo}, Marca: ${this.marca}, Conexión: ${this.tipoConexion}`);
    }
}

class DispositivoEntradaFactory {
    public crearDispositivo(tipo: string, tipoConexion: string, marca: string): Dispositivo {
        if (tipo === 'Teclado') {
            return new Teclado(tipoConexion, marca);
        } else if (tipo === 'Raton') {
            return new Raton(tipoConexion, marca);
        } else if (tipo === 'Scanner') {
            return new Scanner(tipoConexion, marca);
        }
        throw new Error('tipo de dispositivo no reconocido');
    }
}

//uso del factory Method para crear dispositivos
const factory = new DispositivoEntradaFactory();

const teclado = factory.crearDispositivo('Teclado', 'USB', 'Logitech');
const raton = factory.crearDispositivo('Raton', 'Bluetooth', 'Microsoft');
const scanner = factory.crearDispositivo('Scanner', 'Wifi', 'Canon');

teclado.obtenerDetalles(); // Dispositivo: Teclado, Marca: Logitech, Conexión: USB
raton.obtenerDetalles();   // dispositivo: Raton, Marca: Microsoft, Conexión: Bluetooth
scanner.obtenerDetalles(); // Dispositivo: Scanner, Marca: Canon, Conexión: Wifi