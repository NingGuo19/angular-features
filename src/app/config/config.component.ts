import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./config.component.css'],
  styles: ['.error {color: red;}']
})
export class ConfigComponent implements OnInit {

  config: Config;
  error: any;
  headers: string[];

  constructor(private configService: ConfigService ) { }

  ngOnInit() {
  }

  clear(){
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig_1(){
    this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
  }

  showConfigResponse() {
  this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.config = { ... resp.body };
    });
}

makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error );
  }

}