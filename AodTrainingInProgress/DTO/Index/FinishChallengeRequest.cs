using System.Text.Json.Serialization;

namespace AodTrainingInProgress.DTO.Index
{
    public class FinishChallengeRequest
    {
        public int Score{ get; set; }

        public string Account { get; set; } = string.Empty;
    }
}
