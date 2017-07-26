import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {RouterModule} from '@angular/router';
import { HomePage } from './components/Home/HomeComponent';
import {HeaderForAll} from './components/Header/HeaderComponent';
import {FooterForAll} from './components/Footer/FooterComponent';
import {SignInClass} from './components/Login/LoginComponent';
import {SignUpClass} from './components/RegisterUser/SignUpComponent';
import {LoggedUserAds} from './components/LoggedUserPage/LoggedUserAdsComponents';
import { Services } from "./Services/AdServices";
import { PostAdClass } from "./components/PostAd/PostAdComponent";




@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot([{path:'', component: HomePage},{ path: 'loggedUser/:auth_token', component: LoggedUserAds},{ path: 'postMyAd', component: PostAdClass}])],
  declarations: [ AppComponent,HomePage,HeaderForAll,FooterForAll,SignInClass,SignUpClass,LoggedUserAds,PostAdClass],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
