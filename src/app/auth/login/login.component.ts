import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginFormInterface } from './login.interface';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
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
export class LoginComponent {
  authService = inject(AuthService);
  loginForm = new FormGroup<LoginFormInterface>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onFormSubmit() {
    this.loginForm.markAllAsTouched();
    const { email, password } = this.loginForm.value;
    if (!!email && !!password) {
      this.authService.loginUser(email, password);
    }
  }
  isValid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.errors && (control.touched || control.dirty);
  }
}
