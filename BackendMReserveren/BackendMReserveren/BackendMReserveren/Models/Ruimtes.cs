using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackendMReserveren.Models
{
    public class Ruimtes
    {
        public int RuimteId { get; set; }
        public string Locatie { get; set; }
        public int Capaciteit { get; set; }
    }
}