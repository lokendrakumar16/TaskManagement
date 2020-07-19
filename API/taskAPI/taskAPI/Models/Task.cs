using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskAPI.Models
{
    public partial class Task
    {
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
    }
}
