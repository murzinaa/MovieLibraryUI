using System;
using System.Net;

namespace MovieLibrary.Application;

public class ApiCallException : Exception
{
    public ApiCallException(string errorMessage, HttpStatusCode statusCode)
        : base(errorMessage)
    {
        StatusCode = statusCode;
    }
    
    public HttpStatusCode StatusCode { get; }
}