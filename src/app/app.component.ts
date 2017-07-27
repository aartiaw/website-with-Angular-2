import { Component } from '@angular/core';
import {Services} from './Services/AdServices';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet><footer></footer>`,

  providers:[Services]
})

export class AppComponent  { }
