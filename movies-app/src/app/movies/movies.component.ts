import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MovieCardComponent } from '../components/cards/movie-card/movie-card.component';
import { MoviesService } from './movies.service';
import { MovieInterface, PartialMovieInterface } from './movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  providers: [MoviesService],
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  private moviesService = inject(MoviesService)

  // props
  movies: PartialMovieInterface[] = []
  isLoading = false;

  currentPage = 1;

  // ngOnInit => parecido al useEffect de React
  ngOnInit(): void {
    this.loadMovies()
  }

  loadMovies() {
    this.isLoading = true
    this.moviesService
      .getMovies({
        page: this.currentPage
      })
      .subscribe((response: any) => {
        this.movies = response.results
        this.isLoading = false
      }), (error: any) => {
        this.isLoading = false;
        console.log('Error:', error);
      };
  }

  nextPage() {
    this.currentPage++;
    this.loadMovies();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
    }
  }

}
