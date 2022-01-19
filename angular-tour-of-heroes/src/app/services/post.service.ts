import { Post } from './../post';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
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

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.getResourcesUrl + '/posts').pipe(catchError(this.handleError));
  }



}
