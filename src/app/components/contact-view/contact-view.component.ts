import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ContactViewComponent {
  @Output() goBack = new EventEmitter<void>();

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
  }

  onBack() {
    this.goBack.emit();
  }
}
