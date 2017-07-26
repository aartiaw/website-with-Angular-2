import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions,Headers,HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {RouterGuard} from '../components/LoggedUserPage/RouterGuard';
import { Router } from "@angular/router";


@Injectable()

export class Services{
    
    auth_token:any;
    
    constructor(private _http:Http, private router:Router){}

    registerUser(newUser:any){
        let url = "http://192.168.3.144:9000/register"; //Akshay machine
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"firstName": newUser.firstName, "lastName":newUser.lastName, "userName": newUser.username, "password": newUser.password, "email":newUser.email,"phone":newUser.phone};
       
        let registerUser=this._http.post(url, jsonReq, options).map((response: Response)=>response.json());

        registerUser.subscribe((data:any)=>console.log(data));
    }

    loggedInUser(loggedInUser:any){

        let url = "http://192.168.3.144:9000/login"; //Akshay machine
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"userName": loggedInUser.userName, "password": loggedInUser.password};
       
        let loggedUser=this._http.post(url, jsonReq, options).map((response: Response)=>response.json());

        loggedUser.subscribe((data:any)=>{
            this.auth_token = data.data["auth-token"];
            console.log(this.auth_token);
            this.router.navigate(['/loggedUser',this.auth_token]);
            
            
        });
        //this.routerGuard.canActivate();
    }

    getAuthToken(){
        return this.auth_token;
    }

}
