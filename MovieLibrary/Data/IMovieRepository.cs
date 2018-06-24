using System.Collections.Generic;
using MovieLibrary.Data.Entities;

namespace MovieLibrary.Data
{
    public interface IMovieRepository
    {
        IEnumerable<Movie> GetAllMovies();
        IEnumerable<Movie> GetAllMoviesByGenre(string Genre);
        IEnumerable<MovieOrder> GetAllMovieOrders(bool includeDetails);
        MovieOrder GetMovieById(string username, int id);
        void AddEntity(object entity);
        IEnumerable<MovieOrder> GetAllMovieOrdersByUserName(string user, bool includeDetails);
        void AddMovieOrder(MovieOrder movieOrder);
        bool Save();
    }
}