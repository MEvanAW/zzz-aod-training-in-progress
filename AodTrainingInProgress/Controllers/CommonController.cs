using AodTrainingInProgress.Infrastructure;
using AodTrainingInProgress.Models;
using AodTrainingInProgress.Services;
using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("common")]
    public class CommonController(SqliteConfig sqliteConfig, IUserService<UserV1> userService) : Controller
    {
        protected string _connectionString = sqliteConfig.ConnectionString;
        protected IUserService<UserV1> _userService = userService;

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
        public IActionResult Info([FromQuery] string account)
        {
            if (string.IsNullOrEmpty(account) || !_userService.AccountExist(account))
            {
                return Ok(new Dictionary<string, object?>
                {
                    { "data", null },
                    { "message", "Not Logged In" },
                    { "retcode", -100 }
                });
            }

            return Ok(new Dictionary<string, object?>
            {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>{
                    { "game", "nap" },
                    { "region", "prod_gf_jp" },
                    { "game_uid", "1000000000" },
                    { "game_biz", string.Empty },
                    { "level", 60 },
                    { "nickname", account },
                    { "region_name", "prod_gf_jp" },
                    { "type", 0 },
                    { "account_id", "100000000" },
                }},
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
