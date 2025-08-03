import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-overiew',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  imports: [MatDividerModule, MatCardModule, CurrencyPipe, MatButtonModule],
})
export class OverviewComponent {}
