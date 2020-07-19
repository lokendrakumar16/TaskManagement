using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using taskAPI.Models;
using Task = taskAPI.Models.Task;

namespace taskAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private IActionResult ok;

        // get all tasks
        [HttpGet]
        [Route("gettask")]
        public IEnumerable<Models.Task> GetTask()
        {
            using (var context = new TaskManagementContext())
            {
                return context.Task.ToList();
            }
        }

        // add new task
        [HttpPost]
        [Route("addtask")]
        public IActionResult AddTask( [FromBody] Task task)
        {
            if(ModelState.IsValid)
            {
                using (var context = new TaskManagementContext())
                {
                    context.Task.Add(task);
                    context.SaveChanges();
                }
            }
            return StatusCode(200, "Task inserted.");
        }


        // Update task
        [HttpPost]
        [Route("updatetask")]
        public IActionResult UpdateTask([FromBody] Task task)
        {
            if (ModelState.IsValid)
            {
                using (var context = new TaskManagementContext())
                {
                    var tsk = context.Task.Where(t => t.Id == task.Id).FirstOrDefault<Task>();
                    if (tsk != null)
                    {
                        tsk.Description = task.Description;
                        tsk.ShortDescription = task.ShortDescription;
                        context.SaveChanges();
                    }
                }
            }
            return StatusCode(200, "Task updated.");
        }

        // delete task
        [HttpGet]
        [Route("deletetask/{id}")]
        public IActionResult DeleteTask(int id)
        {
            if (ModelState.IsValid)
            {
                using (var context = new TaskManagementContext())
                {
                    var tsk = context.Task.Where(t => t.Id == id).FirstOrDefault<Task>();
                    if (tsk != null)
                    {
                        context.Task.Remove(tsk);
                        context.SaveChanges();
                    }
                }
            }
            return StatusCode(200, "Task updated.");
        }
    }
}
