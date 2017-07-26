import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import{Services} from '../../Services/AdServices';

@Injectable()
export class RouterGuard implements CanActivate {
   
   constructor(private serviceObj: Services,private router:Router) {}

  canActivate() {
    if (localStorage.getItem('auth_token')) {           
            return true;
        }

        this.router.navigate(['/loggedUser']);
        return false;
}
}