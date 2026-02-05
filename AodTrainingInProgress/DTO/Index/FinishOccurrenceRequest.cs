using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class FinishOccurrenceRequest
    {
        [JsonPropertyName("occurrence_id")]
        public int OccurrenceId { get; set; }

        public string Account { get; set; } = string.Empty;
    }
}
