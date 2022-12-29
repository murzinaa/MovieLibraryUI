using System.Collections.Generic;

namespace MovieLibrary.Models.Domain;

public class GetAllMovies
{
    public List<Movie> Movies { get; set; }
}