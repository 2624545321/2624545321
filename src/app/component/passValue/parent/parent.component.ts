import { Component, OnInit, ViewChild } from '@angular/core';

interface profile {
  val: string
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  protected nickName: string = ''

  @ViewChild('blog', { static: true })
  private blog: any
  @ViewChild('editNk', { static: true })
  private editNk: any
  @ViewChild('showNk', { static: true })
  private showNk: any

  ngOnInit(): void {
    this.nickName = '用户名'
    console.log(this.blog)
    console.log(this.editNk)
    console.log(this.showNk)
  }

  updateNkName(e: profile):void {
    // console.log(e)
    this.nickName = e.val
  }


}
