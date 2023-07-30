using Microsoft.AspNetCore.Mvc;
using AppModel = TodoApp.Model;

namespace TodoApp.Controllers;

[Route("api/[Controller]")]
[ApiController]
public class TaskController : ControllerBase
{
    private readonly AppModel.TodoListDbContext _dbContext;

    public TaskController(AppModel.TodoListDbContext dbContext)
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

    [HttpPost]
    [Route("Save")]
    public async Task<IActionResult> Save([FromBody] AppModel.Task request)
    {
        await _dbContext.Tasks.AddAsync(request);
        await _dbContext.SaveChangesAsync();

        return StatusCode(StatusCodes.Status200OK, "ok");
    }

    [HttpDelete]
    [Route("Remove/{id:int}")]
    public async Task<IActionResult> Remove(int id) {
        AppModel.Task? currentTask = _dbContext.Tasks.Where(t => t.Id == id).FirstOrDefault();
        if (currentTask == null) {
            return StatusCode(StatusCodes.Status404NotFound, "task not exists");
        }
        _dbContext.Tasks.Remove(currentTask);
        await _dbContext.SaveChangesAsync();

        return StatusCode(StatusCodes.Status200OK, "ok");
    }
}
