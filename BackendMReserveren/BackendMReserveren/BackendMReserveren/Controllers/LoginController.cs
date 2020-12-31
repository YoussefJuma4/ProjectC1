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
    public class LoginController : ApiController
    {



       //POST: Login
        public bool Post(Gebruikers geb)
        {
            try
            {

                string query = @"select * from dbo.Gebruikers
                    where (Email = '" + geb.Email + @"' and Wachtwoord = '" + geb.Wachtwoord + @"' and Admin = '" + geb.Admin + @"')";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                string s = "";
               

                for (int i = 0; i <table.Rows.Count; i++)
                {
                    s += table.Rows[i];

                }
                return s != "";

            }

            catch (Exception)
            {

                return false;
            }
        }
    }
}