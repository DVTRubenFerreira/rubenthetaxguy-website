import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-third',
  templateUrl: './info-third.component.html',
  styleUrls: ['../../app.component.scss']
})
export class InfoThirdView {
  @Output() goToContact = new EventEmitter<void>();
  @Output() goToPriceList = new EventEmitter<void>();

  onImSold() {
    this.goToContact.emit();
  }

  onHowCheap() {
    this.goToPriceList.emit();
  }
}
