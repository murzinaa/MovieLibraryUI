using System.Collections.Generic;
using System.Threading.Tasks;
using MovieLibrary.Models.Client;
using MovieLibrary.Models.Client.Models;

namespace MovieLibrary.Infrastructure.Clients;

public interface IMovieLibraryClient
{
    public Task<int> CreateMovie(CreateMovieRequest request);

    public Task UpdateMovie(UpdateMovieRequest request);

    public Task DeleteMovie(DeleteMovieRequest request);

    public Task<GetMovieByIdResponse> GetMovieById(GetMovieByIdRequest request);

    public Task<GetAllMoviesResponse> GetAllMovies(GetAllMoviesRequest request);

    public Task<GetSimilarMoviesResponse> GetSimilarMovies(GetSimilarMoviesRequest request);

    public Task<GetGenresResponse> GetGenres(GetGenresRequest request);

    public Task<GetActorsResponse> GetActors(GetActorsRequest request);

}