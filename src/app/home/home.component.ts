// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MockHttpService } from '../common/service';
// import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    // private http: HttpClient
    private mockHttp: MockHttpService
  ) {

  }

  ngOnInit(): void {
    // console.log(this.http)
    // this.http.get('/api/getData')
    //   .pipe(catchError(err => {
    //     console.log(err.status, err.statusText)
    //     return ''
    //   }))
    //   .subscribe(response => {
    //     console.log(response)
    //   })
    this.mockHttp.get('/api/getData')
        .subscribe(response => {
        console.log(response)
      })
      
  }
}
