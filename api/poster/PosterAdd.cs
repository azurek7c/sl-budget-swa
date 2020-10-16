using System.Threading.Tasks;
using api.core.helpers;
using api.poster.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;

namespace api.poster
{
  public static class PosterAdd
  {
    [FunctionName("PosterAdd")]
    public static async Task<IActionResult> Run(
      [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "poster")]
      HttpRequest req,
      ILogger log)
    {
      log.LogInformation("C# HTTP trigger function processed a request.");

      var requestObject = await jsonHelper.DeserializeRequest<PosterAddRequest>(req);
      var isValid = validationHelper.IsRequestValid(requestObject, out var results);

      if (!isValid)
        return new BadRequestObjectResult(results);

      return new CreatedResult("", requestObject);
    }
  }
}
