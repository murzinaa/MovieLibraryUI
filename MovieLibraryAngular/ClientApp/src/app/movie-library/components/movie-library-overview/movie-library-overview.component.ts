import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieOverview} from "../../models/movie-overview/movie-overview";

@Component({
  selector: 'app-movie-overview',
  templateUrl: 'movie-library-overview.component.html',
  providers: [ClientService]
})
export class MovieLibraryOverviewComponent implements OnInit {

  public movieModel: MovieOverview;

  private pageSize: number = 20;

  constructor(private client: ClientService) {
  }

  ngOnInit(): void {
    this.movieModel = new MovieOverview();
    this.movieModel.movies = [];
    this.getMovies(1);
  }

  getMovies(pageNumber: number) {
    this.client.getMovies(pageNumber, this.pageSize)
      .subscribe((data: MovieOverview) => {
        this.movieModel = data;
      });
  }
}
