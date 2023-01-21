using AutoMapper;

namespace MovieLibrary.Application.Mappers;

public class ClientToDomainProfile : Profile
{
    public ClientToDomainProfile()
    {
        CreateMap<MovieLibrary.Models.Client.Models.Movie, Models.Domain.Movie>();

        CreateMap<Models.Client.GetAllMoviesResponse, Models.Domain.GetAllMovies>();

        CreateMap<Models.Client.Models.Actor, Models.Domain.Actor>();

        CreateMap<Models.Client.Models.Comment, Models.Domain.Comment>();
        
        CreateMap<Models.Client.Models.Genre, Models.Domain.Genre>();
        
        CreateMap<Models.Client.SearchMoviesResponse, Models.Domain.GetAllMovies>();
    }   
}