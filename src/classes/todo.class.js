export class Todo {
    static fromJson( {id, tarea, completado, creado} ) {
        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        
        return tempTodo;
    }

    constructor(tarea) { // Le paso como parametro tarea ya que será lo que yo necesite, y lo que necesite hacer en tarea recibira todo lo de abajo
        this.tarea = tarea;

        this.id = new Date().getTime(); // Representacion actual 
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`)
    }
}