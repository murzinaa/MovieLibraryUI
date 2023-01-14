import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DropdownOption} from "../../models/dropdown";
import {Actor} from "../../models/actor";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieDetails} from "../../models/movieDetails";
import {AddMovie} from "../../models/addMovie";
import {AddActorComponent} from "./add-actor/add-actor.component";
import {finalize, forkJoin} from "rxjs";
import {EditMovie} from "../../models/editMovie";

@Component({
  selector: 'app-movie-upsert',
  templateUrl: 'movie-library-upsert.component.html',
  providers: [ClientService],
  styleUrls: ['movie-library-upsert.component.css']
})

export class MovieLibraryUpsertComponent implements OnInit {
  public isANewMovie: boolean = true;
  public isANewActor: boolean = true;
  public showActorsSection: boolean = false;
  public showAddActorsSection: boolean = false;
  public showDropdown: boolean = true;

  public upsertMovieForm: FormGroup;
  public title: FormControl;
  public releaseYear: FormControl;
  public description: FormControl;
  public genreId: FormControl;
  public rating: FormControl;
  public actorsFormArray: FormArray;

  public actors: Actor[] = [];

  public genreDropdownOptions: DropdownOption<number>[] = [];
  public actorsDropdownOptions: DropdownOption<number>[] = [];

  public movie: MovieDetails;
  public selectedActorIds: number[] = [];

  public movieId: string | null;

  constructor(private service: ClientService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    if (this.movieId) {
      this.getMovie(this.movieId);
      this.isANewMovie = false;
    }
    this.setInitialData();
  }

  get actorArray(): FormGroup[] {
    const array = this.upsertMovieForm?.get('actorsFormArray') as FormArray;
    return array.controls as FormGroup[];
  }

  private setInitialData() {
    const getActors = this.service.getActors();
    const getGenres = this.service.getGenres();

    forkJoin([getActors, getGenres]).subscribe(results => {
      this.actors = results[0];
      this.actors.forEach(actor => {
        this.actorsDropdownOptions.push({value: actor.id, text: actor.name + ' ' + actor.surname});
      });
      this.actorsDropdownOptions = this.actorsDropdownOptions.filter(x => !this.selectedActorIds.includes(x.value));

      results[1].forEach(genre => this.genreDropdownOptions.push({value: genre.id, text: genre.value}));

      this.initializeFrom();
    })
  }

  private initializeFrom() {
    this.title = new FormControl(this.movie?.title);
    this.releaseYear = new FormControl(this.movie?.releaseYear);
    this.description = new FormControl(this.movie?.description);
    this.genreId = new FormControl(this.genreDropdownOptions.find(x => x.value == this.movie?.genreId)?.value);
    this.rating = new FormControl(this.movie?.rating);
    this.actorsFormArray = this.fb.array([]);

    if (this.movie?.actors) {
      this.movie.actors.forEach(actor => {
        this.actorsFormArray.push(AddActorComponent.addActorInfoItem(actor.name, actor.surname, actor.age, actor.id));
      });
      this.showActorsSection = true;
    }

    this.upsertMovieForm = this.fb.group({
      title: this.title,
      releaseYear: this.releaseYear,
      description: this.description,
      genreId: this.genreId,
      rating: this.rating,
      actorsFormArray: this.actorsFormArray,
      actorId: new FormControl()
    });

    this.actorsFormArray?.disable();
  }

  saveForm() {
    if (this.isANewMovie) {
      this.saveNewMovie()
    } else {
      this.updateMovie();
    }
  }

  saveNewMovie() {
    const actorForm = this.actorsFormArray.getRawValue();
    const movie = new AddMovie();

    movie.title = this.title.value;
    movie.rating = this.rating.value;
    movie.releaseYear = this.releaseYear.value;
    movie.genreId = this.genreId.value;
    movie.imageUrl = "";
    movie.actorIds = [];
    movie.description = this.description.value;

    actorForm.forEach(actor => {
      movie.actorIds.push(actor.id);
    })

    this.service.createMovie(movie).subscribe(id => {
      this.router.navigate([`/movie/${id}`]);
    });
  }

  updateMovie() {
    const actorForm = this.actorsFormArray.getRawValue();
    const updateMovie = new EditMovie();

    updateMovie.id = +this.movieId!;
    updateMovie.title = this.title.value;
    updateMovie.rating = this.rating.value;
    updateMovie.releaseYear = this.releaseYear.value;
    updateMovie.genreId = this.genreId.value;
    updateMovie.actorIds = [];
    updateMovie.description = this.description.value;
    actorForm.forEach(actor => {
      updateMovie.actorIds.push(actor.id);
    })

    this.service.updateMovie(updateMovie).subscribe(() => {
      this.router.navigate([`/movie/${this.movieId}`]);
    });
  }

  cancel() {
    // todo: implement the method
    const returnUrl = this.isANewMovie ? '/movie' : `/movie/${this.movieId}`;
    this.router.navigate([returnUrl]);
  }

  getMovie(id: string) {
    this.movie = this.route.snapshot.data['movie'];
    this.movie.actors.forEach(actor => {
      this.selectedActorIds.push(actor.id);
    });
  }

  addActor() {
    this.actorsFormArray.push(AddActorComponent.addActorInfoItem('', '', 0, 0))
    this.showDropdown = false;
    this.showAddActorsSection = false;
  }

  onOptionSelected() {
    const id = this.upsertMovieForm.controls.actorId.value;
    const data = this.actors.find(x => x.id == id);
    if (data) {
      this.actorsFormArray.push(AddActorComponent.addActorInfoItem(data.name, data.surname, data.age, data.id));
      this.actorsFormArray.at(-1).disable();
      this.selectedActorIds.push(id);
    }
    this.actorsDropdownOptions = this.actorsDropdownOptions.filter(x => !this.selectedActorIds.includes(x.value));
    this.showAddActorsSection = false;
  }

  saveActor(form: FormGroup, index: number) {
    const actor = new Actor();
    actor.name = form.controls.firstName.value;
    actor.surname = form.controls.lastName.value;
    actor.age = form.controls.age.value;

    // what if we don't pass an id??
    actor.id = 0;
    this.service.addActor(actor).subscribe(id => {
      this.actorsFormArray.at(index).patchValue({
        firstName: form.controls.firstName.value,
        lastName: form.controls.lastName.value,
        age: form.controls.age.value,
        id: id
      });
    });

    this.actorsFormArray.at(index).disable();
  }

  showAddActorFunctionality() {
    this.showAddActorsSection = true;
    this.showDropdown = true;
  }

  removeActor(index: number) {
    const actor = this.actorsFormArray.at(index).value;
    const actorId = actor.id;

    this.selectedActorIds = this.selectedActorIds.filter(x => x !== actorId);
    this.actorsDropdownOptions.push({value: actorId, text: actor.firstName + actor.lastName});
    this.actorsFormArray.removeAt(index);
    this.isANewActor = false;
  }
}
