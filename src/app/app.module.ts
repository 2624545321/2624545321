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

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    HomeModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
