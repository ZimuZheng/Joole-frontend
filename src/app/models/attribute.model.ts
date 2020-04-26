export class Attribute {
    aid:string;
    utype:string;
    app:string;
    location:string;
    access:string;
    year:string;
    airflow:string;
    maxpower:string;
    minpower:string;
    maxvac:string;
    minvac:string;
    maxspeed:string;
    minspeed:string;
    speeds:string;
    sound:string;
    diameter:string;
    maxheight:string;
    minheight:string;
    weight:string;

    constructor(responce:any){
        this.aid = responce.aid;
        this.utype = responce.utype;
        this.app = responce.app;
        this.location = responce.location;
        this.access = responce.access;
        this.year = responce.year;
        this.airflow = responce.airflow;
        this.maxpower = responce.maxpower;
        this.minpower = responce.minpower;
        this.maxvac = responce.maxvac;
        this.minvac = responce.minvac;
        this.maxspeed = responce.maxspeed;
        this.minspeed = responce.minspeed;
        this.speeds = responce.speeds;
        this.sound = responce.sound;
        this.diameter = responce.diameter;
        this.maxheight = responce.maxheight;
        this.minheight = responce.minheight;
        this.weight = responce.weight;
    }
}