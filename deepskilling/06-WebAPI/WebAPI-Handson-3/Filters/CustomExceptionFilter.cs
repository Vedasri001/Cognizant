using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebAPI_Handson_3.Filters;

// Exercise 3: Custom exception filter.
// Note: ASP.NET Core has IExceptionFilter built into Microsoft.AspNetCore.Mvc directly,
// so the legacy WebApiCompatShim package (needed only for old .NET Framework Web API)
// isn't required here.
public class CustomExceptionFilter : IExceptionFilter
{
    private const string LogFilePath = "exceptions.log";

    public void OnException(ExceptionContext context)
    {
        var message = $"{DateTime.UtcNow:u} - {context.Exception.GetType().Name}: {context.Exception.Message}{Environment.NewLine}";

        try
        {
            File.AppendAllText(LogFilePath, message);
        }
        catch
        {
            // Swallow logging failures so they don't mask the original exception response
        }

        context.Result = new ObjectResult(new
        {
            error = "Internal server error",
            detail = context.Exception.Message
        })
        {
            StatusCode = 500
        };

        context.ExceptionHandled = true;
    }
}
