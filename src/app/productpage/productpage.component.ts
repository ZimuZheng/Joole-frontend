import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// splitter input
  orientation = 'horizontal';
  splitBarSize = '2px';
  disabledBarSize = '1px';

  // splitter pane input
  size = '300px';
  minSize = '300px';
  maxSize = '300px';

  sizeChange(size) {
    console.log(size);
  }

}
