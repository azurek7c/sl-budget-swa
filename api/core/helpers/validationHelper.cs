using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace api.core.helpers
{
  public static class validationHelper
  {
    public static bool IsRequestValid<T>(T req, out List<ValidationResult> validationErrors)
    {
      var results = new List<ValidationResult>();
      var isValid = Validator.TryValidateObject(req, new ValidationContext(req, null, null), results, true);

      validationErrors = results;
      return isValid;
    }
  }
}
