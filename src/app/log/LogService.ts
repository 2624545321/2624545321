import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  constructor() {
    // this.log = {}
  }

  log:object|null = null

  doLog(action: string) {
    const name = 'costom admin'
    const timeStr = new Date().toDateString()
    this.log = Object.assign({}, {
      name,
      timeStr,
      action
    })
    console.log(this.log)
  }
}