import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./movie-library/movie-library.module').then(x => x.MovieLibraryModule)
      }
    ]),
  ]
})
export class AppRoutingModule { }
