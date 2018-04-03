import { AboutComponent } from './pages/about/about.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
];