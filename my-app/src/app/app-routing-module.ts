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
import { DongABankComponent } from './dong-abank-component/dong-abank-component';
import { FakeProductComponent } from './fake-product-component/fake-product-component';
import { Books } from './books/books';
import { Ex27 } from './ex27/ex27';
import { Ex28 } from './ex28/ex28';
import { Form } from './form/form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { BookDetail } from './book-detail/book-detail';
import { BookAPIService } from './book-api';
import { FildUpload } from './fild-upload/fild-upload';
import { NewBook } from './new-book/new-book';
import { BookUpdate } from './book-update/book-update';
import { BookDelete } from './book-delete/book-delete';
import { Ex50BookDetails } from './ex50-book-details/ex50-book-details';
import { Ex50 } from './ex50/ex50';
import { Ex50NewBook } from './ex50-new-book/ex50-new-book';
import { Ex50BookEdit } from './ex50-book-edit/ex50-book-edit';

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
  { path:"dong-abank-component", component: DongABankComponent },
  {path:"fake-product-component", component: FakeProductComponent},
  {path:"ex-27", component: Ex27},
  {path:"ex-28", component: Ex28},
  {path:"ex-39", component: Books},
  {path:"form", component: Form},
  {path:"reactive-form", component: ReactiveForm},
  {path:"ex-40", component: BookAPIService},
  {path:"ex-41", component: BookDetail},
  {path:"ex-41/:id", component: BookDetail},
  {path:"ex-43", component: NewBook},
  {path:"ex-45", component: BookUpdate},
  {path:"ex-47", component: BookDelete},
  {path:"ex-49", component: FildUpload},
  {path:"ex-50", component: Ex50},
  {path:"ex-50/book-details/:id", component: Ex50BookDetails},
  {path:"ex-50-new-book", component: Ex50NewBook},
  {path:"ex-50-book-edit/:id", component: Ex50BookEdit},
  {path:"**", component: NotFound}

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