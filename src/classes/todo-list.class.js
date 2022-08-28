

export class TodoList {

    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id){
        this.todos=this.todos.filter(todo=>todo.id!=id)
        // el filtro devuelve un arreglo sin el elemento con el id
        // solicitado (con ese id filtrado);
        // Luego asigno ese array a this.todos, y listo. Queda eliminado el 
        // elemento que quería borrar
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for(const todo of this.todos){



            if (todo.id==id){ // doble igual porque el id que viene por argumento es string
                              // y el del array es numérico (y 3 iguales compara también tipo de datos)

                todo.completado=!todo.completado;
                this.guardarLocalStorage();

                break;

            }
        }
    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo=>!todo.completado)
        // filtro los que están incompletos (el filtro devuelve solo los que 
        // siguen pendientes), y luego lo asigno al array
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos) );

    }

    cargarLocalStorage(){
        // if(localStorage.getItem('todo')){
        //     this.todos=JSON.parse(localStorage.getItem('todo'));
        // }else{
        //     this.todos=[];
        // }

        this.todos=(localStorage.getItem('todo'))
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

    }


}