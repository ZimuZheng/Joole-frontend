import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassDataService } from '../services/passdata.service';

@Component({
  selector: 'app-informationpage',
  templateUrl: './informationpage.component.html',
  styleUrls: ['./informationpage.component.css']
})
export class InformationpageComponent implements OnInit {

  constructor(public passdataService: PassDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
this.getProduct();
}

getProduct() {
const id = this.route.snapshot.paramMap.get('id');
this.passdataService.currentProduct = this.passdataService.products.find(product => product.pid == id);
}

}
