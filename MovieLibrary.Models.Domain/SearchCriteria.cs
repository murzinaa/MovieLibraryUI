using System.Collections.Generic;

namespace MovieLibrary.Models.Domain;

public class SearchCriteria
{
    public string Title { get; set; }

    public List<int> GenreIds { get; set; }

    public int? ReleaseYear { get; set; }

    public List<int> ActorIds { get; set; }
        
    public int PageNumber { get; set; }

    public int PageSize { get; set; }
}