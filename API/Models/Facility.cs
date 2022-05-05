
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Facility
    {
        [Key]
        public int Id { get; set; }
        public string FacilityName { get; set; }
        public string BookingCountry { get; set; }
        public string Currency { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime MaturityDate { get; set; }

        [Column(TypeName = "decimal(15,2)")]
        public decimal Limit { get; set; }
    }
}