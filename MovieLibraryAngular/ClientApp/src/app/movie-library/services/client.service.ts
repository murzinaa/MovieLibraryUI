import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MovieDetails} from "../models/movieDetails";
import {Urls} from "../constants/urls";
import {Observable} from "rxjs";
import {Genre} from "../models/genre";
import {Actor} from "../models/actor";
import {AddMovie} from "../models/addMovie";
import {EditMovie} from "../models/editMovie";
import {MovieOverview} from "../models/movie-overview/movie-overview";
import {SearchCriteria} from "../models/search-criteria";

@Injectable({
  providedIn: 'root'
})
export class ClientService{
  constructor(private httpClient: HttpClient) {
  }

  private readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getMovies(pageNumber: number, pageSize: number): Observable<MovieOverview>{
    return this.httpClient.get<MovieOverview>(Urls.moviesOverview + `?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }

  getMovieById(id: string): Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(Urls.movieDetails.replace(':id', id));
  }

  createMovie(movie: AddMovie): Observable<number>{
    return this.httpClient.post<number>(Urls.upsertMovie, movie, this.httpOptions);
  }

  updateMovie(movie: EditMovie){
    return this.httpClient.put(Urls.upsertMovie, movie, this.httpOptions);
  }

  getActors(): Observable<Actor[]>{
    return this.httpClient.get<Actor[]>(Urls.getActors);
  }

  getGenres(): Observable<Genre[]>{
    return this.httpClient.get<Genre[]>(Urls.getGenres);
  }

  addActor(actor: Actor): Observable<number>{
    return this.httpClient.post<number>(Urls.createActor, actor, this.httpOptions);
  }

  deleteMovie(id: number){
    return this.httpClient.delete(Urls.deleteMovie.replace(':id', id.toString()));
  }

  searchMovies(request: SearchCriteria, pageNumber: number, pageSize: number): Observable<MovieOverview>{
    return this.httpClient.post<MovieOverview>(Urls.searchMovie + `?PageNumber=${pageNumber}&PageSize=${pageSize}`, request);
  }
}
