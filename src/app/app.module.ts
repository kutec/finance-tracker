import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRouterModule } from './router/router.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRouterModule
  ],
  declarations: [ AppComponent, HelloComponent, TransactionsComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
