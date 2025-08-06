import { Component, EventEmitter, Output } from '@angular/core';
import { BackgroundImageComponent } from '../../shared/background-image/background-image.component';
import { BackgroundImages } from '../../models/backgroundImages.interface';

@Component({
  selector: 'app-info-third',
  imports: [BackgroundImageComponent],
  templateUrl: './info-third.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class InfoThirdView {
  @Output() goToContact = new EventEmitter<void>();
  @Output() goToPriceList = new EventEmitter<void>();

  public backgroundImages: BackgroundImages = {
    desktop: [{ src: '/working-hard1-desktop.jpg', alt: 'working-hard1' }],
    mobile: [{ src: '/working-hard1-mobile.jpg', alt: 'working-hard1' }],
  };

  onImSold() {
    this.goToContact.emit();
  }

  onHowCheap() {
    this.goToPriceList.emit();
  }
}
