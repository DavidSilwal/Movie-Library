using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MovieLibrary.Data.Entities;

namespace MovieLibrary.Data
{
    public class MovieRepository : IMovieRepository
    {
        private MovieContext _context;

        public MovieRepository(MovieContext context)
        {
            _context = context;
        }

        public IEnumerable<Movie> GetAllMovies()
        {
            return _context
                   .Movies
                   .OrderByDescending(m => m.Price).ToList();
        }

        public IEnumerable<Movie> GetAllMoviesByGenre(string Genre)
        {
            return _context
                .Movies
                .OrderByDescending(m => m.Price)
                .Where(m => m.Genre == Genre)
                .ToList();
        }

        public IEnumerable<MovieOrder> GetAllMovieOrders(bool includeDetails)
        {
            if (includeDetails)
            {
                return _context
                    .MovieOrders
                    .Include(o => o.Items)
                    .ThenInclude(o => o.Movie)
                    .ToList();
            }
            else
            {
                return _context
                    .MovieOrders
                    .ToList();
            }
        }

        public MovieOrder GetMovieById(string username, int id)
        {
            return _context
                .MovieOrders
                .Include(o => o.Items)
                .ThenInclude(o => o.Movie)
                .FirstOrDefault(o => o.Id == id && o.User.UserName==username);
        }

        public void AddEntity(object entity)
        {
            _context.Add(entity);
        }

        public void AddMovieOrder(MovieOrder movieOrder)
        {
            //Mapping 
            foreach (var item in movieOrder.Items)
            {
                item.Movie = _context.Movies.Find(item.Movie.Id);
            }

           AddEntity(movieOrder);
        }

        public IEnumerable<MovieOrder> GetAllMovieOrdersByUserName(string user, bool includeDetails)
        {
            if (includeDetails)
            {
                return _context
                    .MovieOrders
                    .Where(o=>o.User.UserName==user)
                    .Include(o => o.Items)
                    .ThenInclude(o => o.Movie)
                    .ToList();
            }
            else
            {
                return _context
                    .MovieOrders
                    .Where(o => o.User.UserName == user)
                    .ToList();
            }
        }

      
        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
