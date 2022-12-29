import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ClientService} from "../services/client.service";
import {Injectable} from "@angular/core";
import {MovieDetails} from "../models/movieDetails";
import {Observable} from "rxjs";

@Injectable()
export class MovieDetailsResolver implements Resolve<Observable<MovieDetails>> {
  constructor(private service: ClientService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<MovieDetails> {
    return this.service.getMovieById(route.params['id'])
  }
}
