
//using backend.Models;

using backend.Database;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.v1
{
    [Route("api/v1/[controller]")]
    [Authorize]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductRepository productRepository,
                ILogger<ProductController> logger
        )
        {
            _logger = logger;
            _productRepository = productRepository;

        }

        [HttpGet("")]
        public IActionResult GetProducts()
        {

            _logger.LogInformation("CMDev: GetProducts");
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


        // Begin
        [HttpPut]
        public IActionResult EditProduct([FromForm] Product product, IFormFile? file)

        {
            try
            {
                var result = _productRepository.GetProduct((int)product.ProductId!);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }

                result.Name = product.Name;
                result.Price = product.Price;
                result.Stock = product.Stock;


                _productRepository.EditProduct(result, file);


                return Ok(result);
            }
            catch (Exception error)
            {

                return StatusCode(500, new { message = error });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _productRepository.GetProduct(id);
                if (product == null)
                {
                    return NotFound(new { message = "Product not found" });
                }
                _productRepository.DeleteProduct(product);
                return NoContent();
            }
            catch (Exception error)
            {

                return StatusCode(500, new { message = error });
            }
        }

        [AllowAnonymous]
        [HttpGet("images/{name}")]
        public IActionResult ProductImage(string name)
        {
            return File($"~/images/{name}", "image/jpg");
        }
        //End


        [HttpGet("search/name/")]
        public IActionResult SearchProduct([FromQuery] string keyword)
        {
            var products = _productRepository.SearchProduct(keyword);
            return Ok(products);
        }

    }
}