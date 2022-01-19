import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private resourcesUrl=environment.host;

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

  // getAllPhotos() : Observable<Photo[]>{
  //  //return this.http.get<Photo[]>(this.resourcesUrl+'/photos').pipe(catchError(this.handleError))
  // }
}
