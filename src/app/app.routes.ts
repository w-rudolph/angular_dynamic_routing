import { HomeComponent } from './pages/home/home.component';
import { Routes, CanActivateChild } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: '主页' } },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'todos', data: { title: 'todos' }, canActivateChild: [RouteGuardService], loadChildren: './pages/todos/todos.module#TodosModule' }
];