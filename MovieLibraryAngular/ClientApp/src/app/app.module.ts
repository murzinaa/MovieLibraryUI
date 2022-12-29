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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MovieLibraryOverviewComponent,
    MovieLibraryDetailsComponent,
    MovieLibrarySearchComponent,
    MovieLibraryUpsertComponent
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
      {path: 'movie/:id', component: MovieLibraryDetailsComponent}
    ]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

