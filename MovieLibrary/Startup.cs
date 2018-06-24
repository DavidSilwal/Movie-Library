using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using MovieLibrary.Data;
using MovieLibrary.Data.Entities;
using Newtonsoft.Json;

namespace MovieLibrary
{
    public class Startup
    {
        private IHostingEnvironment _env;

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            _env = env;
        }

        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<SaveUser, IdentityRole>(config =>
            {
                config.Password.RequireUppercase = true;
                config.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<MovieContext>();

            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = Configuration["Token:Issuer"],
                        ValidAudience = Configuration["Token:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:Key"]))
                    };
                });
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<MovieContext>(options =>
                    options.UseSqlServer(Configuration["Data:MovieLibCN:ConnectionString"]));
            Mapper.Reset();
            services.AddAutoMapper();

            services.AddTransient<DatabaseSeeder>();
            services.AddScoped<IMovieRepository, MovieRepository>();
            services.AddMvc(cfg =>
                {
                    if (_env.IsProduction())
                    {
                        cfg.Filters.Add(new RequireHttpsAttribute());
                    }
                })
                .AddJsonOptions(o => o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {

                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }
            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseMvc(route =>
            {
                route.MapRoute("Default", "{controller}/{action}/{id?}", new { Controller = "Home", Action = "Index" });
            });

            //Do it only in development
            if (env.IsDevelopment())
            {
                //Need to grab the scope
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<DatabaseSeeder>();
                    seeder.Seed().Wait();
                }
            }
        }
    }
}
