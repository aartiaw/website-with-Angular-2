import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {RouterModule} from '@angular/router';
import { HomePage } from "./components/Home/HomeComponent";
import {HeaderForAll} from './components/Header/HeaderComponent';
import {FooterForAll} from './components/Footer/FooterComponent';

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot([{path:'', component: HomePage}])],
  declarations: [ AppComponent,HomePage,HeaderForAll,FooterForAll],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
