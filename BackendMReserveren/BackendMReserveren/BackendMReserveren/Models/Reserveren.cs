using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackendMReserveren.Models
{
    public class Reserveren
    {
        public int ReserverenId { get; set; }
        public int GebruikerId { get; set; }
        public string Datum { get; set; } 
        public string Tijd { get; set; }
        public int RuimteId { get; set; }
    }
}