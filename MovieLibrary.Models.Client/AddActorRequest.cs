namespace MovieLibrary.Models.Client;

public class AddActorRequest
{
    public readonly string Route = "/actor";
    
    public string Name { get; set; }

    public string Surname { get; set; }
}