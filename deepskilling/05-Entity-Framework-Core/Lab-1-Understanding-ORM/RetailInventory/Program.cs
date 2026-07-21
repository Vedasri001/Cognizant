using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RetailInventory.Data;

var services = new ServiceCollection();

services.AddDbContext<RetailDbContext>(options =>
    options.UseSqlServer(
        "Server=(localdb)\\MSSQLLocalDB;Database=RetailInventoryDB;Trusted_Connection=True;TrustServerCertificate=True;"));

var provider = services.BuildServiceProvider();

using var scope = provider.CreateScope();

var context = scope.ServiceProvider.GetRequiredService<RetailDbContext>();

Console.WriteLine("All Products");

foreach (var p in context.Products)
{
    Console.WriteLine($"{p.Name} {p.Price}");
}

Console.WriteLine();

Console.WriteLine("Products Price > 5000");

var expensive = context.Products
                       .Where(p => p.Price > 5000)
                       .ToList();

foreach (var p in expensive)
{
    Console.WriteLine($"{p.Name} {p.Price}");
}

Console.WriteLine();

Console.WriteLine("Order By Price");

var ordered = context.Products
                     .OrderBy(p => p.Price)
                     .ToList();

foreach (var p in ordered)
{
    Console.WriteLine($"{p.Name} {p.Price}");
}

Console.WriteLine();

Console.WriteLine("First Product");

var first = context.Products.FirstOrDefault();

if(first!=null)
    Console.WriteLine(first.Name);

Console.WriteLine();

Console.WriteLine($"Total Products = {context.Products.Count()}");