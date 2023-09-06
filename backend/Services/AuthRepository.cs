using System.Linq;
using backend.Database;
using backend.Models;
using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using backend.Installers;

namespace backend.Services
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DatabaseContext _context;
        

        public AuthRepository(DatabaseContext context)
        {        
            _context = context;
        }

        public (User?, string) Login(User user)
        {
            var result = _context.Users.SingleOrDefault(u => u.Username == user.Username);
            var token = String.Empty;
            if (result != null && VerifyPassword(result.Password!, user.Password!))
            {
                token = "1234"; //BuildToken(result);
            }

            return (result, token);
        }

        public void Register(User user)
        {
            user.Password = CreatePasswordHash(user.Password!);
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        private string CreatePasswordHash(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            return $"{Convert.ToBase64String(salt)}.{hashed}";
        }

        public bool VerifyPassword(string hash, string password)
        {
            var parts = hash.Split('.', 2);

            if (parts.Length != 2)
            {
                return false;
            }

            var salt = Convert.FromBase64String(parts[0]);
            var passwordHash = parts[1];

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return passwordHash == hashed;
        }

    }

}