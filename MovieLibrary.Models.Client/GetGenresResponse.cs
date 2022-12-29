using System.Collections.Generic;
using MovieLibrary.Models.Client.Models;

namespace MovieLibrary.Models.Client
{
    public class GetGenresResponse
    {
        public List<Genre> Genres { get; set; }
    }
}