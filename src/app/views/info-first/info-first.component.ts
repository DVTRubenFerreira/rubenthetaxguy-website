import { Component, EventEmitter, Output } from '@angular/core';
import { BackgroundImages } from '../../models/backgroundImages.interface';
import { BackgroundImageComponent } from '../../shared/background-image/background-image.component';

@Component({
  selector: 'app-info-first',
  imports: [BackgroundImageComponent],
  templateUrl: './info-first.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class InfoFirstView {
  @Output() nextView = new EventEmitter<void>();

  public backgroundImages: BackgroundImages = {
    desktop: [
      { src: '/nerd1-desktop.jpg', alt: 'nerd-1' },
      { src: '/nerd2-desktop.jpg', alt: 'nerd-2' },
      { src: '/nerd3-desktop.jpg', alt: 'nerd-3' },
    ],
    mobile: [
      { src: '/nerd1-mobile.jpg', alt: 'nerd-1' },
      { src: '/nerd2-mobile.jpg', alt: 'nerd-2' },
      { src: '/nerd3-mobile.jpg', alt: 'nerd-3' },
    ],
  };

  onMeetRuben() {
    this.nextView.emit();
  }
}
