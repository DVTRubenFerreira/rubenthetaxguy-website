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
    desktop: ['/nerd1-desktop.jpg', '/nerd2-desktop.jpg', '/nerd3-desktop.jpg'],
    mobile: ['/nerd1-mobile.jpg', '/nerd2-mobile.jpg', '/nerd3-mobile.jpg'],
  };

  onMeetRuben() {
    this.nextView.emit();
  }
}
