using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Reviews
{
    public class RDetails
    {
        public class RQuery : IRequest<Review>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<RQuery, Review>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Review> Handle(RQuery request, CancellationToken cancellationToken)
            {
                var review = await _context.Reviews.FindAsync(request.Id);

                

                return review;
            }
        }
    }
}