import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    fd = new FormGroup({
        test: new FormControl('test', [Validators.required])
    });
    test1 = 'test1';
    constructor() { }
    ngOnInit() { }
}
