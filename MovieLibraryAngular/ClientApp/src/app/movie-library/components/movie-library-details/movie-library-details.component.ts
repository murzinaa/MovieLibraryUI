import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {MovieDetails} from "../../models/movieDetails";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-library-details.component.html',
  providers: [ClientService]
})

export class MovieLibraryDetailsComponent implements OnInit{
  constructor(private client: ClientService, private route: ActivatedRoute) {
  }
  public movie: MovieDetails;
  private id: string;
  public actors: string;

  getMovie(id: string){
    this.movie = this.route.snapshot.data['movie'];
    console.log(this.movie);
    console.log(this.route.snapshot.data['movie'])
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovie(this.id);
    // console.log(this.movie.actors.map((actor) => actor.name + ' ' + actor.surname).join(', '));
  }
}
