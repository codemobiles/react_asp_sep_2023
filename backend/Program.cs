using System.Reflection;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using backend.Database;
using backend.Installers;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.InstallServiceInAssembly(builder.Configuration);
// builder.Services.AddSingleton<IAuthRepository, AuthRepository>();

// Option 2# to Auto Add Services Repository (2 methods)
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory()); // Call this before calling builder.Host.ConfigureContainer..
builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
    builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
    .Where(t => t.Name.EndsWith("Repository")) // Suffix Naming of AuthRepository, ProductRepository
    .AsImplementedInterfaces();
});
// ----------------------------------------------------------------
// End to load services (repository)


// "aString".Lek();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// app.UseCors("AllowSpecificOrigins");
app.UseCors("AllowAllOrigins");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
