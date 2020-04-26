import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';

@Component({
  selector: 'app-productcontact',
  templateUrl: './productcontact.component.html',
  styleUrls: ['./productcontact.component.css']
})
export class ProductcontactComponent implements OnInit {

  constructor(public passdataService: PassDataService) { }

  ngOnInit(): void {
  }

}
