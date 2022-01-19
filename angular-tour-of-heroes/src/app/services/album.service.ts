import { Album } from './../album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
private getResourcesUrl=environment.host;
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
  getAlbums(): Observable<Album[]> {

    return this.http.get<Album[]>(this.getResourcesUrl + '/albums').pipe(catchError(this.handleError));
  }
}

