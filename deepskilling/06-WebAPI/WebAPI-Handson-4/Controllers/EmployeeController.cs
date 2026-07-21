using Microsoft.AspNetCore.Mvc;
using WebAPI_Handson_4.Models;

namespace WebAPI_Handson_4.Controllers;

// Exercise 4: Create, Update, Delete operations with validation
[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    // Hardcoded data, per the lab instructions
    private static readonly List<Employee> Employees = new()
    {
        new Employee { Id = 1, Name = "Alice", Salary = 75000 },
        new Employee { Id = 2, Name = "Bob", Salary = 65000 },
        new Employee { Id = 3, Name = "Carol", Salary = 80000 }
    };

    [HttpGet]
    public ActionResult<List<Employee>> Get() => Ok(Employees);

    [HttpPost]
    public ActionResult<Employee> Post([FromBody] Employee employee)
    {
        Employees.Add(employee);
        return Ok(employee);
    }

    // PUT api/employee/2
    [HttpPut("{id}")]
    public ActionResult<Employee> Put(int id, [FromBody] Employee input)
    {
        if (id <= 0)
            return BadRequest("Invalid employee id");

        var existing = Employees.FirstOrDefault(e => e.Id == id);
        if (existing == null)
            return BadRequest("Invalid employee id");

        existing.Name = input.Name;
        existing.Salary = input.Salary;

        return Ok(existing);
    }

    // DELETE api/employee/2
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        if (id <= 0)
            return BadRequest("Invalid employee id");

        var existing = Employees.FirstOrDefault(e => e.Id == id);
        if (existing == null)
            return BadRequest("Invalid employee id");

        Employees.Remove(existing);
        return Ok();
    }
}
