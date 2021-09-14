using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Reviews;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class ReviewController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Review>>> GetAllReviews(){
            return await Mediator.Send(new RList.RQuery());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetbyId(int id)
        {
            return await Mediator.Send(new RDetails.RQuery{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(RCreate.RCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            // command.Id = id;
            return await Mediator.Send(new RDelete.RCommand{Id = id});

           
        }
    }
}