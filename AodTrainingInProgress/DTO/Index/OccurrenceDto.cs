using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class OccurrenceDto
    {
        [JsonPropertyName("occurrence_id")]
        public int OccurrenceId { get; set; }

        public string Status { get; set; } = string.Empty;
    }
}
