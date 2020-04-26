export class Category {
    cid:string;
    cname:string;
    sub_cname:string;

    constructor(response:any) {
        this.cid = response.cid;
        this.cname = response.cname;
        this.sub_cname = response.sub_cname;
    }
}