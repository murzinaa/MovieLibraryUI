import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieDetails} from "../../models/movieDetails";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-library-details.component.html',
  providers: [ClientService]
})

export class MovieLibraryDetailsComponent implements OnInit{
  constructor(private client: ClientService, private route: ActivatedRoute, private router: Router) {
  }
  public movie: MovieDetails;
  private id: number;
  public actors: string;

  getMovie(): MovieDetails{
    return this.route.snapshot.data['movie'];
  }

  getActors(): string{
     return this.movie.actors.map(actor => actor.name + ' ' + actor.surname).join(', ');
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.movie = this.getMovie();
    this.actors = this.getActors()
  }

  deleteMovie(){
    this.client.deleteMovie(this.id).subscribe(() => {
      this.router.navigate(['/movie']);
    })
  }
}
