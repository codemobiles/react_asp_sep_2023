using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimpleController : ControllerBase
    {
        public SimpleController()
        {
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<string>> Getstrings()
        {
            return new List<string> {"Angular", "Flutter", "ReactJS" };
        }

        [HttpGet("courses")]
        public ActionResult<IEnumerable<string>> GetCourses()
        {
            return new List<string> {"Flutter", "ReactJS", "1234" };
        }

        [HttpGet("method1")]
        public ActionResult<string> GetTModel()
        {
            return "method1 555";
        }

        [HttpGet("method2")]
        public IActionResult GetMethod2()
        {
            return Ok(new List<string> {"Method2", "Flutter", "ReactJS", "1234" }) ;
        }
        
        [HttpPost("login")]
        public IActionResult Login(string model)
        {
            return Ok("ok");
        }
        

      
    }
}