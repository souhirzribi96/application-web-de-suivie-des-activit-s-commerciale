import {Injectable} from '@angular/core';

@Injectable()
export class NoteService {

    private _todoList = [

    ];

    getTodoList() {
        return this._todoList;
    }
}
