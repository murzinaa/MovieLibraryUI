using System;
using System.Net.Http;
using System.Threading.Tasks;
using MovieLibrary.Application.Helpers;
using MovieLibrary.Infrastructure.Clients;
using MovieLibrary.Models.Client;

namespace MovieLibrary.Application.Clients;

public class MovieLibraryClient : IMovieLibraryClient
{
    private readonly HttpClient _client;
    // todo: add validation to response
    
    public MovieLibraryClient(HttpClient client)
    {
        _client = client;
    }
    
    public async Task<int> CreateMovie(CreateMovieRequest request)
    {
        var response = await _client.Call<CreateMovieRequest, CreateMovieResponse>(request, request.Route, HttpMethod.Post);
        return response.Id;
    }

    public async Task UpdateMovie(UpdateMovieRequest request)
    {
        await _client.Call(request, request.Route, HttpMethod.Put);
    }

    public Task DeleteMovie(DeleteMovieRequest request)
    {
        throw new NotImplementedException();
    }

    public async Task<GetMovieByIdResponse> GetMovieById(GetMovieByIdRequest request)
    {
        var response = await _client.Call<GetMovieByIdRequest, GetMovieByIdResponse>(request, request.GetRoute(), HttpMethod.Get);
        return response;
    }

    public async Task<GetAllMoviesResponse> GetAllMovies(GetAllMoviesRequest request)
    {
        var response = await _client.Call<GetAllMoviesRequest, GetAllMoviesResponse>(request, request.Route, HttpMethod.Get);
        return response;
    }

    public Task<GetSimilarMoviesResponse> GetSimilarMovies(GetSimilarMoviesRequest request)
    {
        throw new NotImplementedException();
    }

    public async Task<GetGenresResponse> GetGenres(GetGenresRequest request)
    {
        var response = await _client.Call<GetGenresRequest, GetGenresResponse>(request, request.Route, HttpMethod.Get);
        return response;
    }

    public async Task<GetActorsResponse> GetActors(GetActorsRequest request)
    {
        var response = await _client.Call<GetActorsRequest, GetActorsResponse>(request, request.Route, HttpMethod.Get);
        return response;
    }

    public async Task<AddActorResponse> AddActor(AddActorRequest request)
    {

        var response = await _client.Call<AddActorRequest, AddActorResponse>(request, request.Route, HttpMethod.Post);
        return response;

    }
}