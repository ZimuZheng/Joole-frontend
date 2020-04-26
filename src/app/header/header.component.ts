import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Category } from '../models/category.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubCateHttpService } from '../services/subcategory-http.service';
import { InformationService } from '../services/information.service';
import { ProductHttpService } from '../services/product-http.service';
import { PassDataService } from '../services/passdata.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cates: string[] = ['Mechanical'];
  subCates: Category[];
  subCatesForm: FormGroup;

  constructor(private subCateHttpService: SubCateHttpService,
              private fb: FormBuilder,
              private informationService: InformationService,
              private authenticationService: AuthenticationService,
              private productService: ProductHttpService,
              public passdataService: PassDataService,
              public router: Router) {
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
    this.router.navigate(['product']);
  }
}
