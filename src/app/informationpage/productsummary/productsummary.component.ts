import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrls: ['./productsummary.component.css']
})
export class ProductsummaryComponent implements OnInit {


  constructor(public passdataService: PassDataService) { }

  ngOnInit(): void {
  }

}
