using System.Threading.Tasks;
using MovieLibrary.Models.Client;

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

    public Task<AddActorResponse> AddActor(AddActorRequest request);

}