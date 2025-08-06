import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BackgroundImages } from '../../models/backgroundImages.interface';
import { BackgroundImageComponent } from '../../shared/background-image/background-image.component';

@Component({
  selector: 'app-contact-view',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BackgroundImageComponent,
  ],
  templateUrl: './contact-view.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class ContactViewComponent {
  @Output() goBack = new EventEmitter<void>();

  public backgroundImages: BackgroundImages = {
    desktop: [{ src: '/having-fun1-desktop.jpg', alt: 'having-fun1' }],
    mobile: [{ src: '/having-fun1-mobile.jpg', alt: 'having-fun1' }],
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private firestore: AngularFirestore) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      const formData = {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message,
        timestamp: new Date(),
      };

      this.firestore
        .collection('leads')
        .add(formData)
        .then(() => {
          console.log('Lead submitted to Firebase');
          this.submitSuccess = true;
          this.isSubmitting = false;
          form.reset();
        })
        .catch((error) => {
          console.error('Error submitting lead:', error);
          this.submitError = true;
          this.isSubmitting = false;
        });
    }
  }

  onBack() {
    this.goBack.emit();
  }
}
