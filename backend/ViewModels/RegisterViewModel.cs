using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace backend.Controllers.v1.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [MinLength(3, ErrorMessage = "username must have at least 3 characters")]
        public string Username { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "passwords must have at least 10 characters")]
        public string Password { get; set; }
    }
    
}