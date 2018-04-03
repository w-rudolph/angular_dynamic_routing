import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'todos', loadChildren: './pages/todos/todos.module#TodosModule'}
];