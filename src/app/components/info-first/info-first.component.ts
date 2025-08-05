import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-first',
  templateUrl: './info-first.component.html',
  styleUrls: ['../../app.component.scss']
})
export class InfoFirstView {
  @Output() nextView = new EventEmitter<void>();

  onMeetRuben() {
    this.nextView.emit();
  }
}
