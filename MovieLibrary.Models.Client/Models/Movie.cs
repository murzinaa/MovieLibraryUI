﻿using System.Collections.Generic;

namespace MovieLibrary.Models.Client.Models
{
    public class Movie
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int ReleaseYear { get; set; }

        public string Description { get; set; }

        public int GenreId { get; set; }

        public string ImageUrl { get; set; }

        public List<Comment> Comments { get; set; }

        public List<Actor> Actors { get; set; }
    }
}
