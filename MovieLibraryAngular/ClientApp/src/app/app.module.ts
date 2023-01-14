import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import {
  MovieLibraryOverviewComponent
} from "./movie-library/components/movie-library-overview/movie-library-overview.component";
import {
  MovieLibraryDetailsComponent
} from "./movie-library/components/movie-library-details/movie-library-details.component";
import {
  MovieLibrarySearchComponent
} from "./movie-library/components/movie-library-search/movie-library-search.component";
import {
  MovieLibraryUpsertComponent
} from "./movie-library/components/movie-library-upsert/movie-library-upsert.component";
import {MovieDetailsResolver} from "./movie-library/resolvers/movie-details-resolver.service";
import {AddActorComponent} from "./movie-library/components/movie-library-upsert/add-actor/add-actor.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MovieLibraryOverviewComponent,
    MovieLibraryDetailsComponent,
    MovieLibrarySearchComponent,
    MovieLibraryUpsertComponent,
    AddActorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MovieLibraryOverviewComponent, pathMatch: 'full'},
      {path: 'movie', component: MovieLibraryOverviewComponent},
      {path: 'movie/upsert', component: MovieLibraryUpsertComponent},
      {path: 'movie/upsert/:id', component: MovieLibraryUpsertComponent, resolve: {movie: MovieDetailsResolver}},
      {path: 'movie/:id', component: MovieLibraryDetailsComponent, resolve: {movie: MovieDetailsResolver}}
    ]),
    ReactiveFormsModule
  ],
  providers: [MovieDetailsResolver],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

