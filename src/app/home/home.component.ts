import { Component } from '@angular/core';
import { OverviewComponent } from '../components/overiew/overview.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [OverviewComponent],
})
export class HomeComponent {}
