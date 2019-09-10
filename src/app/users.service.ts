import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Title } from '@angular/platform-browser';




@Injectable({
  providedIn: 'root'
})

export class UsersService {

 prop:string = 'Foo';

  baseUrl:string = "https://jsonplaceholder.typicode.com/users"

  postsUlr: string = "https://jsonplaceholder.typicode.com/posts";

  public propChanged:BehaviorSubject<string> = new BehaviorSubject<string>(this.prop);

  constructor( private http:HttpClient) {
    
   }
getProp():string{
  return this.prop;
}

setProp(prop:string):void{
  this.prop = prop;
  this.propChanged.next(prop);
}


  getUsers(): Observable<any[]>
  {
    let headers = new HttpHeaders();

   headers =  headers.set('Authorization', 'bearer token')
    
    return this.http.get<any[]>(this.baseUrl,  {headers});
  }
  getUserById(id:number): Observable<any>
  {
    
    return this.http.get<any>( `${this.baseUrl}/${id}` );
  }

  getUsersPosts(userId:number){

    let httpParams = new HttpParams().set('userId', userId.toString());
  

    return this.http.get<any>( `${this.postsUlr}ggg`, {params: httpParams} )
    .pipe(
      retry(1),
      map(posts=>{
            return posts.map(post=>{
              return {
                title: post.tile,
                body:post.body

              }
            }

            )
                 
        }    
    ),
    catchError(err=>
      {

          return err;
    })
   
    
    )

    
    

  }
}

