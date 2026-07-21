using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI_Handson_5.Controllers;

// Exercise 5: Endpoint protected by JWT bearer auth (requires the token from AuthController)
[ApiController]
[Route("api/[controller]")]
public class SecureController : ControllerBase
{
    [HttpGet("data")]
    [Authorize]
    public IActionResult GetData() => Ok("This endpoint is protected by JWT auth.");
}
