import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log(req);
        return next.handle(req).pipe(res => {
            console.log(res);
            return Observable.create(observer => observer.next(res))
        });
    }
}