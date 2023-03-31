import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './component/myCom/myComponent.component';
import { BtnCountComponent } from './component/btn-count/btn-count.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { NeedStrongDirective } from './directive/need-strong.directive';
import { TodolistComponent } from './component/todolist/todolist.component';
import { SuffixPipe } from './pipe/suffix';



@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    BtnCountComponent,
    DirectiveComponent,
    NeedStrongDirective,
    TodolistComponent,
    SuffixPipe
  ],
  imports: [
    // 浏览器模块导出了 CommonModule，所以指令模块可以使用
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
