using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace backend.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public AuthController(AutoMapper autoMapper)
        {

        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginViewModel loginViewModel)
        {
            // var user = _mapper.Mapper<User>(loginViewModel);
            // return Ok(new {result = userViewModel});

            return Ok();
        }

    }
}