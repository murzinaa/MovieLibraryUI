import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Genre} from "../../models/genre";
import {DropdownOption} from "../../models/dropdown";
import {Actor} from "../../models/actor";
import {ActivatedRoute} from "@angular/router";
import {MovieDetails} from "../../models/movieDetails";

@Component({
  selector: 'app-movie-upsert',
  templateUrl: 'movie-library-upsert.component.html',
  providers: [ClientService]
})

export class MovieLibraryUpsertComponent implements OnInit{

  public isANewMovie: boolean = true;

  public upsertMovieForm: FormGroup;
  public title: FormControl;
  public releaseYear: FormControl;
  public description: FormControl;
  public genreId: FormControl;
  public rating: FormControl;
  public actorIds: FormControl;

  public genres: Genre[] = [];
  public actors: Actor[] = [];

  public genreDropdownOptions: DropdownOption<number>[] = [];
  public actorsDropdownOptions: DropdownOption<number>[]=[];

  public movie: MovieDetails;


  constructor(private service: ClientService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.getMovie(id);
      // get initial data
    }

    this.getGenres();
    this.getActors();
    this.initializeFrom();
  }



  initializeFrom(){
    this.title = new FormControl(this.movie?.title);
    this.releaseYear = new FormControl(this.movie?.releaseYear);
    this.description = new FormControl(this.movie?.description);
    // todo: change to genre dropdown
    this.genreId = new FormControl(this.movie?.genreId);
    this. rating = new FormControl(this.movie?.rating);

    this.upsertMovieForm = new FormGroup({
      title: this.title,
      releaseYear: this.releaseYear,
      description: this.description,
      genreId: this.genreId,
      rating: this.rating
      // actorIds: this.actorIds
    });
    console.log(this.movie)
  }

  saveEvent(formValues: any){
    // todo: implement save event
      console.log(formValues)
  }

  cancel(){
      // todo: implement the method
  }

  getGenres(){
    this.service.getGenres()
      .subscribe((data: Genre[]) =>
      {
        this.genres = data;
        this.genres.forEach(genre => this.genreDropdownOptions.push({value: genre.id, text: genre.value}));
      });
  }

  getActors(){
    this.service.getActors()
      .subscribe((data: Actor[]) =>
      {
        this.actors = data;
        this.actors.forEach(actor => this.actorsDropdownOptions.push({value: actor.id, text: actor.name + ' ' + actor.surname}));
      });
  }

  getMovie(id: string){
    this.movie = this.route.snapshot.data['movie'];
  }

}
