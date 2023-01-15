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

    public async Task<GetAllMovies> GetAllMovies(int pageNumber, int pageSize)
    {
        var request = new GetAllMoviesRequest
        {
            PageNumber = pageNumber,
            PageSize = pageSize
        };
        var movies = await _movieClient.GetAllMovies(request);
        
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

    public async Task<List<Actor>> GetActors()
    {

        var actors = await _movieClient.GetActors(new GetActorsRequest());
        return _mapper.Map<List<Actor>>(actors.Actors);
    }

    public async Task<int> AddActor(Actor actor)
    { 
        var request = _mapper.Map<AddActorRequest>(actor);
        var response = await _movieClient.AddActor(request);
        return response.Id;
    }

    public async Task<int> CreateMovie(CreateMovie movie)
    {
        var request = _mapper.Map<CreateMovieRequest>(movie);
        return await _movieClient.CreateMovie(request);
    }

    public async Task UpdateMovie(UpdateMovie movie)
    {
        var request = _mapper.Map<UpdateMovieRequest>(movie);
        await _movieClient.UpdateMovie(request);
    }

    public async Task DeleteMovie(int id)
    {
        var request = new DeleteMovieRequest
        {
            MovieId = id
        };
        await _movieClient.DeleteMovie(request);
    }
}