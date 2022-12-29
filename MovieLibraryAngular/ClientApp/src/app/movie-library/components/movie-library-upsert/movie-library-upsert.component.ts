import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../services/client.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Genre} from "../../models/genre";
import {map} from "rxjs";
import {DedupeModuleResolvePlugin} from "@angular-devkit/build-angular/src/webpack/plugins";
import {DropdownOption} from "../../models/dropdown";

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
  public genreDropdownOptions: DropdownOption<number>[] = [];

  constructor(private service: ClientService) {
  }
  ngOnInit(): void {
    this.getGenres();
    this.initializeFrom();
  }



  initializeFrom(){
    this.title = new FormControl();
    this.releaseYear = new FormControl();
    this.description = new FormControl();
    // todo: change to genre dropdown
    this.genreId = new FormControl();
    this. rating = new FormControl();
    this.upsertMovieForm = new FormGroup({
      title: this.title,
      releaseYear: this.releaseYear,
      description: this.description,
      genreId: this.genreId,
      rating: this.rating
      // actorIds: this.actorIds
    });
  }

  saveEvent(formValues: any){
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
        console.log(data);
        console.log(this.genres);
        console.log(this.genreDropdownOptions);
      });
  }

}
