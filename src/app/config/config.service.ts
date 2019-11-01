import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = '/asset/config.json';

  getConfig() {
      return this.http.get(this.configUrl);
  }

}