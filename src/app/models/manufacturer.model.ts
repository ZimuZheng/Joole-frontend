export class Manufacturer {
    mid:string;
    department:string;
    phone:string;
    email:string;
    web:string;

    constructor(responce:any) {
        this.mid = responce.mid;
        this.department = responce.department;
        this.phone = responce.phone;
        this.email = responce.email;
        this.web = responce.web;
    }
}