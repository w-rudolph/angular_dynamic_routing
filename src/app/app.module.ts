import { AboutComponent } from './pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

if (environment.production) {
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [AppComponent, AboutComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }