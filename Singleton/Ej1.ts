/*  Ejercicio 1: Gestionar Configuración Global del Sistema
Objetivo: Implementar un patrón Singleton para gestionar la configuración global de la
aplicación de inventario.
● Crear una clase Configuracion que siga el patrón Singleton.
● Esta clase debe almacenar propiedades como idioma, rutaBaseDatos y nivelRegistro.
● Agregar métodos para obtener y actualizar cada una de estas propiedades.
● Asegurar que solo exista una instancia de Configuracion en toda la aplicación. */

interface Inventario {
    idioma: string;
    rutaBaseDatos: string;
    nivelRegistro: string;
}

class Configuracion {
    private idioma: string;
    private rutaBaseDatos: string;
    private nivelRegistro: string;

    private static instancia: Configuracion | null = null;

    private constructor(idioma: string, rutaBaseDatos: string, nivelRegistro: string) {
        this.idioma = idioma;
        this.rutaBaseDatos = rutaBaseDatos;
        this.nivelRegistro = nivelRegistro;
    }

    public static getInstancia(): Configuracion {
        if (this.instancia === null) {
            this.instancia = new Configuracion('es', 'localhost:5432', 'info');
        }
        return this.instancia;
    }

    public obtenerIdioma(): string {
        return this.idioma;
    }

    public obtenerRutaBaseDatos(): string {
        return this.rutaBaseDatos;
    }

    public obtenerNivelRegistro(): string {
        return this.nivelRegistro;
    }

    public actualizarIdioma(idioma: string): void {
        this.idioma = idioma;
    }

    public actualizarRutaBaseDatos(rutaBaseDatos: string): void {
        this.rutaBaseDatos = rutaBaseDatos;
    }

    public actualizarNivelRegistro(nivelRegistro: string): void {
        this.nivelRegistro = nivelRegistro;
    }
}

const config = Configuracion.getInstancia();
console.log(config.obtenerIdioma()); // 'es'
console.log(config.obtenerRutaBaseDatos()); // 'localhost:5432'
console.log(config.obtenerNivelRegistro()); // 'info'

config.actualizarIdioma('en');
config.actualizarRutaBaseDatos('localhost:3306');
config.actualizarNivelRegistro('debug');

console.log(config.obtenerIdioma()); // 'en'
console.log(config.obtenerRutaBaseDatos()); // 'localhost:3306'
console.log(config.obtenerNivelRegistro()); // 'debug'
