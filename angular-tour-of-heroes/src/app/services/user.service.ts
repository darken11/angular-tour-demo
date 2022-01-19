import { User } from './../users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getResourcesUrl = environment.host;
  constructor(public http:HttpClient) { }
  handleError(error: HttpErrorResponse) {
    let errorMessage ;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error when ask to get Post: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessageError when ask to get Post: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.getResourcesUrl + '/users').pipe(catchError(this.handleError));
  }
getUserById(id:number):Observable<User>{
  const url=`${this.getResourcesUrl}/users/${id}`;
  return this.http.get<User>(url).pipe(catchError(this.handleError))
}
}
