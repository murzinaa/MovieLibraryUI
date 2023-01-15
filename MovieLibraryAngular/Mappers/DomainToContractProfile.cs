using AutoMapper;

namespace MovieLibraryAngular.Mappers;

public class DomainToContract : Profile
{
    public DomainToContract()
    {
        CreateMap<MovieLibrary.Models.Domain.Movie, MovieLibrary.Models.Contracts.Models.Movie>();

        CreateMap<MovieLibrary.Models.Domain.GetAllMovies, MovieLibrary.Models.Contracts.GetAllMoviesResponse>();

        CreateMap<MovieLibrary.Models.Domain.Actor, MovieLibrary.Models.Contracts.Models.Actor>();

        CreateMap<MovieLibrary.Models.Domain.Comment, MovieLibrary.Models.Contracts.Models.Comment>();
        
        CreateMap<MovieLibrary.Models.Domain.Genre, MovieLibrary.Models.Contracts.Models.Genre>();

        CreateMap<MovieLibrary.Models.Domain.GetAllMovies, MovieLibrary.Models.Contracts.GetAllMoviesResponse>();
    }
}