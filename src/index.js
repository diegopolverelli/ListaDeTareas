
import './styles.css';

// import { Todo } from './class/todo.class';
// import { TodoList } from './class/todo-list.class';
import {Todo, TodoList} from './classes' // no hace falta especificar el index.js
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript...!!!');

// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','prueba');
// setTimeout(()=>{
//     localStorage.removeItem('mi-key');
// },2000);

todoList.todos.forEach(todo=>crearTodoHtml(todo));

// tambien se podría escribir así:
// todoList.todos.forEach(crearTodoHtml);
// si la función que ejecuto tiene solo un argumento, y que es 
// el ítem que se va recorriendo del array, puedo obviar 
// el ítem, la flecha, y el parámetro... 
// la función solo tiene que tener 1 único argumento

