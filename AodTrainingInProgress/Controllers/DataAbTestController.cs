using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("data_abtest_api")]
    public class DataAbTestController : Controller
    {
        [Route("config/experiment/list")]
        public IActionResult List()
        {
            return Ok(new Dictionary<string, object?>
            {
                { "retcode", 0 },
                { "success", true },
                { "message", string.Empty },
                { "data", Array.Empty<object>() }
            });
        }
    }
}
