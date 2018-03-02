using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class UserController : ApiController
    {
        [Route("api/User/Register")]
        [HttpPost]
        public bool Register(AccountModel model)
        {
            return true;
        }
    }
}
