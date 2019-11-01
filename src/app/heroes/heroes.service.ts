import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ConfigService } from '../config/config.service';
import { Config } from '../config/config.service';

import { Hero } from '../data/hero';

@Injectable()
export class HeroesService {

  config: Config;

  constructor(private configService: ConfigService,
              private http: HttpClient ) { }

  getAPIUrl(){
    this.configService.getConfig().subscribe(
      (data: Config)=>this.config={...data}
    );
    //this.config = this.configService.getConfig();
    //window.alert(this.config);
  }

  getHeroes(): Observable<Hero[]>{
    this.getAPIUrl();
    return this.http.get<Hero[]>("api/heroes");
  }

}