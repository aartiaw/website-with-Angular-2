import {Component} from '@angular/core';
import{Services} from '../../Services/AdServices';

@Component({
    selector:'postad',
    templateUrl:'./postAdForm.html'
})

export class PostAdClass{

    constructor(private serviceObj:Services){
        
    }

    postThisAd(title:string,name:string,description:string,category:any){
        let newAd = {
            title:title,
            name:name,
            category:category,
            description:description
        }
    }
}