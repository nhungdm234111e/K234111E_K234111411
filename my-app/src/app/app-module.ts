import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms';
import { Ptb2 } from './ptb2/ptb2';
import { LearnDirective } from './learn-directive/learn-directive';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Learnbinding } from './learnbinding/learnbinding';
import { Ptb1 } from './ptb1/ptb1';
import {Ex10Component} from './ex10/ex10';
import { ListCustomer } from './list-customer/list-customer';
import { ListCustomer2 } from './list-customer2/list-customer2';
import { CustomerDetails } from './customer-details/customer-details';
import { ListCustomer3 } from './list-customer3/list-customer3';  
import { HttpClientModule } from '@angular/common/http';
import { Ex14 } from './ex14/ex14';
import { NotFound } from './not-found/not-found';
import { ListProduct } from './list-product/list-product';
import { ProductDetails } from './product-details/product-details';
import { Ex13 } from './ex13/ex13';
import { ServiceProductImageDetails } from './service-product-image-details/service-product-image-details';
import { Ex18 } from './ex18/ex18';
import { Ex19 } from './ex19/ex19';
import { Product19 } from './product19/product19';
import { Listproduct19 } from './listproduct19/listproduct19';
import { Login19 } from './login19/login19';
import { Serviceproduct19 } from './serviceproduct19/serviceproduct19';
@NgModule({
  declarations: [
    App,
    Ptb2,
    LearnDirective,
    About,
    Contact,
    Learnbinding,
    Ptb1,
    Ex10Component,
    ListCustomer,
    ListCustomer2,
    CustomerDetails,
    ListCustomer3,
    Ex14,
    NotFound,
    ListProduct,
    ProductDetails,
    Ex13,
    ServiceProductImageDetails,
    Ex18,
    Ex19,
    Product19,
    Listproduct19,
    Login19,
    Serviceproduct19,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
