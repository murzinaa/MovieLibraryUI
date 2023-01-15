import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {DropdownOption} from "../../models/dropdown";

@Component({
  selector: 'app-movie-form',
  templateUrl: 'movie-form.component.html',
  styleUrls: ['movie-form.component.css']
})

export class MovieFormComponent {

  @Input()
  public movieForm: FormGroup;

  @Input()
  public genreDropdownOptions: DropdownOption<number>[];
}
