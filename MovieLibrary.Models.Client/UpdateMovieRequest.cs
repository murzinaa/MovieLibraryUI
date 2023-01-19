﻿using System.Collections.Generic;

namespace MovieLibrary.Models.Client
{
    public class UpdateMovieRequest
    {
        public readonly string Route = "/movie";
        
        public int Id { get; set; }

        public string Title { get; set; }

        public int ReleaseYear { get; set; }

        public string Description { get; set; }

        public int GenreId { get; set; }
        
        public int Rating { get; set; }

        public string ImageUrl { get; set; }

        public List<int> ActorIds { get; set; }
    }
}
