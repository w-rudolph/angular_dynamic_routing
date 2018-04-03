import { AboutRoutes } from './about.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, RouterModule.forChild(AboutRoutes)],
    exports: [RouterModule]
})
export class AboutModule { }