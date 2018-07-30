import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';

export const AboutRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: AboutComponent },
        ]
    }
];
