
//using backend.Models;

using backend.Database;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        public ProductController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet("")]
        public IActionResult GetProducts()
        {
            var products = _databaseContext.Products.ToList();
            return Ok(products);
        }
    }
}