using AutoMapper;
using backend.Controllers.v1.ViewModels;
using backend.Models;
using backend.ViewModels;

public class AutoMapping : Profile
{
    public AutoMapping()
    {
        CreateMap<LoginViewModel, User>(); // map from UserViewModel to Users
        CreateMap<RegisterViewModel, User>(); // map from RegisterViewModel to Users
    }
}
