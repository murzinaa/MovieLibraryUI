import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ActorFormComponent,
  MovieFormComponent,
  MovieLibraryDetailsComponent,
  MovieLibraryOverviewComponent,
  MovieLibraryUpsertComponent,
  MovieLibrarySearchComponent
} from "./components";
import {MovieLibraryRoutingModule} from "./movie-library-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import {MaterialModule} from "../material.module";
import {MovieDetailsResolver} from "./resolvers/movie-details-resolver.service";

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
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MovieLibraryRoutingModule,
    NgxPaginationModule,
    MaterialModule
  ],
})
export class MovieLibraryModule {
}
