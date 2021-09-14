using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Reviews
{
    public class RDelete
    {
         public class RCommand : IRequest
                {    
                    public int Id { get; set; }
                }
        
                public class Handler : IRequestHandler<RCommand>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
        
                    }
        
                    public async Task<Unit> Handle(RCommand request, CancellationToken cancellationToken)
                    {
                        //Handler logic

                        var review = await _context.Reviews.FindAsync(request.Id);

                        if(review == null)
                            throw new Exception("requested review does not exist");

                        _context.Remove(review);


                        var sucess = await _context.SaveChangesAsync() > 0;
        
                        if (sucess) return Unit.Value;
        
                        throw new Exception("Proplem Occured while Deleting review");
                    }
                }
    }
}