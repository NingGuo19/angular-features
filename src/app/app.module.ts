import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureDisplayComponent } from './feature-display/feature-display.component';
import { StudentService } from './student.service';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { ConfigService } from './config/config.service';
import { ConfigComponent } from './config/config.component';
import { HeoresComponent } from './heores/heores.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    ) ],
  declarations: [ AppComponent, HelloComponent, FeatureDisplayComponent, StudentDisplayComponent, ConfigComponent, HeoresComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentService, ConfigService, InMemoryDataService]
})
export class AppModule { }
