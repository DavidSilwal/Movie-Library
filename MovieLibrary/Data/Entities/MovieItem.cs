using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieLibrary.Data.Entities
{
    public class MovieItem
    {
        public int Id { get; set; }
        public Movie Movie { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public MovieOrder MovieOrder { get; set; }
    }
}
