import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class TimerService {
  startTime: number = 0
  endTime: number = 0

  id: number = 0

  constructor() {
    this.id ++
    console.log('我执行了')
  }

  timeStart() {
    this.startTime = new Date().getTime()
    console.log(this.id)
  }

  timeEnd(actionName: string) {
    this.endTime = new Date().getTime()
    const expenditure = this.endTime - this.startTime
    console.log(actionName
      + '操作时间：', expenditure)
  }
}