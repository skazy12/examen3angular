import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, pipe } from "rxjs";
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class ApigamesService {

  url2= 'http://localhost/apiGames/';
  constructor(private http: HttpClient) { }

  obtenerJuegos(): Observable<any> {  
    return this.http.get(`${this.url2}`);
  }

  obtenerDonde(id: any): Observable<any> {
    return this.http.get(`${this.url2}?consultar=`+id);
  }

  eliminar(id: any): Observable<any> {
    return this.http.get(`${this.url2}?borrar=`+id);
  }

  agregar(game: Game): Observable<any> {
    return this.http.post(this.url2+"?insertar=1",game);
  }

  editar(id:any, game:any): Observable<any> {
    return this.http.post(`${this.url2}?actualizar=`+id,game);
  }
}
