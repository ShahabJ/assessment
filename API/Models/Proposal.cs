using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Proposal
    {
        [Key]
        public int Id { get; set; }
        public string ProposalName { get; set; }
        public string CustomerGrpName { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public ICollection<Facility> Facilities { get; set; } = new List<Facility>();
    }
}