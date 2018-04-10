import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    private http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }

    getTest(): Observable<any> {
        return this.http.get('https://cnodejs.org/api/v1/topics/');
    }
}