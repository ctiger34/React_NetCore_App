using System.Collections.Generic;
using System.Linq;
using Domain;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Persistance
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Warfaa",
                        UserName = "warfa",
                        Email = "warfa@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Faahiye",
                        UserName = "fahiye",
                        Email = "fahiye@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Geedi",
                        UserName = "gedi",
                        Email = "gedi@test.com"
                    }
                };

                foreach(var user in users)
                {
                   await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            
            if(!context.Books.Any())
            {
                var books = new List<Book>
                {
                    new Book 
                    {
                        Title= "A Promised Land",
                        Author="Obama, Barack",
                        Description ="Obama's biography by him",
                        PublicationDate= System.DateTime.Now.AddMonths(-5),
                        Language = "English",
                        Category="Biography",
                        Pages=768

                    },

                    new Book
                    {
                        Title= "Born A Crime: Stories from a South African Childhood",
                        Author="Noah, Trevor",
                        Description ="Noah's biography by him",
                        PublicationDate= System.DateTime.Now.AddMonths(-3),
                        Language = "English",
                        Category="Biography",
                        Pages=500
                    }
                };
                context.Books.AddRange(books);
                context.SaveChanges();
            }
        }
    }
}