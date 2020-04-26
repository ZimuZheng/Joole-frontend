import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { PassDataService } from 'src/app/services/passdata.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  subCateName: string;

  constructor(private informationService: InformationService,
    public passdataService: PassDataService) { }

  ngOnInit(): void {
    this.informationService.subCateName$.subscribe(name => this.subCateName = name);
  }

  onCheckboxChange(value) {
    console.log(value);
  }

}
