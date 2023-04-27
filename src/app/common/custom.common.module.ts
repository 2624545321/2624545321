import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MockInterceptor } from "./interceptor";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MockInterceptor,
      multi: true
    }
  ]
})

export class CustomCommonModule {}