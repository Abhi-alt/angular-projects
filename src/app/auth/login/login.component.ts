import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginFormInterface } from './login.interface';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { loadingAction } from '../../core/store/app-state/app-state.actions';
import { userDetailsAction } from '../../core/store/user-details/user-details.action';

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
  private authService = inject(AuthService);
  private store = inject(Store);
  private router = inject(Router);
  loginForm = new FormGroup<LoginFormInterface>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onFormSubmit() {
    this.loginForm.markAllAsTouched();
    const { email, password } = this.loginForm.value;
    if (!!email && !!password) {
      this.store.dispatch(loadingAction({ loading: true }));
      this.authService
        .loginUser(email, password)
        .then((resp) => {
          console.log(resp);
          if (resp) {
            this.store.dispatch(userDetailsAction(resp));
            this.router.navigate(['/']);
          }
        })
        .finally(() => this.store.dispatch(loadingAction({ loading: false })));
    }
  }
  isValid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.errors && (control.touched || control.dirty);
  }
}
