import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{

    static emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ['angular', 'java', 'c#']

    constructor(private logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this.logService.consoleLog('obtendo lista de curso');
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`criando um novo curso: ${curso}` );
        this.cursos.push(curso);
        CursosService.emitirCursoCriado.emit(curso);
    }
}