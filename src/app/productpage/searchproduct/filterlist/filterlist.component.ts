import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterlistComponent implements OnInit {

  usetypes = ['Com', 'Ind', 'Res'];

  applications = ['Indoor', 'Outdoor'];

  locations = ['Roof','Wall','Free standing'];

  accessories = ['With light', 'Without light'];

  constructor(public passDataService: PassDataService) {}

  ngOnInit(){
  }

  menu = [{
    title: 'Product Type',
    children: []
  }];

  itemClick(event) {
    event.clicktimes = ( event.clicktimes || 0 ) + 1;
  }

  menuToggle(event) {
  }

}
