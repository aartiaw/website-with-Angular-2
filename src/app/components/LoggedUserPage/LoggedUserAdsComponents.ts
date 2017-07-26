import {Component} from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
    selector:'userAds',
    templateUrl:'./userAds.html'
})

export class LoggedUserAds{

    auth_token:any;
    constructor(private activatedRoute: ActivatedRoute,private router:Router) {}

    ngOnInit() { 
        this.auth_token = this.activatedRoute.snapshot.params['auth_token']; 
    }

    onPostNewAd(){
        this.router.navigate(['/postMyAd']);
    } 

    
}