using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackendMReserveren.Models
{
    public class Gebruikers
    {
        public int GebruikerId { get; set; }
        public string Voornaam { get; set; }
        public string Achternaam { get; set; }
        public string Email { get; set; }
        public string Wachtwoord { get; set; }
        public int Admin { get; set; }

    }
}