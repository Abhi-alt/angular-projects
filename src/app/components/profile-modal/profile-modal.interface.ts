import { FormControl } from '@angular/forms';

export interface ProfileData {
  email: FormControl<string | null>;
  name: FormControl<string | null>;
  dob: FormControl<Date | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  phone: FormControl<string | null>;
}
