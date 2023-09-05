using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace backend.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public AuthController()
        {
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User userViewModel)
        {
            return Ok(new {result = userViewModel});
        }

    }
}