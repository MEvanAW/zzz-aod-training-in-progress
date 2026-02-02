using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("account")]
    public class AccountController : Controller
    {
        [Route("ma-passport/token/verifyCookieToken")]
        public IActionResult VerifyCookieToken()
        {
            return Ok(new Dictionary<string, object?>{
                { "data", null},
                { "message", "Login status is invalid. Please log in again." },
                { "retcode", -100 }
            });
        }
    }
}
