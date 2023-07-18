import { Injectable } from '@angular/core';
import { Provedor } from './provedor';
import {Observable, of} from 'rxjs';
import {  HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProvedorService {
  private urlEndPoint:string = 'http://localhost:8080/api/proveedor';
  constructor(private http: HttpClient) { }

  getProvedores() : Observable<Provedor[]>{
    
    return this.http.get<Provedor[]>(this.urlEndPoint);
  }
}
