namespace MovieLibrary.Models.Client
{
    public class GetSimilarMoviesRequest
    {
        public const string Route = "/movie/{MovieId}/similar";

        public int MovieId { get; set; }
    }
}
