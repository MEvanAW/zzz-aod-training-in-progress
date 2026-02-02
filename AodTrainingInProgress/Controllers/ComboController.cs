using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("combo")]
    public class ComboController : Controller
    {
        [Route("box/api/config/porte-fe-os/config")]
        public IActionResult Config()
        {
            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>
                    {
                        { "enableLegacyExemptions", "true" },
                        { "enableV2XLogin", "true" },
                        { "enableDomainRedirect", "true" },
                    }
                },
            });
        }
    }
}
