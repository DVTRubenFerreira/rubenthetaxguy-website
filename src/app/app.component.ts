import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export enum ViewMode {
  First = 'first',
  Second = 'second',
  Third = 'third',
  PriceList = 'priceList',
  Contact = 'contact',
  Query = 'query'
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  viewMode = ViewMode;
  currentViewMode: ViewMode = ViewMode.First;
}
