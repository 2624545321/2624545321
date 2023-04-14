import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-nick-name',
  templateUrl: './edit-nick-name.component.html',
  styleUrls: ['./edit-nick-name.component.scss']
})
export class EditNickNameComponent {
  protected modifyNkname = ''

  @Output()
  protected handleUpdateNkName = new EventEmitter()

  handleModiftNkname(): void {
    // console.log()
    this.handleUpdateNkName.emit({
      val: this.modifyNkname
    })
  }


}
