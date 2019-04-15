import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: null,
      numero: null,
      complemento: null,
      rua: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  }

  constructor(private http: HttpClient) { }

  consultaCep(campo) {
    this.usuario.endereco.rua = null;
    this.usuario.endereco.bairro = null;
    this.usuario.endereco.estado = null;
    this.usuario.endereco.cidade = null;
    console.log(campo);

    if (campo.valid) {
      this.http.get(`https://viacep.com.br/ws/${campo.model}/json`)
        .subscribe(dados => {
          console.log(dados);
          if(dados["erro"]) campo.control.setErrors({'incorrect': true});
          this.usuario.endereco.rua = dados["logradouro"];
          this.usuario.endereco.bairro = dados["bairro"];
          this.usuario.endereco.estado = dados["uf"];
          this.usuario.endereco.cidade = dados["localidade"];
        });
    }
  }

  onSubmit(f) {
    console.log(f.value);
  }

  ngOnInit() {
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': campo.invalid && campo.dirty,
      'is-valid': campo.valid && campo.touched
    }
  }

}
