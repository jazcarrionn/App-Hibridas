class Alumno {
    //atributos
    nombre = ""; 
    apellido ="";
    carrera = "";
    materia = "";
    edad = "";
    //metodos 
    constructor(nombre, apellido, carrera, materia, edad =[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrera = carrera;
        this.materia = materia;
        this.edad = edad;
    }

    //obetener el nombre de la carrera
    obtenerCarrera(){
        return this.carrera;
    }

    //obtener nombre y apellido concatenados
    obtenerDatos(){
        return '${this.nombre} ${this.apellido}';
    }

    //modifica la edad
    modificarEdad(nuevaEdad){
        this.edad = nuevaEdad;
    }

    //agregar una materia a array
    agregarMateria(materia){
        this.materia.push(materia);
    }

    //muestra las materias e forma de tabla 
    mostrarMaterias(){
        console.table(this.materias);
    }

    //devuelve la edad del alumno
    retornarEdad(){
        return this.edad;
    }

}

module.exports = Alumno; 