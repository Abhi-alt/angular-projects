import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.componet';
import { Store } from '@ngrx/store';
import { appSelector } from './core/store/app-state/app-state.selector';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderComponent,
    AsyncPipe,
    MatButtonModule,
    RouterLink,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store);
  isLoading = this.store.select(appSelector).pipe(map((app) => app.loading));
}
