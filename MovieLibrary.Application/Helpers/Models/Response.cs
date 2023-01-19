using System.Net;

namespace MovieLibrary.Application.Helpers.Models;

public class Response<T> : ResponseBase
{
    public Response(HttpStatusCode statusCode, string message)
        : base(statusCode, message)
    {
    }
    
    public Response(T data, HttpStatusCode statusCode, string message)
        : base(statusCode, message)
    {
        Data = data;
    }
    
    public T Data { get; set; }
}