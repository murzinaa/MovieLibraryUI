import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DropdownOption} from "../../../models/dropdown";
import {ClientService} from "../../../services/client.service";
import {SearchCriteria} from "../../../models/search-criteria";

@Component({
  selector: 'app-search-form',
  templateUrl: 'search-form.component.html',
  styleUrls: ['search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  @Output()
  public searchMoviesEvent: EventEmitter<SearchCriteria> = new EventEmitter<SearchCriteria>();

  public searchForm: FormGroup;

  public genres: DropdownOption<number>[] = [];
  public actors: DropdownOption<number>[] = [];

  ngOnInit(): void {
    this.getGenres();
    this.getActors();
    this.searchForm = this.createSearchForm();
    this.searchForm.setValidators(this.atLeastOneFieldNotEmptyValidator());
  }

  constructor(private formBuilder: FormBuilder, private service: ClientService) {
  }

  public searchMovies(){
    const searchCriteria = this.getFormValues();
    this.searchMoviesEvent.emit(searchCriteria)
  }

  private createSearchForm() {
    return this.formBuilder.group({
      title: [null],
      releaseYear: [null],
      genreIds: [null],
      actorIds: [null]
    });
  }

  private getGenres(){
    this.service.getGenres().subscribe(data => {
      data.forEach(genre => {
        this.genres.push({value: genre.id, text: genre.value});
      });
    });
  }

  private getActors(){
    this.service.getActors().subscribe(data => {
      data.forEach(actor => {
        this.actors.push({value: actor.id, text: actor.name + ' ' + actor.surname});
      });
    });
  }

  private getFormValues(): SearchCriteria{
    const model = new SearchCriteria();
    const formValues = this.searchForm.value;

    model.title = formValues.title;
    model.releaseYear = formValues.releaseYear;
    model.genreIds = formValues.genreIds;
    model.actorIds = formValues.actorIds;

    return model;
  }

  private atLeastOneFieldNotEmptyValidator = () => {
    return (searchForm1: any) => {
      let controls = searchForm1.controls;
      if ( controls ) {
        let theOne = Object.keys(controls).find(key => controls[key].value!=='' && controls[key].value!== null);
        if ( !theOne ) {
          return {
            atLeastOneRequired : {
              text : 'At least one field should be selected'
            }
          }
        }
      }
      return null;
    };
  };
}
