import Mascota from "./Mascota.js"
export default class Propietario{
    #nombre;
    #direccion;
    #telefono;
    #mascota;
    constructor(nombre, direccion, telefono, mascota = {}){
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
        this.#mascota = mascota;
    }

    //métodos getter
    get nombre(){
        return this.#nombre;
    }
    get direccion(){
        return this.#direccion;
    }
    get telefono(){
        return this.#telefono;
    }
    get mascota(){
        return this.#mascota;
    }

    //métodos setter
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
        return this.#nombre;
    }
    set direccion(nuevaDireccion){
        this.#direccion = nuevaDireccion;
        return this.#direccion;
    }
    set telefono(nuevoTelefono){
        this.#telefono = nuevoTelefono;
        return this.#telefono;
    }
    set mascota(nuevaMascota){
        if(nuevaMascota instanceof Mascota){
            this.#mascota = nuevaMascota;
            return this.#mascota;
        }else{
            throw new Error("El argumento de mascota asignado no corresponde a una instancia de mascota.");
        }
    }


    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.#direccion}, y el número teléfonico de contacto es: ${this.telefono}`;
    }
}

