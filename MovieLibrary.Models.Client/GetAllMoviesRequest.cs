namespace MovieLibrary.Models.Client
{
    public class GetAllMoviesRequest
    {
        public int PageNumber { get; set; } = 1;
        
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }
        
        private int _pageSize = 20;
        private const int MaxPageSize = 100;

        public string GetRoute() => $"/movie/all?PageNumber={PageNumber}&PageSize={PageSize}";
    }
}