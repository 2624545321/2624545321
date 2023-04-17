import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
// pipe
import { NeedStrongDirective } from './directive/need-strong.directive';
import { SuffixPipe } from './pipe/suffix';
import { TranslateGenderPipe } from './pipe/translateGender';
// directive
import { DirectiveComponent } from './component/directive/directive.component';
// Component
import { AppComponent } from './app.component';
import { MyComponent } from './component/myCom/myComponent.component';
import { BtnCountComponent } from './component/btn-count/btn-count.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { MyServiceComponent } from './component/my-service/my-service.component';
import { ParentComponent } from './component/passValue/parent/parent.component';
import { EditNickNameComponent } from './component/passValue/edit-nick-name/edit-nick-name.component';
import { ShowNickNameComponent } from './component/passValue/show-nick-name/show-nick-name.component';
// page
import { IndexComponent } from './page/index/index.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { UserCenterComponent } from './page/user-center/user-center.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';


const routes: Routes = [
  // { path: ' ', redirectTo: 'index', pathMatch: 'prefix' },
  { path: '', pathMatch: "full", redirectTo: 'index' },
  { path: 'index', component: IndexComponent },
  { path: 'product/List', component: ProductListComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'userCenter', component: UserCenterComponent },
  { path: '**', component: NotFoundPageComponent }
]
// {path: '', component: IndexComponent},
@NgModule({
  declarations: [
    // directive
    DirectiveComponent,
    NeedStrongDirective,
    TodolistComponent,
    // prpe
    SuffixPipe,
    TranslateGenderPipe,
    // Component
    AppComponent,
    MyComponent,
    BtnCountComponent,
    MyServiceComponent,
    ParentComponent,
    EditNickNameComponent,
    ShowNickNameComponent,
    // page
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserCenterComponent,
    NotFoundPageComponent
  ],
  imports: [
    // 浏览器模块导出了 CommonModule，
    // CommonModule 包含指令模块，所以指令模块可以使用
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // 导入路由模块，并注册路由词典，用于根模块中
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
