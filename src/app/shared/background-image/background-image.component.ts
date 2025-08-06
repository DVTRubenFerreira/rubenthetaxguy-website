import { Component, Input, OnInit } from '@angular/core';
import { BackgroundImages } from '../../models/backgroundImages.interface';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrl: './background-image.component.scss',
})
export class BackgroundImageComponent implements OnInit {
  @Input() backgroundImages: BackgroundImages | undefined;

  public imagesForCurrentView: string[] = [];
  public imageIndex: number = 0;
  public isMobile: boolean = window.innerWidth < 768;

  ngOnInit() {
    this.updateImagesForCurrentView();
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      this.updateImagesForCurrentView();
    });
    setInterval(() => {
      this.imageIndex =
        (this.imageIndex + 1) % this.imagesForCurrentView.length;
    }, 3000);
  }

  private updateImagesForCurrentView() {
    if (!this.backgroundImages) return;
    this.imagesForCurrentView = this.isMobile
      ? this.backgroundImages.mobile
      : this.backgroundImages.desktop;
  }
}
