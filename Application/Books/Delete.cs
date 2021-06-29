using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Books
{
    public class Delete
    {
         public class Command : IRequest
                {    
                    public Guid Id { get; set; }
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
                        //Handler logic

                        var book = await _context.Books.FindAsync(request.Id);

                        if(book == null)
                            throw new Exception("requested book is not available");

                        _context.Remove(book);


                        var sucess = await _context.SaveChangesAsync() > 0;
        
                        if (sucess) return Unit.Value;
        
                        throw new Exception("Proplem Occured while Deleting book");
                    }
                }
    }
}