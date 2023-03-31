import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {
  list: string[] = [
    '唱歌', '跳舞', '打篮球'
  ]

  haslist: boolean = true

  // condition: string = 'test'

  value = 'value string'


  // userInfo = new Subject<{name: string, age: number}>()

  handleClick(): void {
    this.haslist = !this.haslist
  }

  condition() {
    // return 'test string'
    return true
  }

  // getInfo(): void {
  //   setTimeout(() => {
  //     // this.userInfo = {
  //     //   name: '孙悟空',
  //     //   age: 18
  //     // }
  //     // this.userInfo = '孙悟空'
  //     this.userInfo.name = '孙悟空'
  //     this.userInfo.age = 18
  //   }, 1000);
  // }
  boxStyle: object = {
    fontSize: '24px',
    lineHeight: '40px',
    color: '#bfa'
  }

  myIpt: string = ''
  tipsText: string = ''
  // iptVal: string = ''

  tipClass = {
    invalid: !this.isValid(),
    valid: this.isValid()
  }

  handleIpt():void {
    // console.log(this.myIpt)
    if (this.isValid()) {
      this.tipClass.valid = true
      this.tipClass.invalid = false
    } else {
      this.tipClass.valid = false
      this.tipClass.invalid = true
    }
  }

  private isValid() {
    // console.log('我执行力')
    return (this.myIpt.length > 6 && this.myIpt.length < 12)
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
