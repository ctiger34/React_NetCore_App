using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Comments
{
    public class Remove
    {
        public class Delete : IRequest
                {    
                    public int Id { get; set; }
                }
        
                public class Handler : IRequestHandler<Delete>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
        
                    }
        
                    public async Task<Unit> Handle(Delete request, CancellationToken cancellationToken)
                    {
                        //Handler logic

                        var data = await _context.Comments.FindAsync(request.Id);

                        if(data == null)
                            throw new Exception("requested book is not available");

                        _context.Remove(data);


                        var sucess = await _context.SaveChangesAsync() > 0;
        
                        if (sucess) return Unit.Value;
        
                        throw new Exception("Proplem Occured while Deleting Comment");
                    }
                }
 
    }
}