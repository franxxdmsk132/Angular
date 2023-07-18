import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import {  HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  private urlEndPoint:string = 'http://localhost:8080/api/cliente';
  constructor(private http: HttpClient) { }

  getClientes() : Observable<Cliente[]>{
    //return of(Clientes);
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
