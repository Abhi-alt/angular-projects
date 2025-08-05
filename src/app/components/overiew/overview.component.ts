import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

import { Firestore, doc, docData } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-overiew',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  imports: [MatDividerModule, MatCardModule, CurrencyPipe, MatButtonModule],
})
export class OverviewComponent {
  private firestore = inject(Firestore);

  constructor() {
    const userDoc = doc(this.firestore, 'users/sZeUsLyganWHVXQ0zKb2SZvNZCA2');
    const data = docData(userDoc);
    data.pipe(map((data) => console.log(data))).subscribe();
    console.log('ran.......');
  }
}
