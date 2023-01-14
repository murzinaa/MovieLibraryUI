using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MovieLibrary.Infrastructure.Services;
using MovieLibrary.Models.Contracts;
using MovieLibrary.Models.Domain;
using Actor = MovieLibrary.Models.Contracts.Models.Actor;
using Genre = MovieLibrary.Models.Contracts.Models.Genre;
using Movie = MovieLibrary.Models.Contracts.Models.Movie;

namespace MovieLibraryAngular.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MovieController : ControllerBase
{
    private readonly IMovieLibraryService _movieService;
    private readonly IMapper _mapper;

    public MovieController(IMovieLibraryService movieService, IMapper mapper)
    {
        _movieService = movieService;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<List<Movie>> GetMovies()
    {
        var movies = await _movieService.GetAllMovies(); 
        return _mapper.Map<List<Movie>>(movies.Movies);
    }

    [HttpGet("{id}")]
    public async Task<Movie> GetMovieById(int id)
    {
        var movie = await _movieService.GetMovieById(id);
        return _mapper.Map<Movie>(movie);
    }

    [HttpGet("genres")]
    public async Task<List<Genre>> GetGenres()
    {
        var genres = await _movieService.GetGenres();
        return _mapper.Map<List<Genre>>(genres);
    }

    [HttpGet("actors")]
    public async Task<List<Actor>> GetActors()
    {
        var actors = await _movieService.GetActors();
        return _mapper.Map<List<Actor>>(actors);
    }

    [HttpPost("actor")]
    public async Task<int> AddActor(AddActorRequest request)
    {
        var actorRequest = _mapper.Map<MovieLibrary.Models.Domain.Actor>(request);
        return await _movieService.AddActor(actorRequest);
    }

    [HttpPut]
    public async Task UpdateMovie(UpdateMovieRequest request)
    {
        var updateMovieRequest = _mapper.Map<UpdateMovie>(request);
        await _movieService.UpdateMovie(updateMovieRequest);
    }

    [HttpPost]
    public async Task<int> CreateMovie(CreateMovieRequest request)
    {
        var movie = _mapper.Map<CreateMovie>(request);
        return await _movieService.CreateMovie(movie);
    }
}