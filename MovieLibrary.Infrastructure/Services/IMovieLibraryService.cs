using System.Collections.Generic;
using System.Threading.Tasks;
using MovieLibrary.Models.Domain;

namespace MovieLibrary.Infrastructure.Services;

public interface IMovieLibraryService
{
    public Task<GetAllMovies> GetAllMovies();
    
    public Task<Movie> GetMovieById(int id);

    public Task<List<Genre>> GetGenres();

    public Task<List<Actor>> GetActors();

    public Task<int> AddActor(Actor actor);

    public Task<int> CreateMovie(CreateMovie movie);

    public Task UpdateMovie(UpdateMovie movie);

    public Task DeleteMovie(int id);
}