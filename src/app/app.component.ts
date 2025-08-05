import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoFirstView } from './components/info-first/info-first.component';
import { InfoSecondView } from './components/info-second/info-second.component';
import { InfoThirdView } from './components/info-third/info-third.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';

export enum ViewMode {
  First = 'first',
  Second = 'second',
  Third = 'third',
  PriceList = 'priceList',
  Contact = 'contact',
  Query = 'query',
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    InfoFirstView,
    InfoSecondView,
    InfoThirdView,
    ContactViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  viewMode = ViewMode;
  currentViewMode: ViewMode = ViewMode.First;
}
