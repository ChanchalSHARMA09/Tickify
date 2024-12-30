import { TodoList } from './TodoList.js';
import { TodoInput } from './TodoInput.js';

// Initialize components
const todoList = new TodoList(document.querySelector('#list'));
const todoInput = new TodoInput(document.querySelector('#inputBx'), todoList);