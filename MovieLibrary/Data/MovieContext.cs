using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MovieLibrary.Data.Entities;

namespace MovieLibrary.Data
{
    public class MovieContext : IdentityDbContext<SaveUser>
    {
        public MovieContext(DbContextOptions<MovieContext> optipns) : base(optipns)
        {

        }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieOrder> MovieOrders { get; set; }
        public DbSet<MovieItem> MovieItems { get; set; }

     }
}
