using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using MovieLibrary.Infrastructure.Clients;
using MovieLibrary.Infrastructure.Services;
using MovieLibrary.Models.Client;
using MovieLibrary.Models.Domain;

namespace MovieLibrary.Application.Services;

public class MovieLibraryService : IMovieLibraryService
{
    private readonly IMovieLibraryClient _movieClient;
    private readonly IMapper _mapper;

    public MovieLibraryService(IMovieLibraryClient movieClient, IMapper mapper)
    {
        _movieClient = movieClient;
        _mapper = mapper;
    }

    public async Task<GetAllMovies> GetAllMovies()
    {
        var movies = await _movieClient.GetAllMovies(new GetAllMoviesRequest());
        return _mapper.Map<GetAllMovies>(movies);
    }

    public async Task<Movie> GetMovieById(int id)
    {
        var request = new GetMovieByIdRequest
        {
            MovieId = id
        };
        
        var movie = await _movieClient.GetMovieById(request);
        return _mapper.Map<Movie>(movie.Movie);
    }

    public async Task<List<Genre>> GetGenres()
    {
        var genres = await _movieClient.GetGenres(new GetGenresRequest());
        return _mapper.Map<List<Genre>>(genres.Genres);
    }
}