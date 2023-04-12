import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LogService } from 'src/app/log/LogService';
import { TimerService } from 'src/app/log/TimerService';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss'],
  providers: [TimerService]
})
export class MyServiceComponent {

  // log = new LogService()
  log
  http
  isLoading = false
  tableIpt: string = ''

  tableData: any[] = []

  timerService: TimerService

  constructor(log: LogService, http: HttpClient, timerService: TimerService) {
    this.log = log
    this.http = http
    this.timerService = timerService
  }

  addGoods() {
    this.log.doLog('添加商品')
  }

  delGoods() {
    this.log.doLog('删除商品')
  }

  getTableData() {
    this.isLoading = true
    this.http.get('http://localhost:3000/posts')
      .subscribe((res: any) => {
        // console.log(res) 
        this.tableData = res
        this.isLoading = false
      })
  }

  addTableData() {
    // console.log(this.tableIpt.trim())
    const v = this.tableIpt.trim()
    if (!v || v.length < 2 || Number.isFinite(Number(v))) {
      return alert('请输入姓名')
    }
    // 当前表格最后一个的id ++
    // const id = this.tableData.length > 0
    //   ? this.tableData.at(-1).id ++
    //   : 5
    //   console.log(id)
    // return
    const params = {
      // id,
      name: v,
      age: parseInt(Math.random() * 20 + ''),
      gender: Math.random() > 0.5 ? 1 : 0
    }
    this.http.post('http://localhost:3000/posts',
      params
    )
      .subscribe(res => {
        console.log(res)
        if (res) {
          alert('添加数据成功')
          this.getTableData()
        }
      })
  }

  handleLogin() {
    this.timerService.timeStart()
    for(let i = 0; i < 10000000; i ++){
      Math.random() * 100 + 80
    }
    this.timerService.timeEnd('登录')
  }

  handleRegister() {
    this.timerService.timeStart()
    for(let i = 0; i < 10000000; i ++){
      Math.random() * 100 + 80
    }
    this.timerService.timeEnd('注册')
  }
}
