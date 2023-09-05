using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        [HttpGet("login")]
        public IActionResult Login()
        {
            return Ok("Login");
        }

    }
}