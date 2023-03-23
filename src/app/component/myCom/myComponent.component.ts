import { Component } from "@angular/core";

@Component({
  templateUrl: './myComponent.component.html',
  styleUrls: ['./myComponent.component.scss'],
  selector: 'app-my-component'
})

export class MyComponent {
  person = {
    name: '张三',
    age: 18
  }

  arr:number[] = [1, 3, 5]

  fn():string {
    return '测试函数'
  }
}