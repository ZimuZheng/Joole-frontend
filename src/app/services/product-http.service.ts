

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, pipe} from 'rxjs';
import { Attribute } from '../models/attribute.model';

import { catchError, map, tap, filter } from 'rxjs/operators';
import { Product } from '../models/product.model';



import {baseUrl, setting} from '../services/environment';
import { Sales } from '../models/sales.model';
import { Manufacturer } from '../models/manufacturer.model';


@Injectable()
export class ProductHttpService implements OnInit {

  constructor(private http: HttpClient) {
  }


  ngOnInit() {

  }

  getProduct(cateName: string) : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/joole/product/get/byCategory/'+`${cateName}`)
        .pipe(map(res => res.map(item => new Product(item))));
  }
}
