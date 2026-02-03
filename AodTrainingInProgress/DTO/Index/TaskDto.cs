using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class TaskDto
    {
        [JsonPropertyName("task_id")]
        public int TaskId { get; set; }
        public string Status { get; set; } = string.Empty;
        [JsonPropertyName("task_type")]
        public int TaskType { get; set; }
        public int Progress { get; set; }
        public int Total { get; set; }
    }
}
