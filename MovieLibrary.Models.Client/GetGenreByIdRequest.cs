namespace MovieLibrary.Models.Client
{
    public class GetGenreByIdRequest
    {
        public int Id { get; set; }

        public string GetRoute() => $"/genre/{Id}";
    }
}