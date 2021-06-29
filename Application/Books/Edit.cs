using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Books
{
    public class Edit
    {
         public class COmmand : IRequest
                {
                    public Guid Id { get; set; }
                    public string Title { get; set; }
                    public string Author { get; set; }
                    public string Description { get; set; }
                    public DateTime ? PublicationDate { get; set; }
                    public string Language { get; set; }
                    public string Category { get; set; }
                    public int ? Pages { get; set; }    
                }
        
                public class Handler : IRequestHandler<COmmand>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
        
                    }
        
                    public async Task<Unit> Handle(COmmand request, CancellationToken cancellationToken)
                    {
                        //Handler logic

                        var book = await _context.Books.FindAsync(request.Id);

                        if(book == null) 
                            throw new Exception("Requested Book is not available");

                        book.Title = request.Title ?? book.Title; 
                        book.Author = request.Author ?? book.Author;
                        book.Description = request.Description ?? book.Description;
                        book.PublicationDate = request.PublicationDate ?? book.PublicationDate;
                        book.Language = request.Language ?? book.Language;
                        book.Category = request.Category ?? book.Category;
                        book.Pages = request.Pages ?? book.Pages;
                        



                        var sucess = await _context.SaveChangesAsync() > 0;
        
                        if (sucess) return Unit.Value;
        
                        throw new Exception("Proplem Occured while editing book");
                    }
                }
    }
}