using AodTrainingInProgress.DTO;
using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("account")]
    public class AccountController : Controller
    {
        protected ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }

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

        [Route("ma-passport/api/webLoginByPassword")]
        public IActionResult WebLoginByPassword([FromBody] WebLoginByPasswordRequest request)
        {
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

        private static string MaskAccount(string account)
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
