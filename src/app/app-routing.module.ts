import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { FeatureDisplayComponent } from './feature-display/feature-display.component';

const routes: Routes=[
  { path: 'hello', component: HelloComponent },
  { path: 'display', component: FeatureDisplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }