import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { baseUrl } from './environment';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';
import { $ } from 'protractor';

@Injectable()
export class SubCateHttpService implements OnInit{
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    getSubCate(cateName: string): Observable<Category[]>{
        return this.http.get<Category[]>('http://localhost:8080/joole/category/get/ByCname/'+`${cateName}`)
        .pipe(map(res => res.map(item => new Category(item))));
    }
}