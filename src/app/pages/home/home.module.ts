import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(HomeRoutes)]
})
export class HomeModule { }