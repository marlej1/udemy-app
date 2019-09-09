import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class UsersService {


  baseUrl:string = "https://jsonplaceholder.typicode.com/users"
  constructor( private http:HttpClient) {
    
   }

  getUsers(): Observable<any[]>
  {
    
    return this.http.get<any[]>(this.baseUrl);
  }
  getUserById(id:number): Observable<any>
  {
    
    return this.http.get<any>( `${this.baseUrl}/${id}` );
  }
}

