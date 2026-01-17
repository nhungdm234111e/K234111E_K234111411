import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
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
