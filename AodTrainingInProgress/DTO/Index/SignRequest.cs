using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class SignRequest
    {
        public string Account { get; set; } = string.Empty;
        
        [JsonPropertyName("sign_ids")]
        public int[] SignIds { get; set; } = [];
    }
}
