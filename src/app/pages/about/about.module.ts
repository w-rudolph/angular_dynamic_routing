import { TestService } from './../../services/test.service';
import { AboutRoutes } from './about.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from './about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AboutComponent],
    providers: [TestService],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(AboutRoutes)],
    exports: [RouterModule]
})
export class AboutModule { }