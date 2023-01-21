using System.Collections.Generic;
using MovieLibrary.Models.Contracts.Models;

namespace MovieLibrary.Models.Contracts;

public class SearchMoviesResponse
{
    public int PageNumber { get; set; }

    public int PageSize { get; set; }

    public int TotalRecords { get; set; }
        
    public List<Movie> Movies { get; set; }
}