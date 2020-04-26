import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/AuthGuard';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { InformationpageComponent } from './informationpage/informationpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'category', component: HomepageComponent},
  { path: 'product', component: ProductpageComponent},
  { path: 'information/:id', component: InformationpageComponent},
  { path: 'login', component: AuthComponent},
  { path: '**', redirectTo: '', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
