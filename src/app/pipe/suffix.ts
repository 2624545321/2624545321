import { Pipe } from "@angular/core";

@Pipe({
  name: 'suffixPipe'
})

export class SuffixPipe {
  transform(v: string, f:string, b: string) {
    console.log(f, b)
    return v + 'hhhhhh'
  }
}