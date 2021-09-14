using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Reviews
{
    public class RCreate
    {
        public class RCommand : IRequest
        {
            public int Id { get; set; }
            public Guid BookId {get; set;}
            public string BookName { get; set; }
            public int UserId { get; set; }
            public string UserName { get; set; }
            public string Content { get; set; }
            public int Stars { get; set; } = 0;
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
                var review = new Review 
                {
                    Id = request.Id,
                    BookId = request.BookId,
                    BookName = request.BookName,
                    UserId = request.UserId,
                    UserName = request.UserName,
                    Content = request.Content,
                    Stars = request.Stars
                };

                _context.Reviews.Add(review);
                var sucess = await _context.SaveChangesAsync() > 0;

                if (sucess) return Unit.Value;

                throw new Exception("Proplem Occured while saving new data");
            }
        }
    }
}