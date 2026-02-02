using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("common")]
    public class CommonController : Controller
    {
        [Route("badge/v1/login/info")]
        public IActionResult Info()
        {
            return Ok(new Dictionary<string, object?>
            {
                { "data", null },
                { "message", "Not Logged In" },
                { "retcode", -100 }
            });
        }
    }
}
