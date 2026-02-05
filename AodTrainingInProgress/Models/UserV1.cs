using System.Text.Json.Nodes;

namespace AodTrainingInProgress.Models
{
    public class UserV1
    {
        public long Id { get; set; }
        public string Account { get; set; } = string.Empty;
        public string UserActivityInfo { get; set; } = string.Empty;
        public string? SignPic { get; set; }
        public string? Token { get; set; }
        public string? ActShowInfo { get; set; }
        public string? OtherData { get; set; }

        public JsonNode UserActivityInfoJson => JsonNode.Parse(UserActivityInfo)!;
        public JsonNode? SignPicJson => SignPic is null ? null : JsonNode.Parse(SignPic);
        public JsonNode? ActShowInfoJson => ActShowInfo is null ? null : JsonNode.Parse(ActShowInfo);
        public JsonNode? OtherDataJson => OtherData is null ? null : JsonNode.Parse(OtherData);
    }
}
