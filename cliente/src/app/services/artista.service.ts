import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// import { Observable} from '@'
@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  url:string;
  constructor(private _http:HttpClient) {
    this.url="http://127.0.0.1:3030/";
  }
  public get(){
    var usuario= ['esteban','elias'];

    return usuario;
  }
}
