import { Category } from './category.model';
import { Manufacturer } from './manufacturer.model';
import { Attribute } from './attribute.model';
import { Sales } from './sales.model';

export class Product {
    pid:string;
    cid:Category;
    mid:Manufacturer;
    aid:Attribute;
    sid:Sales;
    manufacturer:string;
    series:string;
    model:string;
    detail:string;
    document:string;
    checked:boolean = false;

    constructor(response:any) {
        this.pid = response.pid;
        this.cid = new Category(response.categoryEntity);
        this.mid = new Manufacturer(response.manufacturerEntity);
        this.aid = new Attribute(response.attributeEntity);
        this.sid = new Sales(response.salesEntity);
        this.manufacturer = response.manufacturer;
        this.series = response.series;
        this.model = response.model;
        this.detail = response.detail;
        this.document = response.document;
    }
}