import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MovieOverview} from "../../../models/movie-overview/movie-overview";

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})

export class MovieListComponent{

  @Input()
  public movie: MovieOverview;

  @Output()
  public getMoviesEvent: EventEmitter<number> = new EventEmitter<number>();

  public readonly defaultImageUrl = 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI=';

  public getMovies(page: number){
    this.getMoviesEvent.emit(page);
  }
}
