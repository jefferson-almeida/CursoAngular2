import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'angular 2' },
      { id: 2, nome: 'java' }
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (const curso of cursos) {
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
