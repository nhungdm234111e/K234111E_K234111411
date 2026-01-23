import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { ListCustomer } from './list-customer/list-customer';
import { ListCustomer2 } from './list-customer2/list-customer2';
import { ListCustomer3 } from './list-customer3/list-customer3';
import { NotFound } from './not-found/not-found';
import { ListProduct } from './list-product/list-product';
import { ProductDetails } from './product-details/product-details';
import { ServiceProductImageDetails } from './service-product-image-details/service-product-image-details';
import { Ex13 } from './ex13/ex13';
import { Ex14 } from './ex14/ex14';
import { Ex18 } from './ex18/ex18';
import { Product19 } from './product19/product19';
import { Listproduct19 } from './listproduct19/listproduct19';
import { Login19 } from './login19/login19';
import { Ex19 } from './ex19/ex19';
import { Serviceproduct19 } from './serviceproduct19/serviceproduct19';

const routes: Routes = [
  { path:"gioi-thieu", component: About },
  { path:"khach-hang-1", component: ListCustomer},
  { path:"khach-hang-2", component: ListCustomer2},
  { path:"khach-hang-3", component: ListCustomer3},
  { path:"san-pham-1", component: ListProduct},
  { path:"san-pham-1/:id", component: ProductDetails},
  {path:'ex-13', component:Ex13}, 
  {path:'service-product-image-event/:id', component:ServiceProductImageDetails}, 
  {path:'ex-14', component:Ex14},
  {path:'ex-18', component:Ex18},
  { path:'ex-19', component: Ex19},
  { path: 'product-19', component: Product19 },
  { path: 'list-product-19', component: Listproduct19 },
  { path: 'service-product-19', component: Serviceproduct19 },
  { path: 'login-19', component: Login19 },
  { path:"**", component: NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[ 
Product19, 
Listproduct19, 
Login19, 
Serviceproduct19
]