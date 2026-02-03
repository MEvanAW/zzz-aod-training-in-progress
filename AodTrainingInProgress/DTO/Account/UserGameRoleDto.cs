using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Account
{
    public class UserGameRoleDto
    {
        [JsonPropertyName("game_biz")]
        public string GameBiz { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
        [JsonPropertyName("game_uid")]
        public string GameUid { get; set; } = string.Empty;
        public string Nickname { get; set; } = string.Empty;
        public int Level { get; set; }
        [JsonPropertyName("is_chosen")]
        public bool IsChosen { get; set; }
        [JsonPropertyName("region_name")]
        public string RegionName { get; set; } = string.Empty;
        [JsonPropertyName("is_official")]
        public bool IsOfficial { get; set; }
        public object[] Unmask { get; set; } = Array.Empty<object>();

    }
}
