using Microsoft.Data.Sqlite;

namespace AodTrainingInProgress.Infrastructure
{
    public class DbBootstrap
    {
        public static void EnsureCreated(string connectionString)
        {
            using var connection = new SqliteConnection(connectionString);
            connection.Open();

            using var cmd = connection.CreateCommand();
            cmd.CommandText = """
                CREATE TABLE IF NOT EXISTS User_v1 (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    Account TEXT NOT NULL,
                    UserActivityInfo TEXT NOT NULL CHECK (json_valid(UserActivityInfo)),
                    SignPic TEXT CHECK (json_valid(SignPic)),
                    Token TEXT,
                    ActShowInfo TEXT CHECK (json_valid(ActShowInfo)),
                    OtherData TEXT
                );
                CREATE UNIQUE INDEX IF NOT EXISTS IX_User_v1_Account
                ON User_v1 (Account);
                """;

            cmd.ExecuteNonQuery();
        }
    }
}
