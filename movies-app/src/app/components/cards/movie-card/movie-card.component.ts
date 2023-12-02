import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialMovieInterface } from '../../../movies/movie';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie: PartialMovieInterface = {};
}
