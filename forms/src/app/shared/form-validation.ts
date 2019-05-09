import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
    static requiredMinCheckbox(min = 1){
        const validator = (formArray: FormArray) => {
          const totalCheck = formArray.controls
            .map(v => v.value)
            .reduce((total, current) => current ? total + current : total, 0);
    
          return totalCheck >= min ? null : {required: true};
        };
        return validator;
    }

    static cepValidator(control: FormControl){

        if(control.value && control.value !=='')
            return  /^[0-9]{8}$/.test(control.value) ? null : {cepInvalid : true} ;
    }

    static equalsTo(otherField: string){
        const validator = (formControl: FormControl) => {
            if ( otherField == null)
                throw new Error('É necessário informar um campo');

            if(!formControl.root || !(<FormGroup>formControl.root).controls)
                return null
            
            const field = (<FormGroup>formControl.root).get(otherField);
            if (!field)
                throw new Error("Campo \"" + otherField + "\" nao foi encontrado ");

                return (field.value !== formControl.value) ? {notEqualsTo : otherField} : null;


        };
        return validator;
    }

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){
        const config = {
            'required': `${fieldName} é obrigatório.`,
            'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
            'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
            'cepInvalid': `CEP inválido.`

        }
        return config[validatorName];
    }


}