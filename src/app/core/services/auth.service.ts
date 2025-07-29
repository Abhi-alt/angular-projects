import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private auth = inject(Auth);

  signupUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((resp) => resp)
      .catch((e) => console.log(e));
  }
}
