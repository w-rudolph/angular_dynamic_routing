import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './../../components/custom-input.component';
import { TodosDetailComponent } from './todos-detail.component';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const todosRoutes: Routes = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'detail/:id',
        data: { showFooter: false },
        component: TodosDetailComponent
    }
];

@NgModule({
    declarations: [TodosComponent, TodosDetailComponent, CustomInputComponent],
    imports: [RouterModule.forChild(todosRoutes), FormsModule, ReactiveFormsModule, CommonModule],
    exports: [RouterModule]
})
export class TodosModule { }
