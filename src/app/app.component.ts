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

import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ProfileModal } from './components/profile-modal/profile-modal.component';

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
  readonly dialog = inject(MatDialog);
  isLoading = this.store.select(appSelector).pipe(map((app) => app.loading));

  onDialogOpen() {
    const dialogRef = this.dialog.open(ProfileModal, { minWidth: 620 });
    dialogRef
      .afterClosed()
      .subscribe((result) => console.log('closed', result));
  }
}
