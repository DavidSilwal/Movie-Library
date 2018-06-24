using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace MovieLibrary.Data.Entities
{
    public class MovieOrder
    {
        public int Id { get; set; }
        public DateTime OrderDateTime { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<MovieItem> Items { get; set; }
        public SaveUser User { get; set; }
    }
}
