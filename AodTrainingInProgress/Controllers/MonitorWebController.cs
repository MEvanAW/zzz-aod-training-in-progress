using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("monitor_web")]
    public class MonitorWebController : Controller
    {
        [Route("collect")]
        public IActionResult Collect()
        {
            return NoContent();
        }
    }
}
