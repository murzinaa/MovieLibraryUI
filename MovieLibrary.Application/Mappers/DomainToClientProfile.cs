using AutoMapper;
using MovieLibrary.Models.Client;
using MovieLibrary.Models.Domain;

namespace MovieLibrary.Application.Mappers;

public class DomainToClientProfile : Profile
{
    public DomainToClientProfile()
    {
        CreateMap<Actor, AddActorRequest>();
        
        CreateMap<CreateMovie, CreateMovieRequest>();

        CreateMap<UpdateMovie, UpdateMovieRequest>();

        CreateMap<SearchCriteria, SearchMoviesRequest>();
    }
}