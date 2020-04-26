import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = [{
    title: 'Brand',
    children: []
  }];

  itemClick(event) {
    event.clicktimes = ( event.clicktimes || 0 ) + 1;
  }

  menuToggle(event) {
    console.log('item click' + JSON.stringify(event));
  }

}
