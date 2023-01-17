import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieOverview} from "../../models/movie-overview/movie-overview";
import {Movie} from "../../models/movie-overview/movie";

@Component({
  selector: 'app-movie-overview',
  templateUrl: 'movie-library-overview.component.html',
  providers: [ClientService],
  styleUrls: ['movie-library-overview.component.css']
})
export class MovieLibraryOverviewComponent implements OnInit {

  public movies: Movie[] = [];

  public pageNumber: number = 1;
  public pageSize: number = 20;
  public totalPages: number;

  public readonly defaultImageUrl = 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI=';

  constructor(private client: ClientService) {
  }

  ngOnInit(): void {
    this.getMovies(1);
  }

  getMovies(pageNumber: number) {
    this.client.getMovies(pageNumber, this.pageSize)
      .subscribe((data: MovieOverview) => {
        this.movies = data.movies;
        this.pageNumber = data.pageNumber;
        this.totalPages = data.totalRecords;
      });
  }
}
