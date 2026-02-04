namespace AodTrainingInProgress.Services
{
    public interface IUserService
    {
        public bool AccountExist(string account);
        public Task<long> CreateUserAsync(string account);
    }
}
