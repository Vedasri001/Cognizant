using Microsoft.AspNetCore.Mvc;

namespace WebAPI_Handson_1.Controllers;

// Exercise 1: Demonstrate a simple Web API with Read/Write actions and all HTTP action verbs
[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
    private static readonly List<string> Values = new() { "value1", "value2" };

    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
        return Ok(Values); // 200 OK
    }

    // GET api/values/1
    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
        if (id < 0 || id >= Values.Count)
            return BadRequest("Invalid id"); // 400 BadRequest

        return Ok(Values[id]);
    }

    // POST api/values
    [HttpPost]
    public ActionResult Post([FromBody] string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return BadRequest("Value cannot be empty");

        Values.Add(value);
        return Ok(); // 200 OK (could also be 201 Created)
    }

    // PUT api/values/1
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] string value)
    {
        if (id < 0 || id >= Values.Count)
            return BadRequest("Invalid id");

        Values[id] = value;
        return Ok();
    }

    // DELETE api/values/1
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        if (id < 0 || id >= Values.Count)
            return BadRequest("Invalid id");

        Values.RemoveAt(id);
        return Ok();
    }
}
