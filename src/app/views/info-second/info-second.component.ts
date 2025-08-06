import { Component, EventEmitter, Output } from '@angular/core';
import { BackgroundImageComponent } from '../../shared/background-image/background-image.component';
import { BackgroundImages } from '../../models/backgroundImages.interface';

@Component({
  selector: 'app-info-second',
  imports: [BackgroundImageComponent],
  templateUrl: './info-second.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class InfoSecondView {
  @Output() nextView = new EventEmitter<void>();

  public backgroundImages: BackgroundImages = {
    desktop: [{ src: '/tax-guy1-desktop.jpg', alt: 'tax-guy-1' }],
    mobile: [{ src: '/tax-guy1-mobile.jpg', alt: 'tax-guy-1' }],
  };

  onButIsHeGood() {
    this.nextView.emit();
  }
}
