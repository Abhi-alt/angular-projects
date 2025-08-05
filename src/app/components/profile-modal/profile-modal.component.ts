import { Component } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ProfileData } from './profile-modal.interface';

@Component({
  selector: 'profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ProfileModal {
  userProfileForm = new FormGroup<ProfileData>({
    email: new FormControl({ value: 'abhi1@email.com', disabled: true }),
    phone: new FormControl('', {
      validators: [phoneNumberValidator()],
    }),
    city: new FormControl(),
    state: new FormControl(),
    name: new FormControl(),
    dob: new FormControl(),
  });

  onSubmit() {
    console.log(this.userProfileForm);
  }
}

const phoneNumberValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control?.value;
    if (!value) return null;
    if (value.length !== 10) {
      return { invalidPhone: true };
    }
    return null;
  };
};
