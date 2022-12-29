import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
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
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
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
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
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

