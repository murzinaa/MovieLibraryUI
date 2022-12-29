import {Component} from "@angular/core";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-movie-search',
  templateUrl: 'movie-library-search.component.html',
  providers: [ClientService]
})

export class MovieLibrarySearchComponent{

}
