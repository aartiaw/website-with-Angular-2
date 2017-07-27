import {Component} from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import{Services} from '../../Services/AdServices';

@Component({
    selector:'userAds',
    templateUrl:'./userAds.html'
})

export class LoggedUserAds{

    auth_token:any;
       
    loggedUserAds:Array<any>=[];

    constructor(private activatedRoute: ActivatedRoute,private router:Router,private serviceObj:Services) {
        this.serviceObj.getMyAds().subscribe((data: any) => this.loggedUserAds = data.data.mypostList);
        
    }

    ngOnInit() { 
        this.auth_token = this.activatedRoute.snapshot.params['auth_token'];
        this.serviceObj.getMyAds(); 
    }

    onPostNewAd(){
        this.router.navigate(['/postMyAd']);
    } 

    deleteAd(deleteAdObj:any){
        
        let index=this.loggedUserAds.indexOf(deleteAdObj,0);
        this.loggedUserAds.splice(index,1);

        this.serviceObj.deleteAd(deleteAdObj.id).subscribe((data: any) =>console.log(data));
    }

    onLogout(){
       this.serviceObj.logoutService();
       
    }
}