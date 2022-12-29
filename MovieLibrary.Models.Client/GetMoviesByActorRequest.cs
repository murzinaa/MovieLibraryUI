namespace MovieLibrary.Models.Client
{
    public class GetMoviesByActorRequest
    {
        public const string Route = "/movie/actor/{ActorId}";

        public int ActorId { get; set; }
    }
}
