import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieOverview} from "../../models/movieOverview";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-overview',
  templateUrl: 'movie-library-overview.component.html',
  providers: [ClientService]
  })
export class MovieLibraryOverviewComponent implements OnInit{

  movies: MovieOverview[] = [];

  constructor(private client: ClientService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.client.getMovies()
      .subscribe((data: MovieOverview[]) => {
        this.movies = data;
      });
  }
}
