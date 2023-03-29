import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 插件
import { ElModule } from 'element-angular'
// 根组件
import { AppComponent } from './app.component'; 
import { HomeModule } from './home/home.module';
// 路由
import { AppRoutingModule } from './app.routing.module';
// 模块
import { AppFooterComponent, AppHeaderComponent } from './common';
import { AuthModule } from './auth/auth.module';
import { CustomCommonModule } from './common/custom.common.module';
// mock
import './../mock/home.js'


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    // 浏览器模块导出了 CommonModule，所以指令模块可以使用
    BrowserModule,
    ElModule.forRoot(), // element
    // 各个子模块
    HomeModule,
    AuthModule,
    // 路由
    AppRoutingModule,
    // 公用
    CustomCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
