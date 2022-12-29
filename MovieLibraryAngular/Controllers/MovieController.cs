using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MovieLibrary.Infrastructure.Services;
using MovieLibrary.Models.Contracts.Models;
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
}