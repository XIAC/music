import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Artista } from './artista.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  url:string;
  constructor(private _http:HttpClient) {
    this.url="http://localhost:3030/";
  }
  public get(){
    return this._http.get(this.url+"artista/get");
  }
  public guardar(artista: Artista): Observable<Artista> {
    return this._http.post<Artista>(this.url+"artista/guardar", artista, httpOptions)
    .pipe(
      catchError(err => {
            console.log('error', err);
            return throwError(err);
        })
    );
  }
}
