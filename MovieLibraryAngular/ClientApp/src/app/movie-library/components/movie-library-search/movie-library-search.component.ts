import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieOverview} from "../../models/movie-overview/movie-overview";
import {SearchCriteria} from "../../models/search-criteria";

@Component({
  selector: 'app-movie-search',
  templateUrl: 'movie-library-search.component.html',
  providers: [ClientService]
})

export class MovieLibrarySearchComponent implements OnInit {

  public movieOverview: MovieOverview;
  public searchCriteria: SearchCriteria;
  public showResults: boolean = false;

  constructor(private service: ClientService) {
  }

  public searchMovies(searchCriteria: SearchCriteria, pageNumber: number = 1, pageSize: number = 20) {
    this.showResults = false;
    this.searchCriteria = searchCriteria;
    this.service.searchMovies(searchCriteria, pageNumber, pageSize).subscribe(data => {
      if (data.movies.length > 0){
        this.movieOverview = data;
        this.showResults = true;
      }
    })
  }

  ngOnInit(): void {
    this.movieOverview = new MovieOverview();
    this.movieOverview.movies = [];
  }

  getMovies(page: number){
    this.searchMovies(this.searchCriteria, page);
  }
}
