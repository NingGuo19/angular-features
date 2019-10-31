import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureDisplayComponent } from './feature-display/feature-display.component';
import { StudentService } from './student.service';
import { StudentDisplayComponent } from './student-display/student-display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, FeatureDisplayComponent, StudentDisplayComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentService]
})
export class AppModule { }
