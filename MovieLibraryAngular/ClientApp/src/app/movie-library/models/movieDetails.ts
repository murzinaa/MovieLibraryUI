import {Actor} from "./actor";

export class MovieDetails{
  public id: number;
  public title: string;
  public releaseYear: number;
  public description?: string;
  public genreId: number;
  public rating: number;
  public imageUrl?: number;
  public actors: Actor[];
}
