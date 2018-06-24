using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieLibrary.Data.Entities;

namespace MovieLibrary.ViewModels
{
    public class MovieItemsViewModel
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal Price { get; set; }
        public string MovieMovieName { get; set; }
        public string MovieDirectorName { get; set; }
        public DateTime MovieReleaseDate { get; set; }
        public string MovieActorName { get; set; }
        public string MovieGenre { get; set; }
        public int MovieId { get; set; }
    }
}
