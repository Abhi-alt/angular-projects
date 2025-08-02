import { inject } from '@angular/core';
import {
  CanMatchFn,
  Router,
  RedirectCommand,
  CanActivate,
  CanActivateFn,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { userDetailSelector } from '../store/user-details/user-details.selector';
import { firstValueFrom } from 'rxjs';

export const canAccessApp: CanActivateFn = async () => {
  const store = inject(Store);
  const router = inject(Router);
  const userDetail = await firstValueFrom(store.select(userDetailSelector));
  if (!!userDetail.access_token) {
    return true;
  }
  const routeUrl = router.parseUrl('/login');
  return new RedirectCommand(routeUrl, { skipLocationChange: false });
};

export const canAccessAuthPage: CanActivateFn = async () => {
  const store = inject(Store);
  const router = inject(Router);
  const userDetail = await firstValueFrom(store.select(userDetailSelector));
  if (!userDetail.access_token) {
    return true;
  }
  const path = router.parseUrl('/home');
  return new RedirectCommand(path, { skipLocationChange: false });
};
