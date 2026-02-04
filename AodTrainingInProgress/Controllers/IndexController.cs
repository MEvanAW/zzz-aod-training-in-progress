using AodTrainingInProgress.DTO.Index;
using Microsoft.AspNetCore.Mvc;

namespace AodTrainingInProgress.Controllers
{
    public class IndexController : Controller
    {
        [Route("index")]
        public IActionResult Index()
        {
            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "user_activity_info", new Dictionary<string, object?> {
                        { "gender", "MALE" },
                        { "score_info", new Dictionary<string, object?> {
                            { "total_score", "0" },
                            { "history_max_score", "0" },
                        }},
                        { "task_info", new Dictionary<string, object?> {
                            { "tasks", new List<TaskDto> {
                                new() { TaskId = 101, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 102, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 103, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 104, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 105, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 201, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                                new() { TaskId = 202, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                                new() { TaskId = 203, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                                new() { TaskId = 211, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                                new() { TaskId = 212, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                                new() { TaskId = 213, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                                new() { TaskId = 221, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                                new() { TaskId = 222, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                                new() { TaskId = 223, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                                new() { TaskId = 301, Status = "InProgress", TaskType = 3, Progress = 0, Total = 20000 },
                                new() { TaskId = 302, Status = "InProgress", TaskType = 3, Progress = 0, Total = 80000 },
                                new() { TaskId = 303, Status = "InProgress", TaskType = 3, Progress = 0, Total = 150000 },
                                new() { TaskId = 304, Status = "InProgress", TaskType = 3, Progress = 0, Total = 300000 },
                                new() { TaskId = 305, Status = "InProgress", TaskType = 3, Progress = 0, Total = 600000 },
                                new() { TaskId = 501, Status = "InProgress", TaskType = 5, Progress = 0, Total = 1 },
                                new() { TaskId = 106, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                            }}
                        }},
                        { "sign_info", new Dictionary<string, object?> {
                            { "signs", new List<SignDto> {
                                new() { SignId = 401, Status = "Received"},
                                new() { SignId = 402, Status = "Locked"},
                                new() { SignId = 403, Status = "Locked"},
                                new() { SignId = 404, Status = "Locked"},
                                new() { SignId = 405, Status = "Locked"},
                            }}
                        }},
                        { "guide_info", new Dictionary<string, object?> {
                            { "guide_id", 0 }
                        }},
                        { "activity_progress", new Dictionary<string, object?> {
                            { "week", 1 },
                            { "day", 1 },
                            { "can_challenge_weeks", new object() },
                            { "week_challenge_finished", new object() }
                        }},
                        { "friend_ship_level", new Dictionary<string, object?> {
                            { "level_1", 0 },
                            { "level_2", 0 },
                            { "level_3", 0 }
                        }},
                        { "skill_info", new Dictionary<string, object?> {
                            { "ability_a", 1 },
                            { "ability_b", 1 },
                            { "ability_c", 0 },
                            { "ability_d", 0 },
                            { "skill_1_unlocked", false },
                            { "skill_2_unlocked", false },
                            { "skill_3_unlocked", false },
                            { "skill_ultimate_unlocked", false },
                            { "skill_point", 0 },
                        }},
                        { "occurrence_info", new Dictionary<string, object?> {
                            { "occurrences", new List<OccurrenceDto> {
                                new() { OccurrenceId = 10101, Status = "InProgress" },
                                new() { OccurrenceId = 20101, Status = "Locked" },
                                new() { OccurrenceId = 10102, Status = "Locked" },
                                new() { OccurrenceId = 10201, Status = "Locked" },
                                new() { OccurrenceId = 20201, Status = "Locked" },
                                new() { OccurrenceId = 10202, Status = "Locked" },
                                new() { OccurrenceId = 10301, Status = "Locked" },
                                new() { OccurrenceId = 20301, Status = "Locked" },
                                new() { OccurrenceId = 10302, Status = "Locked" },
                                new() { OccurrenceId = 10401, Status = "Locked" },
                                new() { OccurrenceId = 20401, Status = "Locked" },
                                new() { OccurrenceId = 10402, Status = "Locked" },
                                new() { OccurrenceId = 10501, Status = "Locked" },
                                new() { OccurrenceId = 10502, Status = "Locked" },
                                new() { OccurrenceId = 10503, Status = "Locked" },
                                new() { OccurrenceId = 30101, Status = "Locked" },
                                new() { OccurrenceId = 30102, Status = "Locked" },
                                new() { OccurrenceId = 30103, Status = "Locked" },
                                new() { OccurrenceId = 30201, Status = "Locked" },
                                new() { OccurrenceId = 30202, Status = "Locked" },
                                new() { OccurrenceId = 30203, Status = "Locked" },
                                new() { OccurrenceId = 30301, Status = "Locked" },
                                new() { OccurrenceId = 30302, Status = "Locked" },
                                new() { OccurrenceId = 30303, Status = "Locked" },
                            }}
                        }},
                    }},
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
        public IActionResult FinishOccurrence()
        {
            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "gender", "MALE" },
                    { "score_info", new Dictionary<string, object?> {
                        { "total_score", "0" },
                        { "history_max_score", "0" },
                    }},
                    { "task_info", new Dictionary<string, object?> {
                        { "tasks", new List<TaskDto> {
                            new() { TaskId = 101, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 102, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 103, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 104, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 105, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 201, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 202, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 203, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 211, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 212, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 213, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 221, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 222, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 223, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 301, Status = "InProgress", TaskType = 3, Progress = 0, Total = 20000 },
                            new() { TaskId = 302, Status = "InProgress", TaskType = 3, Progress = 0, Total = 80000 },
                            new() { TaskId = 303, Status = "InProgress", TaskType = 3, Progress = 0, Total = 150000 },
                            new() { TaskId = 304, Status = "InProgress", TaskType = 3, Progress = 0, Total = 300000 },
                            new() { TaskId = 305, Status = "InProgress", TaskType = 3, Progress = 0, Total = 600000 },
                            new() { TaskId = 501, Status = "InProgress", TaskType = 5, Progress = 0, Total = 1 },
                            new() { TaskId = 106, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        }}
                    }},
                    { "sign_info", new Dictionary<string, object?> {
                        { "signs", new List<SignDto> {
                            new() { SignId = 401, Status = "Received"},
                            new() { SignId = 402, Status = "Locked"},
                            new() { SignId = 403, Status = "Locked"},
                            new() { SignId = 404, Status = "Locked"},
                            new() { SignId = 405, Status = "Locked"},
                        }}
                    }},
                    { "guide_info", new Dictionary<string, object?> {
                        { "guide_id", 0 }
                    }},
                    { "activity_progress", new Dictionary<string, object?> {
                        { "week", 1 },
                        { "day", 1 },
                        { "can_challenge_weeks", new object() },
                        { "week_challenge_finished", new object() }
                    }},
                    { "friend_ship_level", new Dictionary<string, object?> {
                        { "level_1", 0 },
                        { "level_2", 0 },
                        { "level_3", 0 }
                    }},
                    { "skill_info", new Dictionary<string, object?> {
                        { "ability_a", 1 },
                        { "ability_b", 1 },
                        { "ability_c", 0 },
                        { "ability_d", 0 },
                        { "skill_1_unlocked", false },
                        { "skill_2_unlocked", false },
                        { "skill_3_unlocked", false },
                        { "skill_ultimate_unlocked", false },
                        { "skill_point", 0 },
                    }},
                    { "occurrence_info", new Dictionary<string, object?> {
                        { "occurrences", new List<OccurrenceDto> {
                            new() { OccurrenceId = 10101, Status = "Completed" },
                            new() { OccurrenceId = 20101, Status = "Locked" },
                            new() { OccurrenceId = 10102, Status = "Locked" },
                            new() { OccurrenceId = 10201, Status = "Locked" },
                            new() { OccurrenceId = 20201, Status = "Locked" },
                            new() { OccurrenceId = 10202, Status = "Locked" },
                            new() { OccurrenceId = 10301, Status = "Locked" },
                            new() { OccurrenceId = 20301, Status = "Locked" },
                            new() { OccurrenceId = 10302, Status = "Locked" },
                            new() { OccurrenceId = 10401, Status = "Locked" },
                            new() { OccurrenceId = 20401, Status = "Locked" },
                            new() { OccurrenceId = 10402, Status = "Locked" },
                            new() { OccurrenceId = 10501, Status = "Locked" },
                            new() { OccurrenceId = 10502, Status = "Locked" },
                            new() { OccurrenceId = 10503, Status = "Locked" },
                            new() { OccurrenceId = 30101, Status = "Locked" },
                            new() { OccurrenceId = 30102, Status = "Locked" },
                            new() { OccurrenceId = 30103, Status = "Locked" },
                            new() { OccurrenceId = 30201, Status = "Locked" },
                            new() { OccurrenceId = 30202, Status = "Locked" },
                            new() { OccurrenceId = 30203, Status = "Locked" },
                            new() { OccurrenceId = 30301, Status = "Locked" },
                            new() { OccurrenceId = 30302, Status = "Locked" },
                            new() { OccurrenceId = 30303, Status = "Locked" },
                        }}
                    }}
                }},
            });
        }

        [HttpPost]
        [Route("finish_guide")]
        public IActionResult FinishGuide()
        {
            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "gender", "MALE" },
                    { "score_info", new Dictionary<string, object?> {
                        { "total_score", "0" },
                        { "history_max_score", "0" },
                    }},
                    { "task_info", new Dictionary<string, object?> {
                        { "tasks", new List<TaskDto> {
                            new() { TaskId = 101, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 102, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 103, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 104, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 105, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 201, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 202, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 203, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 211, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 212, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 213, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 221, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 222, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 223, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 301, Status = "InProgress", TaskType = 3, Progress = 0, Total = 20000 },
                            new() { TaskId = 302, Status = "InProgress", TaskType = 3, Progress = 0, Total = 80000 },
                            new() { TaskId = 303, Status = "InProgress", TaskType = 3, Progress = 0, Total = 150000 },
                            new() { TaskId = 304, Status = "InProgress", TaskType = 3, Progress = 0, Total = 300000 },
                            new() { TaskId = 305, Status = "InProgress", TaskType = 3, Progress = 0, Total = 600000 },
                            new() { TaskId = 501, Status = "InProgress", TaskType = 5, Progress = 0, Total = 1 },
                            new() { TaskId = 106, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        }}
                    }},
                    { "sign_info", new Dictionary<string, object?> {
                        { "signs", new List<SignDto> {
                            new() { SignId = 401, Status = "Received"},
                            new() { SignId = 402, Status = "Locked"},
                            new() { SignId = 403, Status = "Locked"},
                            new() { SignId = 404, Status = "Locked"},
                            new() { SignId = 405, Status = "Locked"},
                        }}
                    }},
                    { "guide_info", new Dictionary<string, object?> {
                        { "guide_id", 1 }
                    }},
                    { "activity_progress", new Dictionary<string, object?> {
                        { "week", 1 },
                        { "day", 1 },
                        { "can_challenge_weeks", new object() },
                        { "week_challenge_finished", new object() }
                    }},
                    { "friend_ship_level", new Dictionary<string, object?> {
                        { "level_1", 0 },
                        { "level_2", 0 },
                        { "level_3", 0 }
                    }},
                    { "skill_info", new Dictionary<string, object?> {
                        { "ability_a", 1 },
                        { "ability_b", 1 },
                        { "ability_c", 0 },
                        { "ability_d", 0 },
                        { "skill_1_unlocked", false },
                        { "skill_2_unlocked", false },
                        { "skill_3_unlocked", false },
                        { "skill_ultimate_unlocked", false },
                        { "skill_point", 0 },
                    }},
                    { "occurrence_info", new Dictionary<string, object?> {
                        { "occurrences", new List<OccurrenceDto> {
                            new() { OccurrenceId = 10101, Status = "Completed" },
                            new() { OccurrenceId = 20101, Status = "Locked" },
                            new() { OccurrenceId = 10102, Status = "Locked" },
                            new() { OccurrenceId = 10201, Status = "Locked" },
                            new() { OccurrenceId = 20201, Status = "Locked" },
                            new() { OccurrenceId = 10202, Status = "Locked" },
                            new() { OccurrenceId = 10301, Status = "Locked" },
                            new() { OccurrenceId = 20301, Status = "Locked" },
                            new() { OccurrenceId = 10302, Status = "Locked" },
                            new() { OccurrenceId = 10401, Status = "Locked" },
                            new() { OccurrenceId = 20401, Status = "Locked" },
                            new() { OccurrenceId = 10402, Status = "Locked" },
                            new() { OccurrenceId = 10501, Status = "Locked" },
                            new() { OccurrenceId = 10502, Status = "Locked" },
                            new() { OccurrenceId = 10503, Status = "Locked" },
                            new() { OccurrenceId = 30101, Status = "Locked" },
                            new() { OccurrenceId = 30102, Status = "Locked" },
                            new() { OccurrenceId = 30103, Status = "Locked" },
                            new() { OccurrenceId = 30201, Status = "Locked" },
                            new() { OccurrenceId = 30202, Status = "Locked" },
                            new() { OccurrenceId = 30203, Status = "Locked" },
                            new() { OccurrenceId = 30301, Status = "Locked" },
                            new() { OccurrenceId = 30302, Status = "Locked" },
                            new() { OccurrenceId = 30303, Status = "Locked" },
                        }}
                    }}
                }},
            });
        }

        [HttpPost]
        [Route("finish_challenge")]
        public IActionResult FinishChallenge()
        {
            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "token", "NFRqBIJWGp3GHFG0LXqyVA:1770171101" },
                    { "user_activity_info", new Dictionary<string, object?> {
                        { "gender", "MALE" },
                        { "score_info", new Dictionary<string, object?> {
                            { "total_score", "1160" },
                            { "history_max_score", "1160" },
                        }},
                        { "task_info", new Dictionary<string, object?> {
                            { "tasks", new List<TaskDto> {
                                new() { TaskId = 101, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 102, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 103, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 104, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 105, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                                new() { TaskId = 201, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                                new() { TaskId = 202, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                                new() { TaskId = 203, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                                new() { TaskId = 211, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                                new() { TaskId = 212, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                                new() { TaskId = 213, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                                new() { TaskId = 221, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                                new() { TaskId = 222, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                                new() { TaskId = 223, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                                new() { TaskId = 301, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 20000 },
                                new() { TaskId = 302, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 80000 },
                                new() { TaskId = 303, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 150000 },
                                new() { TaskId = 304, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 300000 },
                                new() { TaskId = 305, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 600000 },
                                new() { TaskId = 501, Status = "InProgress", TaskType = 5, Progress = 0, Total = 1 },
                                new() { TaskId = 106, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                            }}
                        }},
                        { "sign_info", new Dictionary<string, object?> {
                            { "signs", new List<SignDto> {
                                new() { SignId = 401, Status = "Received"},
                                new() { SignId = 402, Status = "Locked"},
                                new() { SignId = 403, Status = "Locked"},
                                new() { SignId = 404, Status = "Locked"},
                                new() { SignId = 405, Status = "Locked"},
                            }}
                        }},
                        { "guide_info", new Dictionary<string, object?> {
                            { "guide_id", 2 }
                        }},
                        { "activity_progress", new Dictionary<string, object?> {
                            { "week", 1 },
                            { "day", 1 },
                            { "can_challenge_weeks", new object() },
                            { "week_challenge_finished", new object() }
                        }},
                        { "friend_ship_level", new Dictionary<string, object?> {
                            { "level_1", 0 },
                            { "level_2", 0 },
                            { "level_3", 0 }
                        }},
                        { "skill_info", new Dictionary<string, object?> {
                            { "ability_a", 1 },
                            { "ability_b", 1 },
                            { "ability_c", 0 },
                            { "ability_d", 0 },
                            { "skill_1_unlocked", true },
                            { "skill_2_unlocked", false },
                            { "skill_3_unlocked", false },
                            { "skill_ultimate_unlocked", false },
                            { "skill_point", 0 },
                        }},
                        { "occurrence_info", new Dictionary<string, object?> {
                            { "occurrences", new List<OccurrenceDto> {
                                new() { OccurrenceId = 10101, Status = "Completed" },
                                new() { OccurrenceId = 20101, Status = "Locked" },
                                new() { OccurrenceId = 10102, Status = "Locked" },
                                new() { OccurrenceId = 10201, Status = "Locked" },
                                new() { OccurrenceId = 20201, Status = "Locked" },
                                new() { OccurrenceId = 10202, Status = "Locked" },
                                new() { OccurrenceId = 10301, Status = "Locked" },
                                new() { OccurrenceId = 20301, Status = "Locked" },
                                new() { OccurrenceId = 10302, Status = "Locked" },
                                new() { OccurrenceId = 10401, Status = "Locked" },
                                new() { OccurrenceId = 20401, Status = "Locked" },
                                new() { OccurrenceId = 10402, Status = "Locked" },
                                new() { OccurrenceId = 10501, Status = "Locked" },
                                new() { OccurrenceId = 10502, Status = "Locked" },
                                new() { OccurrenceId = 10503, Status = "Locked" },
                                new() { OccurrenceId = 30101, Status = "Locked" },
                                new() { OccurrenceId = 30102, Status = "Locked" },
                                new() { OccurrenceId = 30103, Status = "Locked" },
                                new() { OccurrenceId = 30201, Status = "Locked" },
                                new() { OccurrenceId = 30202, Status = "Locked" },
                                new() { OccurrenceId = 30203, Status = "Locked" },
                                new() { OccurrenceId = 30301, Status = "Locked" },
                                new() { OccurrenceId = 30302, Status = "Locked" },
                                new() { OccurrenceId = 30303, Status = "Locked" },
                            }}
                        }},
                    }},
                }},
            });
        }

        [HttpPost]
        [Route("complete_train_day")]
        public IActionResult CompleteTrainDay()
        {
            return Ok(new Dictionary<string, object?> {
                { "retcode", 0 },
                { "message", "OK" },
                { "data", new Dictionary<string, object?> {
                    { "gender", "MALE" },
                    { "score_info", new Dictionary<string, object?> {
                        { "total_score", "1160" },
                        { "history_max_score", "1160" },
                    }},
                    { "task_info", new Dictionary<string, object?> {
                        { "tasks", new List<TaskDto> {
                            new() { TaskId = 101, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 102, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 103, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 104, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 105, Status = "InProgress", TaskType = 1, Progress = 0, Total = 1 },
                            new() { TaskId = 201, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 202, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 203, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 211, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 212, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 213, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 221, Status = "InProgress", TaskType = 2, Progress = 0, Total = 1 },
                            new() { TaskId = 222, Status = "InProgress", TaskType = 2, Progress = 0, Total = 2 },
                            new() { TaskId = 223, Status = "InProgress", TaskType = 2, Progress = 0, Total = 3 },
                            new() { TaskId = 301, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 20000 },
                            new() { TaskId = 302, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 80000 },
                            new() { TaskId = 303, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 150000 },
                            new() { TaskId = 304, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 300000 },
                            new() { TaskId = 305, Status = "InProgress", TaskType = 3, Progress = 1160, Total = 600000 },
                            new() { TaskId = 501, Status = "InProgress", TaskType = 5, Progress = 0, Total = 1 },
                            new() { TaskId = 106, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        }}
                    }},
                    { "sign_info", new Dictionary<string, object?> {
                        { "signs", new List<SignDto> {
                            new() { SignId = 401, Status = "Received"},
                            new() { SignId = 402, Status = "Locked"},
                            new() { SignId = 403, Status = "Locked"},
                            new() { SignId = 404, Status = "Locked"},
                            new() { SignId = 405, Status = "Locked"},
                        }}
                    }},
                    { "guide_info", new Dictionary<string, object?> {
                        { "guide_id", 3 }
                    }},
                    { "activity_progress", new Dictionary<string, object?> {
                        { "week", 1 },
                        { "day", 2 },
                        { "can_challenge_weeks", new object() },
                        { "week_challenge_finished", new object() }
                    }},
                    { "friend_ship_level", new Dictionary<string, object?> {
                        { "level_1", 0 },
                        { "level_2", 1 },
                        { "level_3", 0 }
                    }},
                    { "skill_info", new Dictionary<string, object?> {
                        { "ability_a", 2 },
                        { "ability_b", 1 },
                        { "ability_c", 0 },
                        { "ability_d", 0 },
                        { "skill_1_unlocked", true },
                        { "skill_2_unlocked", false },
                        { "skill_3_unlocked", false },
                        { "skill_ultimate_unlocked", false },
                        { "skill_point", 1 },
                    }},
                    { "occurrence_info", new Dictionary<string, object?> {
                        { "occurrences", new List<OccurrenceDto> {
                            new() { OccurrenceId = 10101, Status = "Completed" },
                            new() { OccurrenceId = 20101, Status = "Locked" },
                            new() { OccurrenceId = 10102, Status = "Locked" },
                            new() { OccurrenceId = 10201, Status = "Locked" },
                            new() { OccurrenceId = 20201, Status = "Locked" },
                            new() { OccurrenceId = 10202, Status = "Locked" },
                            new() { OccurrenceId = 10301, Status = "Locked" },
                            new() { OccurrenceId = 20301, Status = "Locked" },
                            new() { OccurrenceId = 10302, Status = "Locked" },
                            new() { OccurrenceId = 10401, Status = "Locked" },
                            new() { OccurrenceId = 20401, Status = "Locked" },
                            new() { OccurrenceId = 10402, Status = "Locked" },
                            new() { OccurrenceId = 10501, Status = "Locked" },
                            new() { OccurrenceId = 10502, Status = "Locked" },
                            new() { OccurrenceId = 10503, Status = "Locked" },
                            new() { OccurrenceId = 30101, Status = "Locked" },
                            new() { OccurrenceId = 30102, Status = "Locked" },
                            new() { OccurrenceId = 30103, Status = "Locked" },
                            new() { OccurrenceId = 30201, Status = "InProgress" },
                            new() { OccurrenceId = 30202, Status = "Locked" },
                            new() { OccurrenceId = 30203, Status = "Locked" },
                            new() { OccurrenceId = 30301, Status = "Locked" },
                            new() { OccurrenceId = 30302, Status = "Locked" },
                            new() { OccurrenceId = 30303, Status = "Locked" },
                        }}
                    }}
                }},
            });
        }
    }
}
