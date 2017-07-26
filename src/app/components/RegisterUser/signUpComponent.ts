import {Component} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Services} from '../../Services/AdServices';

import {PasswordValidation} from '../Header/PasswordValidationClass';

@Component({
    selector:'signUp',
    templateUrl:'./signUp.html'
})

export class SignUpClass{
   SignUpForm:FormGroup;

    constructor(private formBuilder:FormBuilder, private serviceObj:Services){

        this.SignUpForm = this.formBuilder.group({
            firstName:[null,[Validators.required,Validators.minLength(1)]],
            lastName:[null,[Validators.required,Validators.minLength(1)]],
            userName : [null,[Validators.required,Validators.minLength(5)]],
            password: [null,[Validators.required]],
            confirmPassword: ['', Validators.required],
            email: [null,[Validators.required]],
            phone: [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
            }, 
            {
                validator: PasswordValidation.matchPassword //validation method
            }
            
            );
        }

    onSignUpSubmit(firstname:string,lastname:string,username:string,password:any,email:any,phone:number){

       let newUser = {
            firstName : firstname,
            lastName : lastname,
            username : username,
            password : password,
            email : email,
            phone : phone
       }
       //console.log(newuser);
       this.serviceObj.registerUser(newUser);
    }

}