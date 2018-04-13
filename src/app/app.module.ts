import { HttpInterceptorService } from './services/httpInterceptor.service';
import { LoadingComponent } from './components/loading.component';
import { LoadingBarComponent } from './components/loading-bar.component';
import { ModalComponent } from './components/modal.component';
import { RouteGuardService } from './services/route-guard.service';
import { AppService } from './services/app.service';
import { ToolbarComponent } from './components/toolbar.component';
import { AppFooterComponent } from './app-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
// declare var require: any;

if (environment.production) {
    enableProdMode();
} else {
    // const VConsole = require('vconsole');
    // new VConsole();
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {
            useHash: true
        }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        AppService,
        RouteGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],
    declarations: [
        AppComponent,
        AppFooterComponent,
        ToolbarComponent,
        ModalComponent,
        HomeComponent,
        LoadingBarComponent,
        LoadingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }