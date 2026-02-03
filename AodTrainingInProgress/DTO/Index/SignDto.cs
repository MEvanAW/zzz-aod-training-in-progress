using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class SignDto
    {
        [JsonPropertyName("sign_id")]
        public int SignId { get; set; }

        public string Status { get; set; } = string.Empty;
    }
}
