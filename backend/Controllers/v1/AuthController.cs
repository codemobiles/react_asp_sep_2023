using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using backend.Models;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using backend.Models;
using backend.Services;

namespace backend.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMapper _autoMapper;
        private readonly IAuthRepository _authRepository;

        public AuthController(IMapper autoMapper, IAuthRepository authRepository)
        {
            _authRepository = authRepository;
            _autoMapper = autoMapper;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginViewModel loginViewModel)
        {
            var user = _autoMapper.Map<User>(loginViewModel);
            return Ok(new {result = user});            
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] LoginViewModel viewmodel)
        {
            var user = _autoMapper.Map<User>(viewmodel);
            _authRepository.Register(user);
            return Ok();            
        }

    }
}