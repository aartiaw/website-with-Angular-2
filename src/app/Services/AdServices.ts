import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers,HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";


@Injectable()

export class Services{
    
    auth_token:any;
    authorized:boolean=false;
   
    constructor(private _http:Http, private router:Router){}

    getCategories(){
        let url = "http://192.168.3.144:9000/categories";
        return this._http.get(url).map((response: Response)=>response.json());
    }

    registerUser(newUser:any){
        let url = "http://192.168.3.144:9000/register"; 
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"firstName": newUser.firstName, "lastName":newUser.lastName, "userName": newUser.username, "password": newUser.password, "email":newUser.email,"phone":newUser.phone};
       
        let registerUser=this._http.post(url, jsonReq, options).map((response: Response)=>response.json());

        registerUser.subscribe((data:any)=>console.log(data));
        alert('Account created successfully!!');
    }

    loggedInUser(loggedInUser:any){
        
        this.authorized = true;

        let url = "http://192.168.3.144:9000/login"; 
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"userName": loggedInUser.userName, "password": loggedInUser.password};
       
        let loggedUser=this._http.post(url, jsonReq, options).map((response: Response)=>response.json());

        loggedUser.subscribe((data:any)=>{
            this.auth_token = data.data["auth-token"];
            console.log(this.auth_token);

            if(this.auth_token===null){
                alert('Login failed :(. PLease check user credentials');
                this.router.navigate(['']);
            }
            
            this.router.navigate(['/loggedUser',this.auth_token]);
        });
        
    }

    postAd(newAd:any){
        let url = "http://192.168.3.144:9000/postAd"; 
                                
        let headers = new Headers();
        headers.append('auth-token', this.auth_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": newAd.title, "name":newAd.name, "category": newAd.category, "description": newAd.description};
        let adObj=this._http.post(url, jsonReq, options).map((response: Response)=>response.json());

        adObj.subscribe((data:any)=>console.log(data));

        alert('You have successfully posted this Ad :)')

       this.router.navigate(['/loggedUser',this.auth_token]);

    }

    getMyAds(){
        let url = "http://192.168.3.144:9000/posts"; 
                                
        let headers = new Headers();
        headers.append('auth-token', this.auth_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        return this._http.get(url, options).map((response: Response)=>response.json());
       
    }

    deleteAd(deleteAdId:any){
        let url = "http://192.168.3.144:9000/post?postId="; 
       
        return this._http.delete(url+deleteAdId).map((response: Response)=>response.json());
    }

    logoutService(){
        let url = "http://192.168.3.144:9000/logout"; 
                                
        let headers = new Headers();
        headers.append('auth-token', this.auth_token);

        let options = new RequestOptions({ headers: headers });

        alert("You have successfully logged out");
        
        this._http.delete(url, options).map((response: Response)=>response.json());
        this.router.navigate(['']);
    }

}
