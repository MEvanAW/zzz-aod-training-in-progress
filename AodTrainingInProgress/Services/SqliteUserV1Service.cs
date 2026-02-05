using AodTrainingInProgress.DTO.Index;
using AodTrainingInProgress.Infrastructure;
using AodTrainingInProgress.Models;
using Microsoft.Data.Sqlite;
using System.Text.Json;

namespace AodTrainingInProgress.Services
{
    public class SqliteUserV1Service(SqliteConfig sqliteConfig) : IUserService<UserV1>
    {
        protected string _connectionString = sqliteConfig.ConnectionString;

        public bool AccountExist(string account)
        {
            int count = 0;

            using (var connection = new SqliteConnection(_connectionString))
            {
                connection.Open();

                using var command = connection.CreateCommand();
                command.CommandText = """
                    SELECT COUNT(Account)
                    FROM User_v1
                    WHERE Account = $account;
                """;
                command.Parameters.AddWithValue("$account", account);

                var result = command.ExecuteScalar();
                count = Convert.ToInt32(result);
            }

            return count > 0;
        }

        public async Task<long> CreateUserAsync(string account)
        {
            var userActivityInfo = new Dictionary<string, object?> {
                { "gender", "MALE" },
                { "score_info", new Dictionary<string, object?> {
                    { "total_score", "0" },
                    { "history_max_score", "0" },
                }},
                { "task_info", new Dictionary<string, object?> {
                    { "tasks", new List<TaskDto> {
                        new() { TaskId = 101, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        new() { TaskId = 102, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        new() { TaskId = 103, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        new() { TaskId = 104, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        new() { TaskId = 105, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        new() { TaskId = 106, Status = "Received", TaskType = 1, Progress = 1, Total = 1 },
                        new() { TaskId = 201, Status = "Received", TaskType = 2, Progress = 1, Total = 1 },
                        new() { TaskId = 202, Status = "Received", TaskType = 2, Progress = 2, Total = 2 },
                        new() { TaskId = 203, Status = "Received", TaskType = 2, Progress = 3, Total = 3 },
                        new() { TaskId = 211, Status = "Received", TaskType = 2, Progress = 1, Total = 1 },
                        new() { TaskId = 212, Status = "Received", TaskType = 2, Progress = 2, Total = 2 },
                        new() { TaskId = 213, Status = "Received", TaskType = 2, Progress = 3, Total = 3 },
                        new() { TaskId = 221, Status = "Received", TaskType = 2, Progress = 1, Total = 1 },
                        new() { TaskId = 222, Status = "Received", TaskType = 2, Progress = 2, Total = 2 },
                        new() { TaskId = 223, Status = "Received", TaskType = 2, Progress = 3, Total = 3 },
                        new() { TaskId = 301, Status = "Received", TaskType = 3, Progress = 20000, Total = 20000 },
                        new() { TaskId = 302, Status = "Received", TaskType = 3, Progress = 80000, Total = 80000 },
                        new() { TaskId = 303, Status = "Received", TaskType = 3, Progress = 150000, Total = 150000 },
                        new() { TaskId = 304, Status = "Received", TaskType = 3, Progress = 300000, Total = 300000 },
                        new() { TaskId = 305, Status = "Received", TaskType = 3, Progress = 600000, Total = 600000 },
                        new() { TaskId = 501, Status = "Received", TaskType = 5, Progress = 1, Total = 1 },
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
            };
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower
            };

            using var connection = new SqliteConnection(_connectionString);
            connection.Open();

            using var command = connection.CreateCommand();
            command.CommandText = """
                INSERT INTO User_v1 (
                    Account,
                    UserActivityInfo
                )
                VALUES (
                    $account,
                    $userActivityInfo
                );
                SELECT last_insert_rowid();
            """;
            command.Parameters.AddWithValue("$account", account);
            command.Parameters.AddWithValue("$userActivityInfo", SerializationService.Serialize(userActivityInfo));

            var result = await command.ExecuteScalarAsync();
            return Convert.ToInt64(result);
        }

        public async Task<UserV1?> ReadUserAsync(string account)
        {
            using var connection = new SqliteConnection(_connectionString);
            connection.Open();

            using var command = connection.CreateCommand();
            command.CommandText = """
                SELECT
                    Id,
                    Account,
                    UserActivityInfo
                FROM User_v1
                WHERE Account = $account;
            """;
            command.Parameters.AddWithValue("$account", account);

            using var reader = await command.ExecuteReaderAsync();

            if (!reader.Read())
            {
                return null;
            }   

            return new UserV1
            {
                Id = reader.GetInt64(0),
                Account = reader.GetString(1),
                UserActivityInfo = reader.GetString(2)
            };
        }

        public async Task<long> UpdateUserAsync(string account, UserV1 user)
        {
            using var connection = new SqliteConnection(_connectionString);
            connection.Open();

            using var command = connection.CreateCommand();
            command.CommandText = """
                UPDATE User_v1
                SET UserActivityInfo = $userActivityInfo
                WHERE Account = $account
            """;
            command.Parameters.AddWithValue("$account", account);
            command.Parameters.AddWithValue("$userActivityInfo", user.UserActivityInfo);

            var result = await command.ExecuteScalarAsync();
            return Convert.ToInt64(result);
        }
    }
}
