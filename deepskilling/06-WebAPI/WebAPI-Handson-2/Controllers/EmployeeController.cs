using Microsoft.AspNetCore.Mvc;

namespace WebAPI_Handson_2.Controllers;

// Exercise 2: Route attribute + ActionName so 2 methods can share the same verb,
// and a friendly controller-level route (renamed from Employee -> Emp, per the lab)
[ApiController]
[Route("api/emp")]
public class EmployeeController : ControllerBase
{
    private static readonly List<string> Employees = new() { "Alice", "Bob", "Carol" };

    [HttpGet(Name = "GetAllEmployees")]
    public ActionResult<IEnumerable<string>> Get()
    {
        return Ok(Employees);
    }

    // Two GET methods sharing the same verb, disambiguated with ActionName
    [HttpGet("count")]
    [ActionName("GetEmployeeCount")]
    public ActionResult<int> GetCount()
    {
        return Ok(Employees.Count);
    }
}
