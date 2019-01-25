import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {

  url: string = 'www.databinding.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/city';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver:boolean = false;

  nome:string = 'abc';

  nomeDoCurso: string = 'Angular'

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getCurtirCurso(){
    return false;
  }

  getValor(){
    return 4;
  }

  botaoClicado(){
    alert('botao clicado')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual =(<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
