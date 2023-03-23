import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwnComponent } from 'src/component/own/ownComponent';
import { MyComponent } from './component/myCom/myComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnComponent,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
