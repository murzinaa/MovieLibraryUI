﻿using MovieLibrary.Application.Clients;
using MovieLibrary.Application.Mappers;
using MovieLibrary.Application.Services;
using MovieLibrary.Infrastructure.Clients;
using MovieLibrary.Infrastructure.Services;
using MovieLibraryAngular.Mappers;

namespace MovieLibraryAngular;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllersWithViews();
        builder.Services.AddHttpClient<IMovieLibraryClient, MovieLibraryClient>((client, provider) =>
        {
            provider.BaseAddress = new Uri("https://localhost:7235/");
        });
        builder.Services.AddScoped<IMovieLibraryService, MovieLibraryService>();
        
        builder.Services.AddAutoMapper(new[]
        {
            typeof(DomainToContract).Assembly,
            typeof(ClientToDomainProfile).Assembly,
        });

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseMiddleware<ExceptionMiddleware>();
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
        /*app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");*/

        app.MapFallbackToFile("index.html");

        app.Run();
    }
}

