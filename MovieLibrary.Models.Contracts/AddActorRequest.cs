namespace MovieLibrary.Models.Contracts;

public class AddActorRequest
{
    public string Name { get; set; }

    public string Surname { get; set; }

    public int Age { get; set; }
}