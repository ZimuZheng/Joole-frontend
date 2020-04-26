import {Injectable, OnInit} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductHttpService } from './product-http.service';

@Injectable()
export class PassDataService implements OnInit {


    usetype = 'Com';
    application = 'Indoor';
    location = 'Roof';
    accessory = 'With light';

    minAirflow = 2000;
    maxAirflow = 4000;
    minPower = 20;
    maxPower = 1000;
    minSound = 0;
    maxSound = 500;
    minDiameter = 20;
    maxDiameter = 800;

    filterOn:boolean = false;

    currentProduct: Product;

    filterProduct: Product[] = [];

    products: Product[];

    compare: Product[];

    doFilter() {
        for (let index = 0; index < this.products.length; index++) {
            const element = this.products[index];
            if (element.aid.utype == this.usetype &&
                element.aid.app == this.application && 
                element.aid.location == this.location &&
                element.aid.access == this.accessory && 
                +element.aid.airflow >= this.minAirflow &&
                +element.aid.airflow <= this.maxAirflow &&
                +element.aid.maxpower >= this.minPower && 
                +element.aid.maxpower <= this.maxPower &&
                +element.aid.sound >= this.minSound && 
                +element.aid.sound <= this.maxSound &&
                +element.aid.diameter >= this.minDiameter && 
                +element.aid.diameter <= this.maxDiameter
                ) {
                    this.filterProduct.push(element);
                }
            
        }
    }

    constructor() {
    }

    ngOnInit(){
        
    }
}