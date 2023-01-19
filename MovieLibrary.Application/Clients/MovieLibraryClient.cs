using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using MovieLibrary.Application.Helpers;
using MovieLibrary.Application.Helpers.Models;
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
        return response.Data.Id;
    }

    public async Task UpdateMovie(UpdateMovieRequest request)
    {
        await _client.Call(request, request.Route, HttpMethod.Put);
    }

    public async Task DeleteMovie(DeleteMovieRequest request)
    {
        await _client.Call(request, request.GetRoute(), HttpMethod.Delete);
    }

    public async Task<GetMovieByIdResponse> GetMovieById(GetMovieByIdRequest request)
    {
        var response = await _client.Call<GetMovieByIdRequest, GetMovieByIdResponse>(request, request.GetRoute(), HttpMethod.Get);
        ValidateResponse(response);
        return response.Data;
    }

    public async Task<GetAllMoviesResponse> GetAllMovies(GetAllMoviesRequest request)
    {
        var response = await _client.Call<GetAllMoviesRequest, GetAllMoviesResponse>(request, request.GetRoute(), HttpMethod.Get);
        return response.Data;
    }

    public Task<GetSimilarMoviesResponse> GetSimilarMovies(GetSimilarMoviesRequest request)
    {
        throw new NotImplementedException();
    }

    public async Task<GetGenresResponse> GetGenres(GetGenresRequest request)
    {
        var response = await _client.Call<GetGenresRequest, GetGenresResponse>(request, request.Route, HttpMethod.Get);
        return response.Data;
    }

    public async Task<GetActorsResponse> GetActors(GetActorsRequest request)
    {
        var response = await _client.Call<GetActorsRequest, GetActorsResponse>(request, request.Route, HttpMethod.Get);
        return response.Data;
    }

    public async Task<AddActorResponse> AddActor(AddActorRequest request)
    {

        var response = await _client.Call<AddActorRequest, AddActorResponse>(request, request.Route, HttpMethod.Post);
        return response.Data;

    }

    private void ValidateResponse(ResponseBase response)
    {
        if (response.StatusCode != HttpStatusCode.OK)
        {
            throw new ApiCallException(response.ErrorMessage, response.StatusCode);
        }
    }
}