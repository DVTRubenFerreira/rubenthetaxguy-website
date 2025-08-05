import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

    // If you're using AngularFire **Compat** modules (like AngularFirestore), you ALSO need this:
    importProvidersFrom(
      // Note: Only use compat modules if you're stuck on older API patterns
      AngularFireModule.initializeApp(firebaseConfig)
    ),
  ]
});
