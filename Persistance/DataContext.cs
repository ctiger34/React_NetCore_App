using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
    
        public DbSet<Value> Values { get; set; }
        public DbSet<Book> Books {get; set;}
        
        public DbSet<Comment> Comments {get; set;}
        public DbSet<Review> Reviews {get; set;}

        
    }

}
