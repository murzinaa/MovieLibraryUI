using System.Collections.Generic;
using System.Threading.Tasks;
using MovieLibrary.Models.Domain;

namespace MovieLibrary.Infrastructure.Services;

public interface IMovieLibraryService
{
    Task<GetAllMovies> GetAllMovies();

    Task<Movie> GetMovieById(int id);

    Task<List<Genre>> GetGenres();
}