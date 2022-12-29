using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MovieLibrary.Models.Client
{
    public class GetMoviesByIdsRequest
    {
        public const string Route = "/movies";

        [Required]
        [MinLength(1, ErrorMessage = "MovieIds should not be empty")]
        public List<int> MovieIds { get; set; }
    }
}
