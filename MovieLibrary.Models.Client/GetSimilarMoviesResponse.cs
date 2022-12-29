using System.Collections.Generic;

namespace MovieLibrary.Models.Client
{
    public class GetSimilarMoviesResponse
    {
        public List<Models.GetSimilarMovies.Movie> Movies { get; set; }
    }
}
