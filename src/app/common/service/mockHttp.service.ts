import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class MockHttpService {
  constructor(private http: HttpClient) {

  }

  private formatterError(err: any) {
    console.log(err)
    return err
  }

  get(
    path: string,
    params: HttpParams = new HttpParams()
  ) {
    /* 
      catchError: 捕获错误，可在官网查看
      pipe 同链式调用
    */
    return this.http.get(path, { params })
      .pipe(catchError(this.formatterError))
  }
}