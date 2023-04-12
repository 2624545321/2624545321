import { Pipe } from "@angular/core";

@Pipe({
  name: 'translateGender'
})

export class TranslateGenderPipe {
  transform(gender: number) {
    return gender === 0 
      ? '女'
      : gender === 1
        ? '男'
        : ''
  }
}
