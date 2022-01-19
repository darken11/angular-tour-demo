import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private httpOptions:any;
  private heroUrl ='api/heroes';
  constructor(private httpClient:HttpClient,private messageService:MessageService) {
     this.httpOptions={
      Headers:new HttpHeaders({'Content-Type':'application/json'})
    };
   }
  //Get Heroes From The Server

  getHeroes():Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(this.heroUrl)
    .pipe(
    tap(_ => this.log('fetched heroes')),
    catchError(this.handelError<Hero[]>('getHeroes',[])))
  }
  //Get Hero By Id, Will 404 if Not Found

  getHero(id:number):Observable<Hero>{

    const url=`${this.heroUrl}/${id}`;

    return this.httpClient.get<Hero>(url).pipe(
      tap(_ =>this.log(`fetched hero id=${id}`)),
      catchError(this.handelError<Hero>(`getHero id=${id}`))
    );

  }

  updateHero(hero:Hero):Observable <any>{
return this.httpClient.put(this.heroUrl,hero,this.httpOptions).pipe(
  tap(_ =>this.log(`updated hero id=${hero.id}`)),
  catchError(this.handelError<any>('updateHero'))
)

  }

  addHero(hero:Hero):Observable<Hero>{
    return this.httpClient.post<Hero>(this.heroUrl,hero,this.httpOptions)
    .pipe(
      tap((newHero:any) => this.log(`add hero w/ id=${newHero.id}`)),
      catchError(this.handelError<Hero>('addHero'))
     );
  }
  deleteHero(id:number):Observable<Hero>{
    return this.httpClient.delete(`${this.heroUrl}/${id}`,this.httpOptions).pipe(
      tap(_ =>this.log(`deleted hero id=${id}`)),
  catchError(this.handelError<any>('deleteHero'))
    );
  }
  searchHeroes(term:string):Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }

return this.httpClient.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
  tap( x =>x.length ?
    this.log(`found heroes matching "${term}"`):
    this.log(`no heroes matching "${term}"`)),
      catchError(this.handelError<Hero[]>(`searchHeroes`,[]))
);
  }



  private log(message:string){
    this.messageService.add(`HeroService: ${message}`);

  }

  /** Handel Errors When We Remote Call  */
  private  handelError<T>(operation='operation',result?:T){
    return (error :any):Observable<T>=>{
      // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed:${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);

    };
  }
}
