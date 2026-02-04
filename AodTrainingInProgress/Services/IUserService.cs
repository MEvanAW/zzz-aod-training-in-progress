namespace AodTrainingInProgress.Services
{
    public interface IUserService<TUser>
    {
        public bool AccountExist(string account);
        public Task<long> CreateUserAsync(string account);
        public Task<TUser?> ReadUserAsync(string account);
    }
}
