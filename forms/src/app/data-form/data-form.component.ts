import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl('nome'),
    //   email: new FormControl('e-mail')
    // })

    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    console.log(this.formulario);

    this.http.post('https://httpbin.org/pos', JSON.stringify(this.formulario.value))
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



}
