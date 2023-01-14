using AutoMapper;
using MovieLibrary.Models.Contracts;
using MovieLibrary.Models.Domain;

namespace MovieLibraryAngular.Mappers;

public class ContractToDomainProfile : Profile
{
    public ContractToDomainProfile()
    {
        CreateMap<AddActorRequest, Actor>();

        CreateMap<CreateMovieRequest, CreateMovie>();

        CreateMap<UpdateMovieRequest, UpdateMovie>();
    }
}