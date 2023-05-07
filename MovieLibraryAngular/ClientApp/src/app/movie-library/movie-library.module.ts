import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MovieLibraryDetailsComponent,
  MovieLibraryOverviewComponent,
  MovieLibraryUpsertComponent,
  MovieLibrarySearchComponent,
  ActorFormComponent,
  MovieFormComponent,
  MovieListComponent,
  SearchFormComponent
} from "./components";
import {MovieLibraryRoutingModule} from "./movie-library-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import {MaterialModule} from "../material.module";
import {MovieDetailsResolver} from "./resolvers/movie-details-resolver.service";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  providers: [
    MovieDetailsResolver
  ],
  declarations: [
    ActorFormComponent,
    MovieFormComponent,
    MovieLibraryDetailsComponent,
    MovieLibraryOverviewComponent,
    MovieLibraryUpsertComponent,
    MovieLibrarySearchComponent,
    MovieListComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MovieLibraryRoutingModule,
    NgxPaginationModule,
    MaterialModule,
    NgbAlertModule
  ],
})
export class MovieLibraryModule {
}
