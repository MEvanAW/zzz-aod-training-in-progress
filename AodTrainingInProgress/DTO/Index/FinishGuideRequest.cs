using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class FinishGuideRequest
    {
        [JsonPropertyName("guide_id")]
        public int GuideId { get; set; }

        public string Account { get; set; } = string.Empty;
    }
}
