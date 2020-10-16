using System.ComponentModel.DataAnnotations;

namespace api.poster.models
{
  public class PosterAddRequest
  {
    [Required]
    public string Kategori { get; set; }

    [Required]
    public string Navn { get; set; }

    [Required]
    [Range(0, double.PositiveInfinity)]
    public double Pris { get; set; }
  }
}
