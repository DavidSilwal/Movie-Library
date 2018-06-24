using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MovieLibrary.Data;
using MovieLibrary.Data.Entities;
using MovieLibrary.ViewModels;

namespace MovieLibrary.Controllers
{
    [Route("/api/[Controller]/{orderid}/items")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class MovieItemsController : Controller
    {
        private IMovieRepository _movieRepository;
        private ILogger<MovieItemsController> _logger;
        private IMapper _mapper;
        public MovieItemsController(
        IMovieRepository movieRepository,
            ILogger<MovieItemsController> logger,
        IMapper mapper)
        {
            _logger = logger;
            _movieRepository = movieRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId)
        {
            var order = _movieRepository.GetMovieById(User.Identity.Name, orderId);
            if (order != null)
            {
                return Ok(_mapper.Map<IEnumerable<MovieItem>, IEnumerable<MovieItemsViewModel>>(order.Items));
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id)
        {
            var order = _movieRepository.GetMovieById(User.Identity.Name,orderId);
            if (order != null)
            {
                var item = order.Items.FirstOrDefault(m => m.Id == id);
                if (item != null)
                {
                    return Ok(_mapper.Map<IEnumerable<MovieItem>, IEnumerable<MovieItemsViewModel>>(order.Items));
                }
            }
            return NotFound();
        }
    }
}
