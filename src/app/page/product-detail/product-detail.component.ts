import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent {
  protected serial:number = -1
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log(this.router)
    // console.log(this.route)
    this.route.queryParams.subscribe(params => {
      console.log('queryParams', params)
      this.serial = params['pid']
    })

    this.route.params.subscribe(params => {
      console.log('params', params)
      this.serial = params['pid']
    })
  }
}
