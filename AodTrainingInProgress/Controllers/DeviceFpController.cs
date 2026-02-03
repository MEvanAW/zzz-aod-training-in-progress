using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    [Route("device-fp")]
    public class DeviceFpController : Controller
    {

        [Route("api/getExtList")]
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

        [Route("api/getFp")]
        public IActionResult GetFp()
        {
            return Ok(new Dictionary<string, object>
            {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object>
                    {
                        {"device_fp", "38d7f48794a6f" },
                        { "code", 200 },
                        { "msg", "ok"}
                    }
                }
            });
        }
    }
}
