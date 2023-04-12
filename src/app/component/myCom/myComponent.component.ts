import { Component } from "@angular/core";
import { TimerService } from "src/app/log/TimerService";

@Component({
  templateUrl: './myComponent.component.html',
  styleUrls: ['./myComponent.component.scss'],
  selector: 'app-my-component',
  providers: [TimerService]
})

export class MyComponent {
  person = {
    name: '张三',
    age: 18
  }

  arr:number[] = [1, 3, 5]

  timer: TimerService

  fn():string {
    return '测试函数'
  }

  constructor(timer: TimerService) {
    this.timer = timer
  }
}