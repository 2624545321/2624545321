import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-nick-name',
  templateUrl: './show-nick-name.component.html',
  styleUrls: ['./show-nick-name.component.scss']
})
export class ShowNickNameComponent {
  @Input()
  userNk: string = ''

  ngOnChanges() {
    console.log('ngOnChanges ')
  }
}
