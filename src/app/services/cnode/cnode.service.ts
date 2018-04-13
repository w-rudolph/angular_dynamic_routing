import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Tab } from '../../models/cnode/topic.model';

const BASE_API = 'https://cnodejs.org/api/v1';

@Injectable()
export class CNodeService {

    constructor(private http: HttpClient) { }

    /**
     * @description 获取主题
     * @param {Number} page 页数
     * @param {String} tab 主题分类(ask share job good)
     * @param {Number} limit 每一页的主题数量
     * @param {String} mdrender 是否渲染markdown格式, default: 'true'
     * @return {Observable} Observable
     */
    getTopics({ page = 1, tab = Tab.all, limit = 40, mdrender = 'true' }): Observable<any> {
        const params =
            new HttpParams()
                .set('page', String(page))
                .set('tab', tab)
                .set('limit', String(limit))
                .set('mdrender', mdrender);

        return this.http.get(BASE_API + '/topics', { params });
    }

    /**
     * @description 获取主题详情
     * @param {String} id 主题id
     * @return {Observable} Observable
     */
    getTopic(id: String): Observable<any> {
        return this.http.get(BASE_API + '/topic/' + id);
    }
}

