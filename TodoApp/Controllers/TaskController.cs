using Microsoft.AspNetCore.Mvc;
using TodoApp.Model;

namespace TodoApp.Controllers;

[Route("api/[Controller]")]
[ApiController]
public class TaskController : ControllerBase
{
    private readonly TodoListDbContext _dbContext;

    public TaskController(TodoListDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    [Route("List")]
    public IActionResult List()
    {
        var list = _dbContext.Tasks.ToList();
        return StatusCode(StatusCodes.Status200OK, list);
    }
}
