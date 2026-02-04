using Microsoft.Extensions.Options;
using System.Text.Json;

namespace AodTrainingInProgress.Services
{
    public static class SerializationService
    {
        public static readonly JsonSerializerOptions jsonSerializerOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower
        };

        public static string Serialize<T>(T value)
        {
            return JsonSerializer.Serialize(value, jsonSerializerOptions);
        }
    }
}
