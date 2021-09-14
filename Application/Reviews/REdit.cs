using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Books
{
    public class REdit
    {
         public class RCommand : IRequest
                {
                    public int Id { get; set; }
                    public Guid BookId {get; set;}
                    public string BookName { get; set; }
                    public int UserId { get; set; }
                    public string UserName { get; set; }
                    public string Content { get; set; }
                    public int? Stars { get; set; }  
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
                            throw new Exception("Requested review does not exist");

                        review.BookId =  review.BookId; 
                        review.BookName = review.BookName;
                        review.UserId =  review.UserId;
                        review.UserName = review.UserName;
                        review.Content = request.Content ?? review.Content;
                        review.Stars = request.Stars ?? review.Stars;
                        



                        var sucess = await _context.SaveChangesAsync() > 0;
        
                        if (sucess) return Unit.Value;
        
                        throw new Exception("Proplem Occured while editing review");
                    }
                }
    }
}