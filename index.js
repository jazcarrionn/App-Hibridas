const Alumno = require ('./Alumno.js')

let nombre = "Ana y Jaz";

const alumno1 = new Alumno ("Carlos", "Ruis", 27, "Dw");
alumno1.modificarEdad(35);

console.log(alumno1.edad);