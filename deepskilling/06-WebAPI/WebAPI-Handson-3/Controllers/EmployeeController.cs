using Microsoft.AspNetCore.Mvc;
using WebAPI_Handson_3.Filters;
using WebAPI_Handson_3.Models;

namespace WebAPI_Handson_3.Controllers;

// Exercise 3: EmployeeController with GetStandardEmployeeList, CustomAuthFilter, exception testing
[ApiController]
[Route("api/[controller]")]
[CustomAuthFilter] // every action on this controller now requires a Bearer token header
public class EmployeeController : ControllerBase
{
    private readonly List<Employee> _employees;

    public EmployeeController()
    {
        _employees = GetStandardEmployeeList();
    }

    private List<Employee> GetStandardEmployeeList()
    {
        return new List<Employee>
        {
            new Employee
            {
                Id = 1, Name = "Alice", Salary = 75000, Permanent = true,
                Department = new Department { Id = 1, Name = "Engineering" },
                Skills = new List<Skill> { new() { Id = 1, Name = "C#" }, new() { Id = 2, Name = "React" } },
                DateOfBirth = new DateTime(1992, 4, 12)
            },
            new Employee
            {
                Id = 2, Name = "Bob", Salary = 65000, Permanent = false,
                Department = new Department { Id = 2, Name = "QA" },
                Skills = new List<Skill> { new() { Id = 3, Name = "Selenium" } },
                DateOfBirth = new DateTime(1990, 8, 23)
            }
        };
    }

    // GET api/employee
    [HttpGet]
    [ProducesResponseType(typeof(List<Employee>), 200)]
    public ActionResult<List<Employee>> GetStandard()
    {
        return Ok(_employees);
    }

    // GET api/employee/throw - deliberately throws, to demonstrate CustomExceptionFilter
    [HttpGet("throw")]
    [ProducesResponseType(500)]
    public ActionResult GetWithException()
    {
        throw new InvalidOperationException("Simulated failure for exception filter demo");
    }

    // POST api/employee
    [HttpPost]
    public ActionResult<Employee> Post([FromBody] Employee employee)
    {
        _employees.Add(employee);
        return Ok(employee);
    }
}
