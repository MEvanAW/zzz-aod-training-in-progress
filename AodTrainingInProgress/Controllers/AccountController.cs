using AodTrainingInProgress.DTO.Account;
using AodTrainingInProgress.Infrastructure;
using AodTrainingInProgress.Services;
using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("account")]
    public class AccountController(SqliteConfig sqliteConfig, IUserService userService) : Controller
    {
        protected string _connectionString = sqliteConfig.ConnectionString;
        protected IUserService _userService = userService;

        [Route("ma-passport/token/verifyCookieToken")]
        public IActionResult VerifyCookieToken()
        {
            return Ok(new Dictionary<string, object?>{
                { "data", null},
                { "message", "Login status is invalid. Please log in again." },
                { "retcode", -100 }
            });
        }

        [Route("ma-passport/api/getSwitchStatus")]
        public IActionResult GetSwitchStatus()
        {
            var statusMap = new Dictionary<string, object>
            {
                { "enabled", true },
                { "disabled_versions", Array.Empty<object>() }
            };
            return Ok(new Dictionary<string, object?>{
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>{
                    { "switch_status_map", new Dictionary<string, object?>{
                        { "apple_login", statusMap },
                        { "google_login", statusMap },
                        { "facebook_login", statusMap },
                        { "twitter_login", statusMap },
                        { "third_party_bind_email", statusMap },
                        { "bind_thirdparty", statusMap },
                        { "marketing_authorization", statusMap },
                        { "non_exclusive_steam_login", statusMap },
                        { "psn_login", statusMap },
                        { "firebase_return_unmasked_email", statusMap },
                        { "pwd_login_tab", statusMap },
                        { "account_register_tab", statusMap },
                        { "bind_user_thirdparty_email", statusMap },
                        { "common_question_entry", statusMap },
                        { "password_reset_entry", statusMap },
                    }}
                }},
            });
        }

        [HttpPost]
        [Route("ma-passport/api/webLoginByPassword")]
        public async Task<IActionResult> WebLoginByPassword([FromBody] WebLoginByPasswordRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("account is requried.");
            }

            if (!_userService.AccountExist(request.Account))
            {
                await _userService.CreateUserAsync(request.Account);
            }

            return Ok(new Dictionary<string, object?>{
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>{
                    { "user_info", new Dictionary<string, object?>{
                        { "aid", "100000000" },
                        { "mid", "1kkkkk0mmm_hy" },
                        { "account", request.Account },
                        { "account_name", MaskAccount(request.Account) },
                        { "email", "dummy@domain.com" },
                        { "is_email_verify", 0 },
                        { "area_code", "**" },
                        { "mobile", string.Empty },
                        { "safe_area_code", string.Empty },
                        { "safe_mobile", string.Empty },
                        { "realname", string.Empty },
                        { "identity_code", string.Empty },
                        { "rebind_area_code", string.Empty },
                        { "rebind_mobile", string.Empty },
                        { "rebind_mobile_time", "315504000" },
                        { "links", Array.Empty<object>() },
                        { "country", "ID" },
                        { "password_time", "1658223705" },
                        { "is_adult", 0 },
                        { "unmasked_email", string.Empty },
                        { "unmasked_email_type", 0 },
                    }},
                    { "ext_user_info", new Dictionary<string, object?>{
                        { "guardian_email", string.Empty },
                        { "birth", "0" }
                    }},
                    { "reactivate_action_ticket", string.Empty }
                }},
            });
        }

        [Route("binding/api/getAllRegions")]
        public IActionResult GetAllRegions()
        {
            return Ok(new Dictionary<string, object?>{
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>{
                    { "list", new List<RegionDto>{
                        new() { Name = "Asia", Region = "prod_gf_jp" },
                        new() { Name = "America", Region = "prod_gf_us" },
                        new() { Name = "Europe", Region = "prod_gf_eu" },
                        new() { Name = "TW,HK,MO", Region = "prod_gf_sg" },
                    }}
                }},
            });
        }

        [Route("binding/api/getUserGameRolesByCookieToken")]
        public IActionResult GetUserGameRolesByCookieToken()
        {
            return Ok(new Dictionary<string, object?>{
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?>{
                    { "list", new List<UserGameRoleDto>{
                        new() { GameBiz = "nap_global", Region = "prod_gf_jp", GameUid = "1000000000", Nickname = "Phaethon", Level = 60, IsChosen = true, RegionName = "Asia", IsOfficial = true },
                        new() { GameBiz = "nap_global", Region = "prod_gf_us", GameUid = "1000000000", Nickname = "Phaethon", Level = 60, RegionName = "America", IsOfficial = true },
                        new() { GameBiz = "nap_global", Region = "prod_gf_eu", GameUid = "1000000000", Nickname = "Phaethon", Level = 60, RegionName = "Europe", IsOfficial = true },
                        new() { GameBiz = "nap_global", Region = "prod_gf_sg", GameUid = "1000000000", Nickname = "Phaethon", Level = 60, RegionName = "TW,HK,MO", IsOfficial = true },
                    }}
                }},
            });
        }

        protected static string MaskAccount(string account)
        {
            if (string.IsNullOrEmpty(account))
                return account;

            if (account.Length < 3)
                return account; // not enough characters to mask meaningfully

            char first = account[0];
            string lastTwo = account.Substring(account.Length - 2, 2);

            return $"{first}****{lastTwo}";
        }

    }
}
