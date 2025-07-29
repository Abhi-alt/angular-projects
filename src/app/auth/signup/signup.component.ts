import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { SignupInterface } from './signup.interface';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class SignupComponent {
  private authService = inject(AuthService);
  signupFormGroup = new FormGroup<SignupInterface>(
    {
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl<string>('', Validators.required),
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') }
  );
  onFormSubmit() {
    this.signupFormGroup.markAllAsTouched();
    if (!this.signupFormGroup.valid) {
      return;
    }
    const email = this.signupFormGroup.get('email')?.value;
    const password = this.signupFormGroup.get('password')?.value;
    if (!email || !password) return;
    this.authService
      .signupUser(email, password)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err.message));
  }

  isValid(controlName: string) {
    const control = this.signupFormGroup.get(controlName);
    return control?.errors && (control.touched || control.dirty);
  }
}

function passwordMatchValidator(
  passwordControlName: string,
  confirmPasswordControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(passwordControlName);
    const confirmPasswordControl = formGroup.get(confirmPasswordControlName);
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['mismatch']
    ) {
      return null;
    }
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}
