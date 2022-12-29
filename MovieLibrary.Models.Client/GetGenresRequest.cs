namespace MovieLibrary.Models.Client;

public class GetGenresRequest
{
    public const string Route = "/genres";

    public string GetRoute() => Route;
}