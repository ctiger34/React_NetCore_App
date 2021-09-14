using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Reviews
{
    public class RList
    {
        public class RQuery : IRequest<List<Review>> { }

        public class Handler : IRequestHandler<RQuery, List<Review>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Review>> Handle(RQuery request, CancellationToken cancellationToken)
            {
                var review = await _context.Reviews.ToListAsync();

                return review;
            }
        }

    }
}