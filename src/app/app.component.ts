import {Component} from '@angular/core';
import {TodoAppComponent} from "./todo-app/todo-app.component";

@Component({
    moduleId: module.id,
    selector: 'app-todo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    entryComponents: [TodoAppComponent]
})
export class AppComponent {

}
