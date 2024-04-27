import Animal from "./Animal.js";

export default class Mascota extends Animal{
    #nombre;
    #enfermedad;
    constructor(tipo, nombre, enfermedad){
        super(tipo);
        this.#nombre = nombre;
        this.#enfermedad = enfermedad;
    }

    //métodos getter
    get nombre(){
        return this.#nombre;
    }

    get enfermedad(){
        return this.#enfermedad;
    }

    //métodos setter
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
        return this.#nombre;
    }

    set enfermedad(nuevaEnfermedad){
        this.#enfermedad = nuevaEnfermedad;
        return this.#enfermedad;
    }
}

