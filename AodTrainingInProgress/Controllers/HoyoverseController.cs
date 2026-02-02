using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    public class HoyoverseController : Controller
    {
        [Route("common/badge/v1/login/info")]
        public IActionResult Info()
        {
            return Ok(new Dictionary<string,object?>
            {
                { "data", null },
                { "message", string.Empty },
                { "retcode", -100 }
            });
        }

        [Route("device-fp/api/getExtList")]
        public IActionResult GetExtList()
        {
            return Ok(new Dictionary<string, object>
            {
                { "retcode", 0},
                { "message", "OK" },
                { "data", new Dictionary<string, object>
                    {
                        { "code" , 200 },
                        { "msg", "ok" },
                        { "ext_list", new string[]
                            {
                                "userAgent",
                                "browserScreenSize",
                                "maxTouchPoints",
                                "isTouchSupported",
                                "browserLanguage",
                                "browserPlat",
                                "browserTimeZone",
                                "webGlRender",
                                "webGlVendor",
                                "numOfPlugins",
                                "listOfPlugins",
                                "screenRatio",
                                "deviceMemory",
                                "hardwareConcurrency",
                                "cpuClass",
                                "ifNotTrack",
                                "ifAdBlock",
                                "hasLiedLanguage",
                                "hasLiedResolution",
                                "hasLiedOs",
                                "hasLiedBrowser",
                                "canvas",
                                "webDriver",
                                "colorDepth",
                                "pixelRatio",
                                "packageName",
                                "packageVersion",
                                "webgl"
                            }
                        },
                        { "pkg_list", Array.Empty<object>()},
                        {"pkg_str", "/vK5WTh5SS3SAj8Zm0qPWg==" }
                    }
                }
            });
        }

        [Route("device-fp/api/getFp")]
        public IActionResult GetFp()
        {
            return Ok(new Dictionary<string, object>
            {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object>
                    {
                        {"device_fp", "38d7f01375d90" },
                        { "code", 200 },
                        { "msg", "ok"}
                    }
                }
            });
        }

        [Route("account/ma-passport/token/verifyCookieToken")]
        public IActionResult VerifyCookieToken()
        {
            return Ok(new Dictionary<string, object?>{
                { "data", null},
                { "message", "Login status is invalid. Please log in again." },
                { "retcode", -100 }
            });
        }

        [Route("common/h5log/log/batch")]
        public IActionResult Batch()
        {
            return Ok(new Dictionary<string, object?>
            {
                { "retcode", 0 },
                { "message", "success" },
                { "data", null }
            });
        }

        [Route("api/11/envelope")]
        public IActionResult Envelope()
        {
            return new StatusCodeResult(200);
        }
    }
}
