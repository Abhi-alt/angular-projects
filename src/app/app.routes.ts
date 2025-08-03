import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { canAccessApp, canAccessAuthPage } from './core/guards/auth.guards';
import { LoaderComponent } from './components/loader/loader.componet';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canAccessAuthPage],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [canAccessAuthPage],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canAccessApp],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
