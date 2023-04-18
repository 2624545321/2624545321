import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  protected prodList: any[] = [
    {
      name: '产品1',
      id: 1
    },
    {
      name: '产品2222',
      id: null
    },
    {
      name: '产品33',
      id: 3
    }
  ]
}
