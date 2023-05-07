import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieDetails} from "../../models/movieDetails";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Genre } from "../../models/genre";

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-library-details.component.html',
  providers: [ClientService],
  styleUrls: ['movie-library-details.component.css']
})

export class MovieLibraryDetailsComponent implements OnInit {

  public movie: MovieDetails = new MovieDetails();
  public genre: Genre = new Genre();
  public id: number;
  public actors: string;

  public readonly defaultImageUrl = 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI=';

  constructor(private client: ClientService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.setInitialData();
  }

  setInitialData(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.movie = this.getMovie();
    this.actors = this.getActors();
    this.getGenre();
  }
  getMovie(): MovieDetails {
    return this.route.snapshot.data['movie'];
  }

  getActors(): string {
    return this.movie.actors.map(actor => actor.name + ' ' + actor.surname).join(', ');
  }

  getGenre(){
    this.client.getGenreById(this.movie.genreId).subscribe(data => {
      this.genre = data;
    })
  }

  deleteMovie() {
    if (confirm("Are you sure to delete this movie?")) {
      this.client.deleteMovie(this.id).subscribe(() => {
        this.router.navigate(['/movie']);
      })
    }
  }
}
