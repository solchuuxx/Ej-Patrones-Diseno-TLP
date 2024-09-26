/* Ejercicio 2: Fabricar Periféricos de Salida
Objetivo: Implementar el patrón Factory Method para crear diferentes periféricos de salida.
● Crear una clase PerifericoSalidaFactory con un método crearPeriferico que, basado en
el tipo ("Monitor", "Impresora", "Proyector"), devuelva una instancia de la clase
correspondiente.
● Crear clases específicas para cada tipo de periférico (Monitor, Impresora, Proyector),
con propiedades particulares (Ej.: resolución para Monitor, tipoImpresión para
Impresora).
● Asegurar que el factory maneje correctamente la creación de cada periférico según el
tipo especificado. */

interface Periferico {
    tipo: string;
    obtenerDetalles(): void;
}

class Monitor implements Periferico {
    tipo: string;
    resolucion: string;

    constructor(resolucion: string) {
        this.tipo = 'Monitor';
        this.resolucion = resolucion;
    }

    obtenerDetalles(): void {
        console.log(`Periferico: ${this.tipo}, Resolucion: ${this.resolucion}`);
    }
}

class Impresora implements Periferico {
    tipo: string;
    tipoImpresion: string;

    constructor(tipoImpresion: string) {
        this.tipo = 'Impresora';
        this.tipoImpresion = tipoImpresion;
    }

    obtenerDetalles(): void {
        console.log(`Periferico: ${this.tipo}, Tipo de Impresion: ${this.tipoImpresion}`);
    }
}

class Proyector implements Periferico {
    tipo: string;
    resolucionMaxima: string;

    constructor(resolucionMaxima: string) {
        this.tipo = 'Proyector';
        this.resolucionMaxima = resolucionMaxima;
    }

    obtenerDetalles(): void {
        console.log(`Periferico: ${this.tipo}, Resolucion Maxima: ${this.resolucionMaxima}`);
    }
}

class PerifericoSalidaFactory {
    public crearPeriferico(tipo: string, especificacion: string): Periferico {
        if (tipo === 'Monitor') {
            return new Monitor(especificacion);
        } else if (tipo === 'Impresora') {
            return new Impresora(especificacion);
        } else if (tipo === 'Proyector') {
            return new Proyector(especificacion);
        }
        throw new Error('Tipo de periferico no reconocido');
    }
}

// factory method
const factory2 = new PerifericoSalidaFactory();

const monitor = factory2.crearPeriferico('Monitor', '1920x1080');
const impresora = factory2.crearPeriferico('Impresora', 'Laser');
const proyector = factory2.crearPeriferico('Proyector', '4k');

monitor.obtenerDetalles();   // Periferico: Monitor, Resolucion: 1920x1080
impresora.obtenerDetalles(); // Periferico: Impresora, Tipo de Impresion: Laser
proyector.obtenerDetalles(); // periferico: Proyector, Resolución maxima: 4k
