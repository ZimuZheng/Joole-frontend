import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(public passdataService: PassDataService) { }

  ngOnInit(): void {
  }

}
