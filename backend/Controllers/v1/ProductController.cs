
//using backend.Models;

using backend.Database;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.v1
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;

        }

        [HttpGet("")]
        public IActionResult GetProducts()
        {
            var products = _productRepository.GetProducts();
            return Ok(products);
        }

        //   [HttpGet("{id}/{type}")]
        // public IActionResult GetProduct(string id, string type)
        // {
        //     var product = _productRepository.GetProduct(int.Parse(id));
        //     return Ok(new { product = product, type = type });
        // }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            try
            {
                var result = _productRepository.GetProduct(id);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }
                return Ok(result);
            }
            catch (Exception error)
            {
                return StatusCode(500, new { message = error });
            }
        }


        [HttpPost]
        public IActionResult AddProduct([FromForm] Product product, IFormFile file)
        {
            try
            {
                // var product = _mapper.Map<Products>(productViewModel);
                _productRepository.AddProduct(product, file);
                return Ok();
            }
            catch (Exception error)
            {
                return StatusCode(500, new { message = error });
            }
        }



    }
}