namespace MovieLibrary.Models.Client
{
    public class DeleteMovieRequest
    {
        public int MovieId { get; set; }

        public string GetRoute() => $"/movie/{MovieId}";
    }
}
