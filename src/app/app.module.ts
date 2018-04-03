import { HomeComponent } from './pages/home/home.component';
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
        RouterModule.forRoot(appRoutes, {
            useHash: true
        }),
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }