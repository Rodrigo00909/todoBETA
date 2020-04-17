import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

/* const tarea = new Todo('Finalizar de aprender JavaScript');
const tarea2 = new Todo('Empezar con ReactJS');
todoList.nuevoTodo(tarea);


console.log(todoList); */

/* crearTodoHtml(tarea); */

/* localStorage.setItem('mi-key', 'ABC123'); */
/* sessionStorage.setItem('mi-key', 'ABC1234'); */

/* setTimeout( () =>{
    localStorage.removeItem('mi-key');
}, 1500); */

todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach( crearTodoHtml ); // asi tb se puede hacer. Pero solo funciona si es solo UN arg


console.log('todos', todoList.todos);
