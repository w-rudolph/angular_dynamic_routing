import { ToolbarComponent } from './components/toolbar.component';
import { AppFooterComponent } from './app-footer.component';
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
    declarations: [
        AppComponent,
        AppFooterComponent,
        ToolbarComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }