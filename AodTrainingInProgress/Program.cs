using AodTrainingInProgress.Infrastructure;
using AodTrainingInProgress.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

// SQLite connection string
var connectionString = "Data Source=AodTrainingInProgressV1.db";

builder.Services.AddSingleton(new SqliteConfig(connectionString));
builder.Services.AddTransient<IUserService, SqliteUserV1Service>();

var app = builder.Build();

// ---- DB BOOTSTRAP (runs once per startup) ----
DbBootstrap.EnsureCreated(connectionString);
// ---------------------------------------------

app.UseDefaultFiles(new DefaultFilesOptions
{
    DefaultFileNames = new
    List<string> { "index.html" }
});
app.UseStaticFiles();
app.MapControllers();
app.Run();
