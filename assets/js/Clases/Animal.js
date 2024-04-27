export default class Animal{
    #tipo;
    constructor(tipo){
        this.#tipo = tipo;
    }

    //métodos getter
    get tipo(){
        return `El tipo de animal es un: ${this.#tipo}`;
    }

    //métodos setter
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
        return this.#tipo;
    }
}
