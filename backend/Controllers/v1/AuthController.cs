using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace backend.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMapper _autoMapper;

        public AuthController(IMapper autoMapper)
        {
            _autoMapper = autoMapper;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginViewModel loginViewModel)
        {
            var user = _autoMapper.Map<User>(loginViewModel);
            return Ok(new {result = user});

            
        }

    }
}