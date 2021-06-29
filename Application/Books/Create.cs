using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Books
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Author { get; set; }
            public string Description { get; set; }
            public DateTime PublicationDate { get; set; }
            public string Language { get; set; }
            public string Category { get; set; }
            public int Pages { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var book = new Book 
                {
                    Id = request.Id,
                    Title = request.Title,
                    Author = request.Author,
                    Description = request.Description,
                    PublicationDate = request.PublicationDate,
                    Language = request.Language,
                    Category = request.Category,
                    Pages = request.Pages
                };

                _context.Books.Add(book);
                var sucess = await _context.SaveChangesAsync() > 0;

                if (sucess) return Unit.Value;

                throw new Exception("Proplem Occured while saving new data");
            }
        }
    }
}