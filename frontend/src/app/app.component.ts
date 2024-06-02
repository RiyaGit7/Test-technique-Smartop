import { Component } from '@angular/core';
import { SurgeonRankingComponent } from './components/surgeon-ranking/surgeon-ranking.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SurgeonRankingComponent],
})
export class AppComponent {
  title = 'Hosital Management System';
}
