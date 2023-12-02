import { CommonModule } from '@angular/common';
import { Component, Inject, Injectable, OnInit, inject } from '@angular/core';
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

  movies: PartialMovieInterface[] = []

  // useEffect de React
  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((response: any) => {
        this.movies = response.results
      })
  }



}
