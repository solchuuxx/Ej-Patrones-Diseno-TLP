/* Ejercicio 2: Control de Conexiones a la Base de Datos
Objetivo: Utilizar el patrón Singleton para manejar la conexión a la base de datos de
inventario.
● Crear una clase ConexionDB que siga el patrón Singleton.
● Esta clase debe manejar la conexión a una base de datos ficticia, con propiedades
como host, puerto y usuario.
● Implementar métodos para conectar y desconectar la base de datos.
● Garantizar que todas las partes de la aplicación utilicen la misma instancia de
ConexionDB. */

interface Datosdb {
    host: string;
    puerto: number;
    username: string;
}

class ConexionDB {
    // propiedad privada estatica en donde se almacena la unica instancia de la clase
    private static instancia: ConexionDB;
    private host: string;
    private puerto: number;
    private username: string;
    private conectado: boolean = false;

    private constructor(datos: Datosdb) {
        this.host = datos.host;
        this.puerto = datos.puerto;
        this.username = datos.username;
    }

    public static obtenerInstancia(datos: Datosdb): ConexionDB {
        if (!ConexionDB.instancia) {
            ConexionDB.instancia = new ConexionDB(datos);
        }
        return ConexionDB.instancia;
    }

    public conectarDB(): void {
        if (!this.conectado) {
            console.log(`Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.username}...`);
            this.conectado = true;
        } else {
            console.log("Ya estas conectado a la base de datos.");
        }
    }

    public desconectarDB(): void {
        if (this.conectado) {
            console.log("Desconectando de la base de datos..");
            this.conectado = false;
        } else {
            console.log("No estas conectado a la base de datos.");
        }
    }
}

// uso del patron singleton
const datosConexion: Datosdb = { host: "localhost", puerto: 5432, username: "admin" };

const conexion1 = ConexionDB.obtenerInstancia(datosConexion);
conexion1.conectarDB(); //conectando a la base de datos

const conexion2 = ConexionDB.obtenerInstancia(datosConexion);
conexion2.conectarDB(); // conectado a la base de datos.

conexion1.desconectarDB(); // desconectando de la base de datos..
conexion2.desconectarDB(); // No estás conectado a la base de datos.
