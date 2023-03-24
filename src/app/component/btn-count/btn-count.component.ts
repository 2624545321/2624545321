import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-count',
  templateUrl: './btn-count.component.html',
  styleUrls: ['./btn-count.component.scss']
})
export class BtnCountComponent {
  count: number = 1

  handleCount(way:string):void {
    switch(way) {
      case 'add':
        this.count++
      break
      case 'minus':
        this.count--
      break
    }
  }
}
