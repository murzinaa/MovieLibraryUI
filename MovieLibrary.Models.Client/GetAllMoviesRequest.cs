namespace MovieLibrary.Models.Client
{
    public class GetAllMoviesRequest
    {
        public const string Route = "/movie/all";

        public string GetRoute() => Route;
    }
}
