import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent {
  list = [
    {
      thing: '吃饭',
      ipt: ''
    },
    {
      thing: '睡觉',
      ipt: ''
    }
  ]

  addIpt: string = ''

  addTodo() {
    this.list.push({
      thing: this.addIpt,
      ipt: ''
    })
  }

  handleDel(i: number) {
    this.list.splice(i, 1)
  }
}
