using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Comments
{
    public class Create
    {
         public class Post : IRequest
                { 

                    public int Id { get; set; }
                    public Guid BookId {get; set;}
                    public string UserName { get; set; }
                    public string Content { get; set; }
                    public DateTime Time { get; set; }
                }
        
                public class Handler : IRequestHandler<Post>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
        
                    }
        
                    public async Task<Unit> Handle(Post request, CancellationToken cancellationToken)
                    {
                        //Handler logic
                        var comment = new Comment {
                            Id = request.Id,
                            BookId = request.BookId,
                            UserName = request.UserName,
                            Content = request.Content,
                            Time = request.Time
                        };

                        _context.Comments.Add(comment);
                        
                        var sucess = await _context.SaveChangesAsync() > 0;
        
                        if (sucess) return Unit.Value;
        
                        throw new Exception("Proplem Occured while saving new data");
                    }
                }

        
    }
}