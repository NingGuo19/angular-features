import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { ConfigService } from '../config/config.service';
import { Config } from '../config/config.service';

import { Hero } from '../data/hero';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HeroesService {

  config: Config;
  heroesUrl = 'api/heroes'; 
  private handleError: HandleError;

  constructor(private configService: ConfigService,
              private http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService){
                this.handleError = httpErrorHandler.createHandleError('HeroesService');
               }

  getAPIUrl(){
    this.configService.getConfig().subscribe(
      (data: Config)=>this.config={...data}
    );
  }

  getHeroes(): Observable<Hero[]>{
    this.getAPIUrl();
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  deleteHero (id: number): Observable<{}> {
    const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }

  updateHero (hero: Hero): Observable<Hero> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', hero))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Hero[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }


}