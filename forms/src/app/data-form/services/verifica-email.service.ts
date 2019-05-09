import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string){
    return this.http.get('assets/verificarEmail.json')
      .pipe(
        delay(2000),
        map((d: {emails: any[]}) => d.emails),
        //tap(console.log),
        map((d: {email: string}[]) => d.filter(p => p.email === email)),
       // tap(console.log),
        map((d: any[]) => d.length > 0),
        //tap(console.log)

      );
  }
}
