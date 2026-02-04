using System.ComponentModel.DataAnnotations;

namespace AodTrainingInProgress.DTO.Account
{
    public class WebLoginByPasswordRequest
    {
        [Required]
        public string Account { get; set; } = string.Empty;
    }
}
