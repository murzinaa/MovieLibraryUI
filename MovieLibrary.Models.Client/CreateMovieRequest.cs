using System.Collections.Generic;

namespace MovieLibrary.Models.Client
{
    public class CreateMovieRequest
    {
        public readonly string Route = "/movie";
        
        public string Title { get; set; }

        public int ReleaseYear { get; set; }

        public string Description { get; set; }

        public int GenreId { get; set; }
        
        public int Rating { get; set; }

        public List<int> ActorIds { get; set; }
    }
}
