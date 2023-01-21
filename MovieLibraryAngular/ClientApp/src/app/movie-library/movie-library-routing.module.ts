import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {
  MovieLibraryOverviewComponent,
  MovieLibraryUpsertComponent,
  MovieLibraryDetailsComponent,
  MovieLibrarySearchComponent
} from './components'
import {MovieDetailsResolver} from "./resolvers/movie-details-resolver.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieLibraryOverviewComponent,
        pathMatch: 'full'
      },
      {
        path: 'movie',
        component: MovieLibraryOverviewComponent
      },
      {
        path: 'movie/search',
        component: MovieLibrarySearchComponent
      },
      {
        path: 'movie/upsert',
        component: MovieLibraryUpsertComponent
      },
      {
        path: 'movie/upsert/:id',
        component: MovieLibraryUpsertComponent,
        resolve: {
          movie: MovieDetailsResolver
        }
      },
      {
        path: 'movie/:id',
        component: MovieLibraryDetailsComponent,
        resolve: {
          movie: MovieDetailsResolver
        }
      }
    ])
  ]
})
export class MovieLibraryRoutingModule {
}
