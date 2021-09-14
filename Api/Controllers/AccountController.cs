using System;
using System.Collections;
using System.Net;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        public class RequestContant : AppUser
        {
            public string Password { get; set; }
        }
        public class Users
        {
            public string DisplayName { get; set; }
            public string UserName { get; set; }
            public string Email { get; set; }
        }

        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly DataContext _context;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(DataContext context, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;

        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Users>> Register(RequestContant request)
        {

            if (await _context.Users.AnyAsync(x => x.Email == request.Email))
                return BadRequest("Email already exist");

            if (await _context.Users.AnyAsync(x => x.UserName == request.UserName))
                return BadRequest("Username already exist");

            var user = new AppUser
            {
                DisplayName = request.DisplayName,
                Email = request.Email,
                UserName = request.UserName
            };



            var result = await _userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                return new Users
                {
                    DisplayName = user.DisplayName,
                    UserName = user.UserName,
                    Email = user.Email
                };
            }

            foreach (var error in result.Errors)
            {
                throw new Exception(error.Description);
            }
            throw new Exception("Problem While creating new user");
        }

        [AllowAnonymous]
        [HttpPost("logout")]
        public async Task<ActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            return Ok();

        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(RequestContant request)
        {
            var result = await _signInManager.PasswordSignInAsync(request.UserName, request.Password, false, false);

            if (result.Succeeded)
            {
                return Ok();
            }


            throw new Exception("Invalid Login Attempt");
        }


        [AllowAnonymous]
        [HttpPost("createRole")]
        public async Task<ActionResult<Role>> CreateRole(IdentityRole identityRole)
        {

            if (await _context.Roles.AnyAsync(x => x.Name == identityRole.Name))
                return BadRequest("Role name already exist");

            var role = new IdentityRole
            {
                Name = identityRole.Name
            };

            var result = await _roleManager.CreateAsync(role);

            if (result.Succeeded)
            {
                return new Role
                {
                    RoleName = role.Name
                };
            }


            foreach (var error in result.Errors)
            {
                throw new Exception(error.Description);
            }
            throw new Exception("Error while creating Role");

        }

        [AllowAnonymous]
        [HttpGet("roles")]
        public ActionResult GetRoles()
        {
            var roles =  _roleManager.Roles;

            foreach(var role in roles)
            {
                var result =  new Role
                {
                    RoleName = role.Name
                };

                return Ok(roles);
            }

            throw new Exception();


        }

        [AllowAnonymous]
        [HttpPost("roles")]
        public async Task<ActionResult<IdentityRole>> AddUserToRole( string roleName)
        {
            var role = await _roleManager.FindByIdAsync(roleName);

            var result = new IdentityRole 
            {
                Name = role.Name
            };

            return result;

            // if(role == null)
            //     return NotFound("Can't find role");

            // var user = await _userManager.FindByNameAsync(userName);

            // if(user == null)
            //     return NotFound("Can't find user");

            // if(await _userManager.IsInRoleAsync(user, role.Name))
            // {
            //     return BadRequest($"{user.UserName} already in the role {role.Name} ");
            // }
            
            // var  result = await _userManager.AddToRoleAsync(user, roleName);

            // if(result.Succeeded)
            //     return Ok($"{user.UserName} is added to the role {role.Name}");

            // throw new Exception();


            
        }
    }
}