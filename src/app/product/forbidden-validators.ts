import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenValidators(forbiddename:string):ValidatorFn
{
    return(control:AbstractControl):ValidationErrors |null=>
    {
        const inputValue=control.value;
        if(inputValue===forbiddename)
            return {forbidden:control.value}
        else 
        return null;
    }    
}