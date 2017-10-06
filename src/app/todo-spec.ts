import { TestBed, async } from '@angular/core/testing';
import { Todo } from './todo';

describe('Todo', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                Todo
            ],
        }).compileComponents();
    }));

    it( 'должно создать экзепляр класса', async(() => {
        expect( new Todo() ).toBeTruthy();
    }));

    it( 'должно принять значения в конструктор', async(() => {
        const todo = new Todo( {
            title: 'привет',
            complete: true
        } );

        expect( todo.title ).toEqual( 'привет' );
        expect( todo.complete ).toEqual( true );
    }));
});
