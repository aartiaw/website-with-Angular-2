import {Component} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Services} from '../../Services/AdServices';

@Component({
    selector:'signIn',
    templateUrl:'./signIn.html'
})

export class SignInClass{

    SignInForm:FormGroup;

    constructor(private formBuilder:FormBuilder, private serviceObj:Services){

        this.SignInForm = this.formBuilder.group({
            userName : [null,[Validators.required,Validators.minLength(5)]],
            password: [null,[Validators.required]],
        });
    }

    onSignInSubmit(username:string,password:any){
        let loggedInUser = {
            userName : username,
            password : password
        }
        
        this.serviceObj.loggedInUser(loggedInUser);
    }

    //auth_token = this.serviceObj.getAuthToken();
}