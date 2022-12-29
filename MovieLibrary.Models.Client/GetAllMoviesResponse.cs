using System.Collections.Generic;
using MovieLibrary.Models.Client.Models;

namespace MovieLibrary.Models.Client
{
    public class GetAllMoviesResponse
    {
        public List<Movie> Movies { get; set; }
    }
}
