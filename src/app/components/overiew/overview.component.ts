import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-overiew',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  imports: [MatDividerModule, MatCardModule],
})
export class OverviewComponent {}
