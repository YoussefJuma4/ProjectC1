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
    public class RuimteController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @" select RuimteId,Locatie,Capaciteit from dbo.Ruimtes ";
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

        public string Post(Ruimtes ruim)
        {
            try
            {
                string query = @"insert into dbo.Ruimtes values
                                ('" + ruim.Locatie + @"',
                                '" + ruim.Capaciteit + @"')                    
                               
                                                      ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Ruimte is toegevoegd!!";
            }
            catch (Exception)
            {
                return "Ruimte toevoegen is mislukt!!";
            }
        }
        public string Put(Ruimtes ruim)
        {
            try
            {
                string query = @"update dbo.Ruimtes set
                                Locatie ='" + ruim.Locatie + @"',
                                Capaciteit ='" + ruim.Capaciteit + @"'                   
                               
                                where RuimteId = " + ruim.RuimteId+ @"                    
                                                            ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Ruimte is gewijzigd!!";
            }

            catch (Exception)
            {
                return "Ruimte wijzigen is mislukt!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @" delete from dbo.Ruimtes where RuimteId = " + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MReserverenDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Ruimte is verwijdert!!";
            }

            catch (Exception)
            {
                return "Verwijderen mislukt!!";
            }
        }
    }
}
