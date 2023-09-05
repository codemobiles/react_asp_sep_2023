// using AutoMapper;
// using backend.Models;
// using backend.Services;
// using backend.ViewModels;
// using Microsoft.AspNetCore.Mvc;


// namespace backend.Controller.v1
// {
//     [ApiVersion("1.0")]
//     [ApiController]
//     [Route("api/v{version:apiVersion}/[controller]")]
//     public class AuthController : ControllerBase
//     {
//         private readonly ILogger<AuthController> _logger;
//         private readonly IAuthRepository _authRepository;
//         private readonly ICounterService _counterService;
//         private readonly IMapper _mapper;
//         private readonly EventId _eventId = new EventId(name: "auth_log", id: 1);

//         public AuthController(
//             ILogger<AuthController> logger,
//             IAuthRepository authRepository,
//             ICounterService counterService,
//             IMapper mapper)
//         {
//             _logger = logger;
//             _authRepository = authRepository;
//             this._counterService = counterService;
//             _mapper = mapper;
//         }

//         /// <summary>
//         /// Creates a User.
//         /// </summary>
//         /// <remarks>
//         /// Sample request:
//         ///
//         ///     POST /register
//         ///     {
//         ///    	    "Username": "admin2",
//         ///	        "Password": "12341234"
//         ///     }
//         /// </remarks>
//         /// <param name="user"></param>
//         /// <returns>A newly created User</returns>
//         /// <response code="200">Returns the newly created user</response>
//         /// <response code="400">Model inValid</response>
//         /// <response code="500">Server-side Error</response>
//         [Produces("application/json")]
//         [ProducesResponseType(typeof(User), 200)]
//         [ProducesResponseType(StatusCodes.Status400BadRequest)]
//         [ProducesResponseType(500)]
//         [HttpPost("[action]")]
//         public IActionResult Register([FromBody] User user)
//         {
//             try
//             {
//                 _logger.LogDebug(_eventId, $"Registering username: {user.Username}");
//                 _authRepository.Register(user);
//                 return Ok(new { result = "ok", message = "register successfully" });
//             }
//             catch (Exception error)
//             {
//                 _logger.LogError($"Log Register: {error}");
//                 return Ok(new { result = "nok", message = "register failed" });
//             }
//         }


//         /// <summary>
//         /// Authenticate access user
//         /// </summary>
//         /// <remarks>
//         /// Sample request:
//         ///
//         ///    
//         ///     {
//         ///    	    "Username": "admin",
//         ///	        "Password": "12341234"
//         ///     }
//         /// </remarks>
//         [HttpPost("[action]")]
//         // [ApiExplorerSettings(GroupName = "v2")]
//         // [HttpPost("login"), MapToApiVersion("2.0")]
//         public IActionResult Login([FromBody] LoginViewModel userViewModel)
//         {
//             try
//             {
//                 // mapper tutorial - readme_mapper.md
//                 var user = _mapper.Map<User>(userViewModel);
//                 _logger.LogDebug(_eventId, $"Logging in username: {user.Username}");
//                 (User? result, string token) = _authRepository.Login(user);

//                 if (result == null)
//                 {
//                     return Unauthorized(new { token = "", message = "username invalid" });
//                 }

//                 if (String.IsNullOrEmpty(token))
//                 {
//                     return Unauthorized(new { token = "", message = "password invalid" });
//                 }

//                 return Ok(new { token = token, message = "login successfully" });
//             }
//             catch (Exception error)
//             {
//                 _logger.LogError($"Log Login: {error}");
//                 return StatusCode(500, new { message = error });
//             }
//         }


//     }
// }