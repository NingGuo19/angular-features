import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { FeatureDisplayComponent } from './feature-display/feature-display.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { ConfigComponent } from './config/config.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PackageSearchComponent } from './package-search/package-search.component';

const routes: Routes=[
  { path: 'hello', component: HelloComponent },
  { path: 'display', component: FeatureDisplayComponent },
  { path: 'student-display', component: StudentDisplayComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'package', component: PackageSearchComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }