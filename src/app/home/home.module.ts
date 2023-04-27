import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    HomeRoutingModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
  constructor() {}
}

