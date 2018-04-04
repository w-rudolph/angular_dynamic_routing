import { TodosDetailComponent } from './todos-detail.component';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
]

@NgModule({
    declarations: [TodosComponent, TodosDetailComponent],
    imports: [RouterModule.forChild(todosRoutes)],
    exports: [RouterModule]
})
export class TodosModule { }