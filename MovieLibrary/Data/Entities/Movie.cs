using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieLibrary.Data.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string DirectorName { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string ActorName { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
    }
}
