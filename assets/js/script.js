import Propietario from "./Clases/Propietario.js";
import Mascota from "./Clases/Mascota.js";

const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        let datos = new FormData(formRegistro);

        let nombrePropietario = datos.get("propietario");
        let telefono = datos.get("telefono");
        let direccion = datos.get("direccion");
        let nombreMascota = datos.get("nombreMascota");
        let tipoMascota = datos.get("tipo");
        let motivoConsulta = datos.get("enfermedad");

        let propietario = new Propietario(
            nombrePropietario,
            direccion,
            telefono
        );

        if (tipoMascota == "perro") {
            let perro = new Mascota(tipoMascota, nombreMascota, motivoConsulta);

            propietario.mascota = perro;
        } else if (tipoMascota == "gato") {
            let gato = new Mascota(tipoMascota, nombreMascota, motivoConsulta);
            propietario.mascota = gato;
        } else if (tipoMascota == "conejo") {
            let conejo = new Mascota(
                tipoMascota,
                nombreMascota,
                motivoConsulta
            );
            propietario.mascota = conejo;
        } else {
            return alert("Tipo de mascota no reconocido.");
        }

        const lista = document.querySelector("#resultado > ul");

        let plantilla = `
            <li>${propietario.datosPropietario()}</li>
            <li>${propietario.mascota.tipo
            }, el nombre de la mascota es: ${propietario.mascota.nombre
            } y el diagnóstico es: ${propietario.mascota.enfermedad} </li>
    `;

        lista.innerHTML += plantilla;

        formRegistro.reset();

        alert("Datos cargados correctamente.");
    } catch (error) {
        alert(error.message);
    }
});
