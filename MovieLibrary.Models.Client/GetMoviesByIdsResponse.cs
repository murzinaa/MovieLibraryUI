using System.Collections.Generic;
using MovieLibrary.Models.Client.Models;

namespace MovieLibrary.Models.Client
{
    public class GetMoviesByIdsResponse
    {
        public List<Movie> Movies { get; set; }
    }
}
