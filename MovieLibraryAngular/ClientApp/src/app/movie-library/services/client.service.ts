import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MovieOverview} from "../models/movieOverview";
import {MovieDetails} from "../models/movieDetails";
import {Urls} from "../constants/urls";
import {Observable} from "rxjs";
import {Genre} from "../models/genre";
import {Actor} from "../models/actor";

@Injectable({
  providedIn: 'root'
})
export class ClientService{
  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<MovieOverview[]>{
    return this.httpClient.get<MovieOverview[]>(Urls.moviesOverview);
  }

  getMovieById(id: string): Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(Urls.movieDetails.replace(':id', id));
  }

  createMovie(){

  }

  updateMovie(){
  }

  getActors(): Observable<Actor[]>{
    return this.httpClient.get<Actor[]>(Urls.getActors);
  }

  getGenres(): Observable<Genre[]>{
    return this.httpClient.get<Genre[]>(Urls.getGenres);
  }
}
