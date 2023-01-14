using System.ComponentModel.DataAnnotations;

namespace MovieLibrary.Models.Client
{
    public class GetMovieByIdRequest
    {
        [Required]
        public int MovieId { get; set; }

        public string GetRoute()
        {
            return $"/movie/{MovieId}";
        }
    }
}
