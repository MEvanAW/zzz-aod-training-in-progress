using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("h5")]
    public class H5Controller : Controller
    {
        [Route("upload")]
        public IActionResult Upload()
        {
            return Ok(new Dictionary<string, object?>
            {
                { "code", 0 },
                { "message", "OK" }
            });
        }
    }
}
