import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwnComponent } from 'src/component/own/ownComponent';
import { MyComponent } from './component/myCom/myComponent.component';
import { BtnCountComponent } from './component/btn-count/btn-count.component';

// elementUi
// import { ElModule } from 'element-angular'

@NgModule({
  declarations: [
    AppComponent,
    OwnComponent,
    MyComponent,
    BtnCountComponent
  ],
  imports: [
    BrowserModule,
    // ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
