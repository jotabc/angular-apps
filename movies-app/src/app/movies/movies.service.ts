import { Injectable } from '@angular/core';
import { environments } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { PartialMovieInterface } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = environments.BASE_URL_API;
  private url = `${this.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${environments.API_KEY}&language=en-US`;
  private httpClient = inject(HttpClient);

  getMovies() {
    return this.httpClient.get<PartialMovieInterface[]>(this.url)
  }

}
