import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private auth = inject(Auth);
  private toastrService = inject(ToastrService);

  signupUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((resp) => resp)
      .catch((e) => {
        if (e.code === 'auth/email-already-in-use') {
          this.toastrService.error('Email already exists. Please login');
        }
      });
  }
  async loginUser(email: string, password: string) {
    try {
      const userDetail = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const access_token = await userDetail.user.getIdToken();
      const _email = userDetail.user.email;
      const user_id = userDetail.user.uid;
      return { access_token, email: _email, user_id };
    } catch (error: any) {
      console.log(error.code);
      if (error.code === 'auth/invalid-credential') {
        this.toastrService.error('Invalid Email/Password', 'Login Failed');
      }
      return false;
    }
  }
}
