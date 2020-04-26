import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/services/passdata.service';

@Component({
  selector: 'app-techlist',
  templateUrl: './techlist.component.html',
  styleUrls: ['./techlist.component.css']
})
export class TechlistComponent implements OnInit {

  min = 0;
  max = 5000;
  step = 1;

  constructor(public passdataService: PassDataService) { }

  ngOnInit() {
    
  }

  menu = [{
    title: 'Technical Specifications',
    open: true,
    children: []
  }];

  itemClick(event) {
    event.clicktimes = ( event.clicktimes || 0 ) + 1;
  }

  menuToggle(event) {
    console.log('item click' + JSON.stringify(event));
  }

  

  showValue($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }

}
