using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("common")]
    public class CommonController : Controller
    {
        [Route("badge/v1/login/account")]
        public IActionResult Account()
        {
            return Ok(new Dictionary<string, object?>
            {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>{
                    { "game", "nap" },
                    { "region", "prod_gf_jp" },
                    { "game_uid", "1000000000" },
                    { "game_biz", "nap_global" },
                    { "level", 60 },
                    { "nickname", "Phaethon" },
                    { "region_name", "Asia" },
                }},
            });
        }

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

        [Route("h5log/log/batch")]
        public IActionResult Batch()
        {
            return Ok(new Dictionary<string, object?>
            {
                { "retcode", 0 },
                { "message", "success" },
                { "data", null }
            });
        }
    }
}
