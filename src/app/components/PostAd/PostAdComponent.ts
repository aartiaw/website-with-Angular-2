import {Component} from '@angular/core';
import{Services} from '../../Services/AdServices';

@Component({
    selector:'postad',
    templateUrl:'./postAdForm.html'
})

export class PostAdClass{

    adCategories:Array<any>=[];

    constructor(private serviceObj:Services){
        serviceObj.getCategories().subscribe((data:any)=>this.adCategories = data.data.itemList);
    }

    postThisAd(title:string,name:string,description:string,category:any){
        let newAd = {
            title:title,
            name:name,
            category:category,
            description:description
        }

        this.serviceObj.postAd(newAd);
    }
}