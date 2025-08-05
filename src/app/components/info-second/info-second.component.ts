import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-second',
  templateUrl: './info-second.component.html',
  styleUrls: ['../../app.component.scss']
})
export class InfoSecondView {
  @Output() nextView = new EventEmitter<void>();

  onButIsHeGood() {
    this.nextView.emit();
  }
}
