import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NoteService} from './Note.service';

@Component({
  selector: 'app-Note',
  templateUrl: './Note.component.html',
  styleUrls: ['./Note.component.scss'],
  encapsulation: ViewEncapsulation.None,
   providers: [ NoteService ]

})
export class NoteComponent {
    public todoList:Array<any>;
    public newTodoText:string = '';

    constructor( private _todoService:NoteService) {
        this.todoList = this._todoService.getTodoList();
    }

    public  getNotDeleted() {
        return this.todoList.filter((item:any) => {
            return !item.deleted
        })
    }


    public addToDoItem($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
}
