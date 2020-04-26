import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {

  tab1acticeID = 'tab1';
  tab2acticeID = 'tab2';
  
  
  constructor(public passdataService: PassDataService) { }

  ngOnInit() {
  }

  activeTabChange(id) {
    console.log(id);
  }

  saveFilter() {
    this.passdataService.doFilter;
    console.log(this.passdataService.filterProduct)
    this.passdataService.filterOn = true;
  }

  clearFilter() {
    this.passdataService.filterOn = false;
    this.passdataService.filterProduct = [];
  }

}
