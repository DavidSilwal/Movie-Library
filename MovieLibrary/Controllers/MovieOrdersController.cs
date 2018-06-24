using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using MovieLibrary.Data;
using MovieLibrary.Data.Entities;
using MovieLibrary.ViewModels;

namespace MovieLibrary.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class MovieOrdersController : Controller
    {
        private IMovieRepository _movieRepository;
        private ILogger<MovieOrdersController> _logger;
        private IMapper _mapper;
        private UserManager<SaveUser> _userManager;

        public MovieOrdersController(
            IMovieRepository movieRepository, 
            ILogger<MovieOrdersController> logger,
            IMapper mapper,
            UserManager<SaveUser> userManager
           )
        {
            _logger = logger;
            _movieRepository = movieRepository;
            _mapper = mapper;
            _userManager = userManager;

        }

        [HttpGet]
        public IActionResult Get(bool IncludeDetails = true)
        {
            try
            {
                var user = User.Identity.Name;
                var results = _movieRepository.GetAllMovieOrdersByUserName(user,IncludeDetails);
                return Ok(_mapper.Map<IEnumerable<MovieOrder>, IEnumerable<MovieOrderViewModel>>(results));
            }
            catch (Exception ex)
            {
             _logger.LogError($"Failed to fetch movie orders: {ex}");
                return BadRequest("Failed to fetch movie orders");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _movieRepository.GetMovieById(User.Identity.Name, id);
                if (result != null)
                {
                    return Ok(_mapper.Map<MovieOrder, MovieOrderViewModel>(result));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to fetch movie orders: {ex}");
                return BadRequest("Failed to fetch movie orders");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]MovieOrderViewModel movieOrderVM)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var movieOrder = _mapper.Map<MovieOrderViewModel, MovieOrder>(movieOrderVM);


                    var loggedInUser = await _userManager.FindByNameAsync(User.Identity.Name);
                    movieOrder.User = loggedInUser;

                    _movieRepository.AddMovieOrder(movieOrder);
                    if (_movieRepository.Save())
                    {
                    
                    return Created($"/api/movieorders/{movieOrder.Id}", _mapper.Map<MovieOrder,MovieOrderViewModel>(movieOrder));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save record: {ex}");
            }
            return BadRequest("Failed to save record");
        }
    }
}
