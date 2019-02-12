import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://tenno.tools/'
  };

  livros: string[] = ['java', 'angular2', 'c#'];

  filtro: string = '';

  addCurso(valor){
    console.log(valor)
    this.livros.push(valor);
  }

  obterCursos(){
    if (this.livros.length == 0 || this.filtro == undefined || this.filtro.trim() == '') return this.livros;
    
    return this.livros.filter( v => (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) ? true : false )
  }

  constructor() { }

  ngOnInit() {
  }

}
