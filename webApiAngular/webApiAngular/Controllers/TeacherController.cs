using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using webApiAngular.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace webApiAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
         

        public TeacherController(IConfiguration configuration , IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env; 
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select TeacherId, Name, Address, tel from dbo.Teacher";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TeacherAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand mycommand = new SqlCommand(query, myconnection))
                {

                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myconnection.Close();

                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Teacher em)
        {
            string query = @"Insert Into dbo.Teacher values ('" + em.Name + "','" + em.Address + "','" + em.tel + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TeacherAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand mycommand = new SqlCommand(query, myconnection))
                {

                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myconnection.Close();

                }
            }
            return new JsonResult("Added Successfuly");
        }
        [HttpPut]
        public JsonResult Put(Teacher em)
        {
            string query = @"Update dbo.Teacher set 
                            Name = '" + em.Name + @"' 
                            ,Address = '" + em.Address + @"' 
                            ,tel = '" + em.tel + @"'
                            
                            where TeacherId = " + em.TeacherId + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TeacherAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand mycommand = new SqlCommand(query, myconnection))
                {

                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myconnection.Close();

                }
            }
            return new JsonResult("Updated Successfuly");
        }
     
        
           
        

    }
}
