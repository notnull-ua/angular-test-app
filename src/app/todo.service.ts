import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {

    constructor() {
    }

    lastId: number = 0;

    todos: Todo[] = [];

    addTodo(todo: Todo): TodoService {

        if (!todo.title) {
            return;
        }

        if (!todo.id) {

            todo.id = ++this.lastId;
        }

        this.todos.push(todo);

        return this;
    }

    deleteTodoById(id: number): TodoService {

        this.todos = this.todos.filter(todo => todo.id !== id);

        return this;
    }

    updateTodoById(id: number, values: Object = {}): Todo {

        const todo = this.getTodoById(id);

        if (!todo) {
            return null;
        }

        Object.assign(todo, values);

        return todo;


    }

    getTodoById(id: number): Todo {

        return this.todos.find(todo => todo.id === id);
    }


    getAllTodos(): Todo[] {
        return this.todos;
    }

    toggleTodoComplete(todo: Todo) {
        const updateTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });

        return updateTodo;
    }

}
