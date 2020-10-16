using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace api.core.helpers
{
  public static class jsonHelper
  {
    public static async Task<T> DeserializeRequest<T>(HttpRequest req)
    {
      var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
      var model = JsonConvert.DeserializeObject<T>(requestBody);

      return model;
    }
  }
}
