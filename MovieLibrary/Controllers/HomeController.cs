using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieLibrary.Data;
using MovieLibrary.ViewModels;
using SQLitePCL;

namespace MovieLibrary.Controllers
{
    public class HomeController : Controller
    {
        private IMovieRepository _movieRepository;

        public HomeController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About App";
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us";
            return View();
        }
        [HttpPost]
        public IActionResult Contact(ContactUsViewModel model)
        {
            ViewBag.Title = "Contact Us";
            if (ModelState.IsValid)
            {
                //Proceed further
            }
            else
            {
                //Notify
            }
            return View();
        }

        public IActionResult Store()
        {
            var result = _movieRepository.GetAllMovies();
            return View(result);
        }

    }
}
