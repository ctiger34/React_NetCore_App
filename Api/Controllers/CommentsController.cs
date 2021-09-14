using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Comments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{

    [AllowAnonymous]
    public class CommentsController : BaseController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Comment>>> GetAllComments(){
            return await Mediator.Send(new List.Query());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Comment>> GetbyId(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Post command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            // command.Id = id;
            return await Mediator.Send(new Remove.Delete{Id = id});

           
        }   
    }
}