import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { InformationpageComponent } from './informationpage/informationpage.component';
import { ComparepageComponent } from './comparepage/comparepage.component';
import { ProductsummaryComponent } from './informationpage/productsummary/productsummary.component';
import { ProductdetailComponent } from './informationpage/productdetail/productdetail.component';
import { ProductducumentationComponent } from './informationpage/productducumentation/productducumentation.component';
import { ProductcontactComponent } from './informationpage/productcontact/productcontact.component';
import { SearchproductComponent } from './productpage/searchproduct/searchproduct.component';
import { ShowproductComponent } from './productpage/showproduct/showproduct.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { DevUIModule} from 'ng-devui';
import { AuthenticationService } from "./services/authentication.service";
import { HomepageComponent} from "./homepage/homepage.component";
import { InformationService } from "./services/information.service";
import { SubCateHttpService } from "./services/subcategory-http.service";
import { KeysPipe, ParenthesPipe } from './pipes/keys.pipe';
import { FilterlistComponent } from './productpage/searchproduct/filterlist/filterlist.component';
import en from '@angular/common/locales/en';
import { TechlistComponent } from './productpage/searchproduct/techlist/techlist.component';
import { BrandlistComponent } from './productpage/searchproduct/brandlist/brandlist.component';
import { PassDataService } from './services/passdata.service';
import { ProductHttpService } from './services/product-http.service';
import { from } from 'rxjs';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FilterComponent,
    ProductpageComponent,
    InformationpageComponent,
    ComparepageComponent,
    ProductsummaryComponent,
    ProductdetailComponent,
    ProductducumentationComponent,
    ProductcontactComponent,
    SearchproductComponent,
    ShowproductComponent,
    HomepageComponent,
    KeysPipe,
    ParenthesPipe,
    FilterlistComponent,
    TechlistComponent,
    BrandlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DevUIModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    AuthenticationService, InformationService, SubCateHttpService,PassDataService,ProductHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
