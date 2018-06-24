using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using MovieLibrary.Data.Entities;
using Newtonsoft.Json;

namespace MovieLibrary.Data
{
    public class DatabaseSeeder
    {
        private MovieContext _context;
        private IHostingEnvironment _env;
        private UserManager<SaveUser> _userManager;

        public DatabaseSeeder(MovieContext context, IHostingEnvironment env, UserManager<SaveUser> userManager)
        {
            _context = context;
            _env = env;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _context.Database.EnsureCreated();
            var user = await _userManager.FindByEmailAsync("Chander@cazton.com");

            // Checking If user is not created
            if (user == null)
            {
                user = new SaveUser()
                {
                    FirstName = "Chander",
                    LastName = "Dhall",
                    Email = "Chander@Cazton.com",
                    UserName = "ChanderDhall"
                };

                var result = await _userManager.CreateAsync(user, "Password9!");

                if (result != IdentityResult.Success)
                {
                    throw new Exception("Unable to create user");
                }
            }
            if (!_context.Movies.Any())
            {
                // Insert new records
                var path = Path.Combine(_env.ContentRootPath, "Data/movies.json");
                var content = File.ReadAllText(path);
                var movies = JsonConvert.DeserializeObject<IEnumerable<Movie>>(content);
                _context.Movies.AddRange(movies);

                var movieOrder = new MovieOrder()
                {
                    OrderDateTime = DateTime.Now,
                    OrderNumber = "123",
                    User = user,
                    Items = new List<MovieItem>()
                    {
                        new MovieItem()
                        {
                            Movie = movies.Last(),
                            Quantity = 7,
                            Price = movies.Last().Price
                        }
                    }
                };
                _context.MovieOrders.Add(movieOrder);
                _context.SaveChanges();
            }
        }
    }
}
