using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BackendMReserveren.Models;

namespace BackendMReserveren.Controllers
{
    public class ProfileController : ApiController
    {
        // POST: Profile

        public class User
        {
            public int GebruikerId;
            public string Voornaam;
            public User(int id, string vn)
            {
                this.GebruikerId = id;
                this.Voornaam = vn;
            }

        }
        public DataTable Post(Gebruikers geb)
        {
            try
            {

                string query = @"select * from dbo.Gebruikers
                   where (Email = '" + geb.Email + "')";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }

                 return table;

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}