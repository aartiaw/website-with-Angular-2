import {AbstractControl} from '@angular/forms';     //class in forms that has all validation attributes

export class PasswordValidation{
    
     static matchPassword(abstractControl: AbstractControl):any {
       let password = abstractControl.get('password').value; // to get value in password input tag
       let confirmPassword = abstractControl.get('confirmPassword').value; // to get value in confirm password input tag
        
        if(password != confirmPassword) {
            console.log('false');
            abstractControl.get('confirmPassword').setErrors( {matchPassword: true} )
        } 
        else {
            console.log('true');
            return null
        }
    }
}
