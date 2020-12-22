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
    public class GebruikersController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" select GebruikerId,Voornaam,Achternaam,Email,Wachtwoord,Admin from dbo.Gebruikers ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using(var cmd= new SqlCommand(query,con))
                using (var da= new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Gebruikers geb)
        {
            try
            {
                string query = @"insert into dbo.Gebruikers values
                                ('"+geb.Voornaam+ @"',
                                '" + geb.Achternaam + @"',                     
                                '" + geb.Email + @"',
                                '" + geb.Wachtwoord + @"',
                                '" + geb.Admin + @"')
                                                      ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Gebruiker is toegevoegd!!";
            }
            catch (Exception)
            {
                return "Gebruiker toegevoegen is mislukt!!";
            }
        }
        public string Put(Gebruikers geb)
        {
            try
            {
                string query = @"update dbo.Gebruikers set
                                Voornaam ='" + geb.Voornaam + @"',
                                Achternaam ='" + geb.Achternaam + @"',                     
                                Email = '" + geb.Email + @"',
                                Wachtwoord ='" + geb.Wachtwoord + @"',
                                Admin = '" + geb.Admin + @"'
                                where GebruikerId = " + geb.GebruikerId + @"                    
                                                            ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Gebruiker is gewijzigd!!";
            }

            catch (Exception)
            {
                return "Gebruiker wijzigen is mislukt!!";
            }
                }

        public string Delete(int id)
        {
            try
            {
                string query = @" delete from dbo.Gebruikers where GebruikerID = " + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Gebruiker is verwijdert!!";
            }

            catch (Exception)
            {
                return "Verwijderen mislukt!!";
            }
        }




    }
}
