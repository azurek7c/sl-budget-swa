using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace sl.budget
{
    public static class AuthMe
    {
        [FunctionName("AuthMe")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");


          var responseMessage = new AuthResponse{
            Status = "Test"
          };

            return new OkObjectResult(responseMessage);
        }
    }

    class AuthResponse {
      public string Status { get; set; }
    }
}
