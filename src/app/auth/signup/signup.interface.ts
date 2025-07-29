import { FormControl } from '@angular/forms';

export interface SignupInterface {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
