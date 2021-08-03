using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Comments
{
    public class Details
    {
        public class Query : IRequest<Comment>
        {
            public int Id { get; set; }
        }
        
                public class Handler : IRequestHandler<Query, Comment>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
                    }
        
                    public async Task<Comment> Handle(Query request, CancellationToken cancellationToken)
                    {
                        //Handler logic goes here 

                        var comment = await _context.Comments.FindAsync(request.Id);    

                        return comment;
                    }
                }
    }
}