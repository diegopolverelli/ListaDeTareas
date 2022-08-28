
export class Todo{

    // cuando guardo en localStorage, se pierde la clase;
    // Recupero un objeto, pero no sé de que tipo. Por lo tanto no 
    // puedo aplicar métodos de esa clase
    // Para este programa es innecesario, porque no se utilizan métodos.
    // Pero puede ser de utilidad en otros sistemas
    // Debido a eso creo el siguiente método, para que en base a una tarea
    // (lo que recupero del localStorage, que es un listado de objetos tarea, pero no todo...)
    // se arme una instancia de Todo
    static fromJson({id, tarea, completado, creado}){
        // la función recibe un obj... solo un argumento... 
        // lo que estoy haciendo con el {id, tarea...} es desestructurar
        // el objeto. Si veo como argumento algo así: {p1, p2, p3...} significa que hay un
        // argumento que es un objeto, y se están combirtiendo sus propiedades 
        // a parámetros (que es lo que se conoce como desestructuración)

        const tempTodo=new Todo(tarea);

        tempTodo.id=id;
        tempTodo.completado=completado;
        tempTodo.creado=creado;

        return tempTodo;
    }

    constructor(tarea){

        this.tarea=tarea;

        this.id=new Date().getTime();
        this.completado=false;
        this.creado=new Date();
        
    }

    

}

