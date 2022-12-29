using System.Collections.Generic;
using MovieLibrary.Models.Contracts.Models;

namespace MovieLibrary.Models.Contracts
{
    public class GetAllMoviesResponse
    {
        public List<Movie> Movies { get; set; }
    }
}
