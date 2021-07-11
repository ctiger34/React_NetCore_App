﻿using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
    
        public DbSet<Value> Values { get; set; }
        public DbSet<Book> Books {get; set;}
        
        public DbSet<Comment> Comments {get; set;}

        
    }

}
