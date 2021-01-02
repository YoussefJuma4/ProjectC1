using BackendMReserveren.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BackendMReserveren.Controllers
{
    public class ReserverenController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @" select ReserverenId,(convert(varchar(10),Datum,120)) as Datum, convert(varchar(10),Tijd,120) as Tijd,RuimteId from dbo.Reserveren ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);

            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Reserveren res)
        {
            try
            {
                string query = @"insert into dbo.Reserveren values
                                ( '" + res.GebruikerId + @"',
                                '" + res.RuimteId + @"',
                                '" + res.Datum + @"',
                                '" + res.Tijd + @"')
                                                      ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Reserveren is Gemaakt!!";
            }
            catch (Exception)
            {
                return "Reserveren mislukt!!";
            }
        }
        public string Put(Reserveren res)
        {
            try
            {
                string query = @"update dbo.Reserveren set
                                Datum ='" + res.Datum + @"',
                                Tijd = '" + res.Tijd + @"',
                                GebruikerId = '" + res.GebruikerId + @"',
                                RuimteId ='" + res.RuimteId + @"'
                                where ReserverenId = " + res.ReserverenId + @"                    
                                                            ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Resreveren is gewijzigd!!";
            }

            catch (Exception)
            {
                return "Reserveren wijzigen is mislukt!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @" delete from dbo.Reserveren where ReserverenId = " + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Reserveren is verwijdert!!";
            }

            catch (Exception)
            {
                return "Verwijderen mislukt!!";
            }
        }

    }
}
