using System.Text.Json;

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

        public JsonDocument UserActivityInfoJson => JsonDocument.Parse(UserActivityInfo);
        public JsonDocument? SignPicJson => SignPic is null ? null : JsonDocument.Parse(SignPic);
        public JsonDocument? ActShowInfoJson => ActShowInfo is null ? null : JsonDocument.Parse(ActShowInfo);
        public JsonDocument? OtherDataJson => OtherData is null ? null : JsonDocument.Parse(OtherData);
    }
}
