import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {MovieOverview} from "../../models/movie-overview/movie-overview";
import {Movie} from "../../models/movie-overview/movie";

@Component({
  selector: 'app-movie-overview',
  templateUrl: 'movie-library-overview.component.html',
  providers: [ClientService]
  })
export class MovieLibraryOverviewComponent implements OnInit{

  public movies: Movie[] = [];

  public pageNumber: number = 1;
  public pageSize: number = 20;
  public totalPages: number;

  constructor(private client: ClientService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getMovies(1);
  }

  getMovies(pageNumber: number){
    this.client.getMovies(pageNumber, this.pageSize)
      .subscribe((data: MovieOverview) => {
        this.movies = data.movies;
        this.pageNumber = data.pageNumber;
        this.totalPages = data.totalRecords;
      });
  }
}
