import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormValidations } from '../shared/form-validation';
import { VerificaEmailService } from './services/verifica-email.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  frameworks: string[] = ['Angular', 'react', 'vue', 'flutter', 'ionic', 'jester']


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private verificaEmailService: VerificaEmailService
    ) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl('nome'),
    //   email: new FormControl('e-mail')
    // })
    
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email],  [this.validarEmail.bind(this)]],
      nome: ['',[Validators.required, FormValidations.cepValidator]],
      frameworks: this.buidFrameworks()
    });
    console.log(this,this.formulario.get)
    
    
  }

  buidFrameworks(){
    const values = this.frameworks.map(_v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }



  onSubmit(){
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value)

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i)=> v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });

    this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .subscribe(dados => {
        console.log(dados);
        this.resetarForm();
      }, (error: any) => alert('um erro aconteceu' + error.message));

  }
  resetarForm() {
    this.formulario.reset();
  }

  aplicaCssErro(campo) {
    if(this.formulario.get(campo).dirty)
      return this.formulario.get(campo).invalid  ? 'is-invalid' : 'is-valid'
  }

  validarEmail(FormControl: FormControl){
    return this.verificaEmailService.verificarEmail(FormControl.value)
      .pipe(
        map(emailExiste => emailExiste ? {emailInvalid: true} : null)
      )
  }



}
