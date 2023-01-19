using System.Net;

namespace MovieLibrary.Application.Helpers.Models;

public class ResponseBase
{
    public ResponseBase(HttpStatusCode statusCode, string errorMessage)
    {
        StatusCode = statusCode;
        ErrorMessage = errorMessage;
    }

    public ResponseBase()
    {
        
    }

    public HttpStatusCode StatusCode { get; set; }

    public string ErrorMessage { get; set; }
}