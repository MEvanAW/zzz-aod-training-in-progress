using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    public class MonitorWebController : Controller
    {
        [Route("monitor_web/collect")]
        public IActionResult Info()
        {
            return NoContent();
        }
    }
}
