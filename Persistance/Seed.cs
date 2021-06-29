using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
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