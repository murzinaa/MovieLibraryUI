using Microsoft.AspNetCore.Mvc;
using MovieLibrary.Infrastructure.Clients;
using MovieLibrary.Models.Client;

namespace MovieLibraryAngular.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;
    private readonly IMovieLibraryClient _client;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IMovieLibraryClient client)
    {
        _logger = logger;
        _client = client;
    }

    [HttpGet]
    public async Task<IEnumerable<WeatherForecast>> Get()
    {
        var request = new GetMovieByIdRequest()
        {
            MovieId = 1,
        };
        var result = await _client.GetMovieById(request);
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("movie123/{id}")]
    public async Task<GetMovieByIdResponse> GetMovieById(int id)
    {
        var request = new GetMovieByIdRequest()
        {
            MovieId = id,
        };

        var result = await _client.GetMovieById(request);
        return result;
    }

    [HttpGet("movie123")]
    public async Task<GetAllMoviesResponse> GetMovies()
    {
        var res = await _client.GetAllMovies(new GetAllMoviesRequest());
        return res;
    }
}

