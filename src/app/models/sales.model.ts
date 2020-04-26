export class Sales {
    sid:string;
    name:string;
    phone:string;
    email:string;
    web:string;

    constructor(responce: any) {
        this.sid = responce.sid;
        this.name = responce.name;
        this.phone = responce.phone;
        this.email = responce.email;
        this.web = responce.web;
    }
}