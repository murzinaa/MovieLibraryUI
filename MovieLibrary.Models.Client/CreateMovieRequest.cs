using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace MovieLibrary.Models.Client
{
    public class CreateMovieRequest
    {
        public readonly string Route = "/movie";

        [JsonProperty(Required = Required.Always)]
        public string Title { get; set; }

        public int ReleaseYear { get; set; }

        public string Description { get; set; }

        public int GenreId { get; set; }

        [Range(0, 100, ErrorMessage = "Rating should be from 0 to 100%.")]
        public int Rating { get; set; }

        public List<int> ActorIds { get; set; }
    }
}
