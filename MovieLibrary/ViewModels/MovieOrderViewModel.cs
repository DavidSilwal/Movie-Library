using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MovieLibrary.ViewModels
{
    public class MovieOrderViewModel
    {
        public int Id { get; set; }
        public DateTime OrderDateTime { get; set; }
        [Required]
        [MinLength(5)]
        public string OrderNumber { get; set; }

        public ICollection<MovieItemsViewModel> Items { get; set; }
        
    }
}
