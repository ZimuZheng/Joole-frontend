import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';

@Component({
  selector: 'app-productducumentation',
  templateUrl: './productducumentation.component.html',
  styleUrls: ['./productducumentation.component.css']
})
export class ProductducumentationComponent implements OnInit {

  constructor(public passdataService: PassDataService) { }

  ngOnInit(): void {
  }

}
