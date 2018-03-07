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
        public AccountModel Register(AccountModel model)
        {
            return model;
        }


        [Route("api/User/UserList")]
        [HttpGet]
        public List<AccountModel> UserList()
        {
            var userList = new List<AccountModel>();
            var user1 = new AccountModel
            {
                Id = "1",
                Username = "Kiran",
                Password = "Password",
                Email = "Kiran@mail.com",
                FirstName = "Kiran",
                LastName = "Gurung",
            };
            userList.Add(user1);
            var user2 = new AccountModel
            {
                Id = "2",
                Username = "Dhan",
                Password = "Password",
                Email = "DhanSingh@mail.com",
                FirstName = "Dhan",
                LastName = "Singh",
            };
            userList.Add(user2);
            return userList;
        }
    }
}
