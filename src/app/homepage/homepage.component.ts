import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { SubCateHttpService } from '../services/subcategory-http.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { InformationService } from '../services/information.service';
import { ProductHttpService } from '../services/product-http.service';
import { PassDataService } from '../services/passdata.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cates: string[] = ['Mechanical'];
  subCates: Category[];
  subCatesForm: FormGroup;

  constructor(private subCateHttpService: SubCateHttpService,
              private fb: FormBuilder,
              private informationService: InformationService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private productService: ProductHttpService,
              public passdataService: PassDataService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subCatesForm = this.fb.group({
      subCate: ['', Validators.required]
    });
  }

  showSubCate(cate) {
    if (cate == "All") {
      this.subCates = [];
    } else {
      this.subCateHttpService.getSubCate(cate).subscribe(
      (resp) => {
        this.subCates = <Category[]> resp;
        // console.log(this.subCates);
      }
    );
    }
  }

  onSubmit() {
    if (this.subCatesForm.invalid) {
      console.log("wrong");
      return;
    }
    let subCate = this.subCates.find(cate => cate.sub_cname === this.subCatesForm.controls.subCate.value);
    let id = subCate.cid;
    this.informationService.searchProduct(id);
    this.informationService.emitSubCateName(subCate.cname);
    this.productService.getProduct(subCate.sub_cname).subscribe((resp) => {
      this.passdataService.products = <Product[]> resp;
      console.log(this.passdataService.products);
    }
    );
    this.router.navigate(['/product']);
  }




}
