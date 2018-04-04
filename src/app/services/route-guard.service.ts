import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild {

    private appService: AppService;

    constructor(appService: AppService) {
        this.appService = appService;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const { data = {} } = route.routeConfig;
        const { title = 'App.Angular.Com' } = data;
        this.appService.setTitle(title);

        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const { data = {} } = route.routeConfig;
        const { showFooter = true } = data;
        this.appService.toggleFooter(showFooter);

        return true;
    }
}