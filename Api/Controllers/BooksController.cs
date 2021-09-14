using Microsoft.AspNetCore.Mvc;
using MediatR;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Books;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers
{

        [AllowAnonymous]

    
    public class BooksController : BaseController
    {


        [HttpGet]
        public async Task<ActionResult<List<Book>>> List()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Book>> Details(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id}); 
        }

        [HttpPost]

        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.COmmand command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            // command.Id = id;
            return await Mediator.Send(new Delete.Command{Id = id});
        }

    }
}