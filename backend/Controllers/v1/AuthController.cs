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
    // [Route("api/v1/[controller]")]

    [ApiVersion("1.0")]
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
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
        public IActionResult Login([FromBody] LoginViewModel userViewModel)
        {
            try
            {
                // mapper tutorial - readme_mapper.md
                var user = _autoMapper.Map<User>(userViewModel);
                (User? result, string token) = _authRepository.Login(user);

                if (result == null)
                {
                    return Unauthorized(new { token = "", message = "username invalid" });
                }

                if (String.IsNullOrEmpty(token))
                {
                    return Unauthorized(new { token = "", message = "password invalid" });
                }

                return Ok(new { token = token, message = "login successfully" });
            }
            catch (Exception error)
            {

                return StatusCode(500, new { message = error });
            }
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterViewModel viewmodel)
        {
            var user = _autoMapper.Map<User>(viewmodel);
            _authRepository.Register(user);
            return Ok();
        }

    }
}