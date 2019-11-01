import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, FeatureDisplayComponent, StudentDisplayComponent, ConfigComponent, HeoresComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentService, ConfigService]
})
export class AppModule { }
