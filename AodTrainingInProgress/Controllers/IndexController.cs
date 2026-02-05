using AodTrainingInProgress.DTO.Index;
using AodTrainingInProgress.Infrastructure;
using AodTrainingInProgress.Models;
using AodTrainingInProgress.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace AodTrainingInProgress.Controllers
{
    public class IndexController(ILogger<IndexController> logger, SqliteConfig sqliteConfig, IUserService<UserV1> userService) : Controller
    {
        protected static readonly string _accountRequiredMessage = "account is required.";
        protected static readonly string _accountNotExistMessage = "account does not exist.";
        protected static readonly string _completedStatus = "Completed";
        protected string _connectionString = sqliteConfig.ConnectionString;
        protected static readonly string _inprogressStatus = "InProgress";
        protected ILogger<IndexController> _logger = logger;
        protected static readonly string _receivedStatus = "Received";
        protected IUserService<UserV1> _userService = userService;

        [Route("index")]
        public async Task<IActionResult> Index([FromQuery] string account)
        {
            if (string.IsNullOrEmpty(account))
            {
                return BadRequest(_accountRequiredMessage);
            }
            if (!_userService.AccountExist(account))
            {
                return BadRequest(_accountNotExistMessage);
            }

            var user = await _userService.ReadUserAsync(account);

            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "user_activity_info", user!.UserActivityInfoJson },
                    { "sign_pic_resp", new Dictionary<string, object?> {
                        { "sign_pics", new Dictionary<string, object?> {
                            { "402", "/static-resource-v2/2026/01/26/c237408990a207f589718de2a1602051_3721125691735862444.png" },
                            { "403", "/static-resource-v2/2026/01/26/dbac15841a78621e79d66469afb184c1_3096649005840529914.png" },
                            { "404", "/static-resource-v2/2026/01/26/4b54dc58aa016abc4298f7383befab5c_2244646300961124162.png" },
                            { "405", "/static-resource-v2/2026/01/26/7c892efe04d20570836b83963fb46121_2289415296809994291.png" }
                        }},
                        { "line_arts", new Dictionary<string, object?> {
                            { "402", "/static-resource-v2/2026/01/26/95f7e4e05adf114a6103620d3230dec1_2639819816073073965.png" },
                            { "403", "/static-resource-v2/2026/01/26/e7dc1bf4e5278c5d956f23f332c5acd0_1196527524428060292.png" },
                            { "404", "/static-resource-v2/2026/01/26/9c36bbffb0c0ccd9fb5e834512c47dcd_3992324175312587790.png" },
                            { "405", "/static-resource-v2/2026/01/26/78bc4d6f15effebccd8ce9011104964a_6681535379290711753.png" }
                        }},
                    }},
                    { "token", "wUlD1lMzV2E9NnbckHpvhA:1770112123" },
                    { "act_show_info", new Dictionary<string, object?> {
                        { "exist_unlock_stage", false },
                        { "unlock_week", 0 },
                        { "left_seconds", "0" },
                    }},
                }},
            });
        }

        [HttpPost]
        [Route("finish_occurrence")]
        public async Task<IActionResult> FinishOccurrence([FromBody] FinishOccurrenceRequest request)
        {
            if (string.IsNullOrEmpty(request.Account))
            {
                return BadRequest(_accountRequiredMessage);
            }
            if (!_userService.AccountExist(request.Account))
            {
                return BadRequest(_accountNotExistMessage);
            }

            var user = await _userService.ReadUserAsync(request.Account);

            var userActivityInfoJson = user!.UserActivityInfoJson;
            var occurrences = (userActivityInfoJson["occurrence_info"]?["occurrences"]?.AsArray()) ?? throw new InvalidOperationException("occurrences not found");
            foreach (var node in occurrences)
            {
                if ((int)node?["occurrence_id"]! == request.OccurrenceId)
                {
                    node!["status"] = _completedStatus;
                    break;
                }
            }

            var skillInfo = (userActivityInfoJson["skill_info"]?.AsObject()) ?? throw new InvalidOperationException("skill_info not found");
            var signInfo = (userActivityInfoJson["sign_info"]?.AsObject()) ?? throw new InvalidOperationException("sign_info not found");
            var signs = (signInfo["signs"]!.AsArray()) ?? throw new InvalidOperationException("signs not found");
            JsonObject? activityProgress;
            switch (request.OccurrenceId)
            {
                case 10102:
                    activityProgress = (userActivityInfoJson["activity_progress"]?.AsObject()) ?? throw new InvalidOperationException("activity_progress not found");
                    activityProgress["day"] = 1;
                    activityProgress["week"] = 2;
                    UnlockOccurrence(userActivityInfoJson, 10201);
                    skillInfo["skill_2_unlocked"] = true;
                    skillInfo["ability_c"] = (int)skillInfo["ability_c"]! + 1;
                    foreach (var node in signs)
                    {
                        if ((int)node?["sign_id"]! == 402)
                        {
                            node!["status"] = _inprogressStatus;
                            break;
                        }
                    }
                    break;
                case 10202:
                    activityProgress = (userActivityInfoJson["activity_progress"]?.AsObject()) ?? throw new InvalidOperationException("activity_progress not found");
                    activityProgress["day"] = 1;
                    activityProgress["week"] = 3;
                    UnlockOccurrence(userActivityInfoJson, 10301);
                    skillInfo["skill_3_unlocked"] = true;
                    skillInfo["ability_d"] = (int)skillInfo["ability_d"]! + 1;
                    foreach (var node in signs)
                    {
                        if ((int)node?["sign_id"]! == 403)
                        {
                            node!["status"] = _inprogressStatus;
                            break;
                        }
                    }
                    break;
                case 10302:
                    activityProgress = (userActivityInfoJson["activity_progress"]?.AsObject()) ?? throw new InvalidOperationException("activity_progress not found");
                    activityProgress["day"] = 1;
                    activityProgress["week"] = 4;
                    UnlockOccurrence(userActivityInfoJson, 10401);
                    skillInfo["skill_ultimate_unlocked"] = true;
                    foreach (var node in signs)
                    {
                        if ((int)node?["sign_id"]! == 404)
                        {
                            node!["status"] = _inprogressStatus;
                            break;
                        }
                    }
                    break;
                case 10402:
                    activityProgress = (userActivityInfoJson["activity_progress"]?.AsObject()) ?? throw new InvalidOperationException("activity_progress not found");
                    activityProgress["day"] = 1;
                    activityProgress["week"] = 5;
                    UnlockOccurrence(userActivityInfoJson, 10501);
                    foreach (var node in signs)
                    {
                        if ((int)node?["sign_id"]! == 405)
                        {
                            node!["status"] = _inprogressStatus;
                            break;
                        }
                    }
                    break;
                default:
                    break;
            }

            user.UserActivityInfo = userActivityInfoJson.ToJsonString();
            await _userService.UpdateUserAsync(request.Account, user);

            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", userActivityInfoJson },
            });
        }

        [HttpPost]
        [Route("finish_guide")]
        public async Task<IActionResult> FinishGuide([FromBody] FinishGuideRequest request)
        {
            if (string.IsNullOrEmpty(request.Account))
            {
                return BadRequest(_accountRequiredMessage);
            }
            if (!_userService.AccountExist(request.Account))
            {
                return BadRequest(_accountNotExistMessage);
            }

            var user = await _userService.ReadUserAsync(request.Account);

            var userActivityInfoJson = user!.UserActivityInfoJson;
            var guideInfo = (userActivityInfoJson["guide_info"]?.AsObject()) ?? throw new InvalidOperationException("guide_id not found");
            guideInfo["guide_id"] = request.GuideId;

            user.UserActivityInfo = userActivityInfoJson.ToJsonString();
            await _userService.UpdateUserAsync(request.Account, user);

            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", userActivityInfoJson },
            });
        }

        [HttpPost]
        [Route("finish_challenge")]
        public async Task<IActionResult> FinishChallenge([FromBody] FinishChallengeRequest request)
        {
            if (string.IsNullOrEmpty(request.Account))
            {
                return BadRequest(_accountRequiredMessage);
            }
            if (!_userService.AccountExist(request.Account))
            {
                return BadRequest(_accountNotExistMessage);
            }

            var user = await _userService.ReadUserAsync(request.Account);

            var userActivityInfoJson = user!.UserActivityInfoJson;
            var scoreInfo = (userActivityInfoJson["score_info"]?.AsObject()) ?? throw new InvalidOperationException("guide_id not found");
            scoreInfo["total_score"] = request.Score.ToString();
            if (request.Score > int.Parse((string) scoreInfo["history_max_score"]!))
            {
                scoreInfo["history_max_score"] = (string) scoreInfo["total_score"]!;
            }

            var skillInfo = (userActivityInfoJson["skill_info"]?.AsObject()) ?? throw new InvalidOperationException("skill_info not found");
            skillInfo["skill_1_unlocked"] = true;

            var activityProgress = (userActivityInfoJson["activity_progress"]?.AsObject()) ?? throw new InvalidOperationException("activity_progress not found");
            var canChallengeWeeks = activityProgress["can_challenge_weeks"] as JsonObject ?? [];
            int maxWeek = 0;
            foreach (var (key, _) in canChallengeWeeks)
            {
                if (int.TryParse(key, out var week))
                {
                    maxWeek = Math.Max(maxWeek, week);
                }
            }
            switch (maxWeek)
            {
                case 1:
                    if (request.Score >= 5000)
                    {
                        activityProgress["week_challenge_finished"] = canChallengeWeeks.DeepClone();
                        UnlockOccurrence(userActivityInfoJson, 10102);
                    }
                    break;
                case 2:
                    if (request.Score >= 15000)
                    {
                        activityProgress["week_challenge_finished"] = canChallengeWeeks.DeepClone();
                        UnlockOccurrence(userActivityInfoJson, 10202);
                    }
                    break;
                case 3:
                    if (request.Score >= 25000)
                    {
                        activityProgress["week_challenge_finished"] = canChallengeWeeks.DeepClone();
                        UnlockOccurrence(userActivityInfoJson, 10302);
                    }
                    break;
                case 4:
                    if (request.Score >= 35000)
                    {
                        activityProgress["week_challenge_finished"] = canChallengeWeeks.DeepClone();
                        UnlockOccurrence(userActivityInfoJson, 10402);
                    }
                    break;
                default:
                    throw new NotImplementedException("week challenge case has not been implemented.");
            }

            user.UserActivityInfo = userActivityInfoJson.ToJsonString();
            await _userService.UpdateUserAsync(request.Account, user);

            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "token", "NFRqBIJWGp3GHFG0LXqyVA:1770171101" },
                    { "user_activity_info", userActivityInfoJson },
                }},
            });
        }

        [HttpPost]
        [Route("complete_train_day")]
        public async Task<IActionResult> CompleteTrainDay([FromBody] CompleteTrainDayRequest request)
        {
            if (string.IsNullOrEmpty(request.Account))
            {
                return BadRequest(_accountRequiredMessage);
            }
            if (!_userService.AccountExist(request.Account))
            {
                return BadRequest(_accountNotExistMessage);
            }

            var user = await _userService.ReadUserAsync(request.Account);

            var userActivityInfoJson = user!.UserActivityInfoJson;

            var activityProgress = (userActivityInfoJson["activity_progress"]?.AsObject()) ?? throw new InvalidOperationException("activity_progress not found");
            int day = (int)activityProgress["day"]!;
            int week = (int)activityProgress["week"]!;
            if (day == 5)
            {
                var canChallengeWeeks = activityProgress["can_challenge_weeks"] as JsonObject ?? [];
                canChallengeWeeks[week.ToString()] = true;
                activityProgress["can_challenge_weeks"] = canChallengeWeeks;
            }
            else
            {
                activityProgress["day"] = ++day;
            }
            if (week == 1 && day == 3) UnlockOccurrence(userActivityInfoJson, 20101);
            else if (week == 2 && day == 3) UnlockOccurrence(userActivityInfoJson, 20201);
            else if (week == 3 && day == 3) UnlockOccurrence(userActivityInfoJson, 20301);
            else if (week == 4 && day == 3) UnlockOccurrence(userActivityInfoJson, 20401);

            var skillInfo = (userActivityInfoJson["skill_info"]?.AsObject()) ?? throw new InvalidOperationException("skill_info not found");
            skillInfo["skill_point"] = (int)skillInfo["skill_point"]! + 1;
            switch (request.ImproveAbilityRequest.AbilityType)
            {
                case 1:
                    skillInfo["ability_a"] = (int) skillInfo["ability_a"]! + 1;
                    break;
                case 2:
                    skillInfo["ability_b"] = (int) skillInfo["ability_b"]! + 1;
                    break;
                case 3:
                    skillInfo["ability_c"] = (int) skillInfo["ability_c"]! + 1;
                    break;
                case 4:
                    skillInfo["ability_d"] = (int) skillInfo["ability_d"]! + 1;
                    break;
                default:
                    _logger.LogWarning("Unexpected AbilityType: {AbilityType}", request.ImproveAbilityRequest.AbilityType);
                    break;
            }

            var friendshipLevel = (userActivityInfoJson["friend_ship_level"]?.AsObject()) ?? throw new InvalidOperationException("skill_info not found");
            int newFriendshipLevel = 0;
            switch (request.ImproveFriendshipLevelRequest.IdolType)
            {
                case 1:
                    newFriendshipLevel = (int)friendshipLevel["level_1"]! + 1;
                    friendshipLevel["level_1"] = newFriendshipLevel;
                    if (newFriendshipLevel == 1) UnlockOccurrence(userActivityInfoJson, 30101);
                    else if (newFriendshipLevel == 3) UnlockOccurrence(userActivityInfoJson, 30102);
                    else if (newFriendshipLevel == 6) UnlockOccurrence(userActivityInfoJson, 30103);
                    break;
                case 2:
                    newFriendshipLevel = (int)friendshipLevel["level_2"]! + 1;
                    friendshipLevel["level_2"] = newFriendshipLevel;
                    if (newFriendshipLevel == 1) UnlockOccurrence(userActivityInfoJson, 30201);
                    else if (newFriendshipLevel == 3) UnlockOccurrence(userActivityInfoJson, 30202);
                    else if (newFriendshipLevel == 6) UnlockOccurrence(userActivityInfoJson, 30203);
                    break;
                case 3:
                    newFriendshipLevel = (int)friendshipLevel["level_3"]! + 1;
                    friendshipLevel["level_3"] = newFriendshipLevel;
                    if (newFriendshipLevel == 1) UnlockOccurrence(userActivityInfoJson, 30301);
                    else if (newFriendshipLevel == 3) UnlockOccurrence(userActivityInfoJson, 30302);
                    else if (newFriendshipLevel == 6) UnlockOccurrence(userActivityInfoJson, 30303);
                    break;
                default:
                    _logger.LogWarning("Unexpected IdolType: {IdolType}", request.ImproveFriendshipLevelRequest.IdolType);
                    break;
            }


            user.UserActivityInfo = userActivityInfoJson.ToJsonString();
            await _userService.UpdateUserAsync(request.Account, user);

            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", userActivityInfoJson },
            });
        }

        protected void UnlockOccurrence(JsonNode userActivityInfoJson, int occurrenceId)
        {
            var occurrences = (userActivityInfoJson["occurrence_info"]?["occurrences"]?.AsArray()) ?? throw new InvalidOperationException("occurrences not found");
            foreach (var node in occurrences)
            {
                if ((int) node?["occurrence_id"]! == occurrenceId)
                {
                    node!["status"] = _inprogressStatus;
                    break;
                }
            }
        }
    }
}
