import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class ApiGoRestService {

  urlUsers: string = 'https://gorest.co.in/public-api/users'
  urlPosts: string = 'https://gorest.co.in/public-api/posts'

  auth_token = 'K0UZnBoCLIRqPFL4M3wUvYXHgihvrgJqD-CK'

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.auth_token,
      'Access-Control-Allow-Origin': '*'
    })
  };

  getReturnUsers() {
    return this.http.get<any>(this.urlUsers, this.httpOptions)
      .pipe(
        map(response => {

           return response

        })
      )
  }

  // getReturnUsers(id) {
  //   return this.http.get<any>(this.urlUsers + '/'+ id, this.httpOptions)
  //     .pipe(
  //       map(response => {

  //          return response

  //       })
  //     )
  // }

  getReturnPostsUsers() {
    return this.http.get<any>(this.urlPosts, this.httpOptions)
      .pipe(
        map(response => {
          // console.log('response apiGoRest', response)
          return response
        })
      )
  }
}
