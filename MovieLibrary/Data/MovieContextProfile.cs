using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MovieLibrary.Data.Entities;
using MovieLibrary.ViewModels;

namespace MovieLibrary.Data
{
    public class MovieContextProfile : Profile
    {
       public MovieContextProfile()
        {
            CreateMap<MovieOrder, MovieOrderViewModel>().ReverseMap();
            CreateMap<MovieItem, MovieItemsViewModel>().ReverseMap();
        }
    }
}
