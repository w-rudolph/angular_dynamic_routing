import { HomeComponent } from './pages/home/home.component';
import { Routes, CanActivateChild } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '主页' },
    canActivate: [RouteGuardService],
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
    data: { title: '关于' },
    canActivate: [RouteGuardService],
  },
  {
    path: 'todos',
    loadChildren: './pages/todos/todos.module#TodosModule',
    data: { title: 'todos' },
    canActivate: [RouteGuardService],
    canActivateChild: [RouteGuardService]
  }
];