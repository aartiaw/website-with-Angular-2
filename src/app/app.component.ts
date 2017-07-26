import { Component } from '@angular/core';
import {Services} from './Services/AdServices';
import {RouterGuard} from './components/LoggedUserPage/RouterGuard';

@Component({
  selector: 'my-app',
  template: `<header></header><router-outlet></router-outlet><footer></footer>`,

  providers:[Services,RouterGuard]
})
export class AppComponent  { }
