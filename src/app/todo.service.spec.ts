import {TestBed, inject} from '@angular/core/testing';

import {Todo} from './todo';
import {TodoService} from './todo.service';

describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService]
        });
    });

    it('should be created', inject([TodoService], (service: TodoService) => {
        expect(service).toBeTruthy();
    }));

    describe('#getAllTotals()', () => {
        it('should return default empty array', inject([TodoService], (service: TodoService) => {
                expect(service.getAllTodos()).toEqual([]);
            })
        );

        it('should return all todos', inject([TodoService], (service: TodoService) => {
                const todo1 = new Todo({title: 'Hello', complete: false});
                const todo2 = new Todo({title: 'Hello 2', complete: false});

                service.addTodo(todo1);
                service.addTodo(todo2);

                expect(service.getAllTodos()).toEqual([todo1, todo2]);
            })
        );
    });

});
