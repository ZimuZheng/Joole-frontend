export class User {
    username:string;
    email:string;
    fname:string;
    lname:string;
    title:string;
    password:string;

    constructor(responce:any) {
        this.username = responce.username;
        this.email = responce.email;
        this.fname = responce.fname;
        this.lname = responce.lname;
        this.title = responce.title;
        this.password = responce.password;
    }
}