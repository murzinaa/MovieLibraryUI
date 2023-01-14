using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MovieLibrary.Application.Helpers;

public static class HttpClientBase
{
    public static async Task<T2> Call<T, T2>(this HttpClient httpClient, T request, string route, HttpMethod method)
    {
        string serializedRequest = SerializeObject(request);
        
        var methodUrl = $"{httpClient.BaseAddress}{route.Trim('/')}";

        var messageContent = method == HttpMethod.Get
            ? null
            : new StringContent(serializedRequest, Encoding.UTF8, "application/json");

        var message = new HttpRequestMessage
        {
            Content = messageContent,
            Method = method,
            RequestUri = new Uri(methodUrl),
        };
        var res = await httpClient.SendAsync(message);

        return await DeserializeResponse<T2>(res);
    }
    
    public static async Task Call<T>(this HttpClient httpClient, T request, string route, HttpMethod method)
    {
        string serializedRequest = SerializeObject(request);
        
        var methodUrl = $"{httpClient.BaseAddress}{route.Trim('/')}";

        var messageContent = method == HttpMethod.Get
            ? null
            : new StringContent(serializedRequest, Encoding.UTF8, "application/json");

        var message = new HttpRequestMessage
        {
            Content = messageContent,
            Method = method,
            RequestUri = new Uri(methodUrl),
        };
        await httpClient.SendAsync(message);
    }
    
    private static string SerializeObject<T>(T model)
    {
        return JsonConvert.SerializeObject(model);
    }

    private static async Task<T> DeserializeResponse<T>(HttpResponseMessage response)
    {
        try
        {
            var jsonString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<T>(jsonString);
            return result;
        }
        catch (Exception e)
        {
            throw new Exception($"Error while deserializing response. {e.Message}");
        }
    }
}