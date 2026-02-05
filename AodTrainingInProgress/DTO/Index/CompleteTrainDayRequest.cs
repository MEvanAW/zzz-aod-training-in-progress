using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class CompleteTrainDayRequest
    {
        public string Account { get; set; } = string.Empty;
        [JsonPropertyName("improve_ability_request")]
        public required ImproveAbilityRequest ImproveAbilityRequest { get; set; }
        [JsonPropertyName("improve_friendship_level_request")]
        public required ImproveFriendshipLevelRequest ImproveFriendshipLevelRequest { get; set; }
    }

    public class ImproveAbilityRequest
    {
        [JsonPropertyName("ability_type")]
        public int AbilityType { get; set; }
    }

    public class ImproveFriendshipLevelRequest
    {
        [JsonPropertyName("idol_type")]
        public int IdolType { get; set; }
    }
}
