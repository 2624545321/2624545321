import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MyComponent } from './component/myCom/myComponent.component';
import { BtnCountComponent } from './component/btn-count/btn-count.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { NeedStrongDirective } from './directive/need-strong.directive';
import { TodolistComponent } from './component/todolist/todolist.component';
import { SuffixPipe } from './pipe/suffix';
import { MyServiceComponent } from './component/my-service/my-service.component';
import { TranslateGenderPipe } from './pipe/translateGender';
import { ParentComponent } from './component/passValue/parent/parent.component';
import { EditNickNameComponent } from './component/passValue/edit-nick-name/edit-nick-name.component';
import { ShowNickNameComponent } from './component/passValue/show-nick-name/show-nick-name.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    BtnCountComponent,
    DirectiveComponent,
    NeedStrongDirective,
    TodolistComponent,
    SuffixPipe,
    TranslateGenderPipe,
    MyServiceComponent,
    ParentComponent,
    EditNickNameComponent,
    ShowNickNameComponent
  ],
  imports: [
    // 浏览器模块导出了 CommonModule，所以指令模块可以使用
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
