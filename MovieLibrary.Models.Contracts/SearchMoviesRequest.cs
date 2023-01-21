using System.Collections.Generic;

namespace MovieLibrary.Models.Contracts;

public class SearchMoviesRequest
{
    public string Title { get; set; }

    public List<int> GenreIds { get; set; }

    public int? ReleaseYear { get; set; }

    public List<int> ActorIds { get; set; }
}