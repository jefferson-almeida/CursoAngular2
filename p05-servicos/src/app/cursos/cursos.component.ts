import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  providers: [CursosService],
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
  
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursoService: CursosService;
 

  constructor(private cursoService: CursosService) {
    //this.cursoService = _cursoService;
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    CursosService.emitirCursoCriado.subscribe(
      curso => this.cursos.push(curso)
      //function(curso){
       // console.log(curso);}
    );
  }

}
