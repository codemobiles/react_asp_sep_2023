using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Database;
using Microsoft.AspNetCore.Mvc;
//using backend.Models;

namespace backend.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductController(DatabaseContext databaseContext)
        {
        }

        [HttpGet("")]
        public IActionResult GetProducts()
        {
            return Ok();
        }
    }
}